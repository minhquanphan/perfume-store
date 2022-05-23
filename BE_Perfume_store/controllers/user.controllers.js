const { catchAsync, sendResponse, AppError } = require("../helpers/utils");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const Order = require("../models/Order");

const userControllers = {};

userControllers.register = catchAsync(async (req, res, next) => {
  let { name, email, password, city } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    throw new AppError(409, "already registered", "login failed");
  }
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  user = await User.create({ name, email, password, city });
  const accessToken = user.generateToken();
  return sendResponse(res, 200, true, { user, accessToken }, null, "success");
});

userControllers.loginEmailPassword = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // if (!email || !password) {
  //   throw new AppError(
  //     422,
  //     "Validation error",
  //     "Please enter correct email and password"
  //   );
  // } // sử dụng để valiade khi không muốn viết validator middleware (nằm ở nơi đầu tiên của 1 controller)

  let user = await User.findOne({ email: email }, "+password");

  if (!user) {
    throw new AppError(404, "User not found", "error");
  }

  const isMatch = bcrypt.compare(password, user.password); //tại sao lại cần password, khi user.password là đủ để lấy data ?
  if (!isMatch) {
    throw new AppError(404, "Password does not match", "error");
  }

  const accessToken = user.generateToken();

  return sendResponse(
    res,
    200,
    true,
    { user, accessToken },
    null,
    "create new user success"
  );
});

userControllers.getCurrentUserOrder = catchAsync(async (req, res, next) => {
  let { page, limit, sortBy, ...filter } = { ...req.query };
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;
  const totalOrders = await Order.count({ ...filter, isDeleted: false });
  const totalPages = Math.ceil(totalOrders / limit);
  const offSet = limit * (page - 1);
  const { currentUserId } = req;
  const currentUser = await User.findById(currentUserId);
  const userId = req.params.id;
  if (userId !== currentUserId && currentUser.role !== "admin") {
    throw new AppError(401, "Only admin can view this user order", "error");
  }
  const order = await Order.find({ userId })
    .sort({ ...sortBy, createdAt: -1 })
    .skip(offSet)
    .limit(limit);
  if (!order) {
    throw new AppError(401, "no order found", "error");
  }

  return sendResponse(res, 200, true, { order, totalPages }, null, "success");
});

userControllers.getCurrentUser = catchAsync(async (req, res, next) => {
  const { currentUserId } = req;
  let user = await User.findByIdAndUpdate(currentUserId);

  if (!user) {
    throw new AppError(404, "User not found", "Get current user");
  }
  return sendResponse(res, 200, { user }, null, "success");
});

userControllers.paymentUserOrder = catchAsync(async (req, res, next) => {
  const orderId = req.params.id;
  const { currentUserId } = req;
  let order = await Order.find({ orderId });
  let currentUser = await User.findById(currentUserId);
  const total = order.total;
  const funds = currentUser.balance;
  if (total > funds) {
    throw new AppError(403, "Insufficient balance", "error");
  }
  currentUser = await findByIdAndUpdate(
    { _id: currentUser },
    { balance: funds - total },
    { new: true }
  );
  order = await findByIdAndUpdate(
    { _id: orderId },
    { status: "paid" },
    { new: true }
  );
  return sendResponse(res, 200, true, { currentUser, order }, null, "success");
});

module.exports = userControllers;
