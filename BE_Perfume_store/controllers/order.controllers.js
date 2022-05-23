const { sendResponse, catchAsync, AppError } = require("../helpers/utils");
const Order = require("../models/Order");
const Product = require("../models/Product");

const orderController = {};

orderController.createOrder = catchAsync(async (req, res, next) => {
  let { user, items } = req.body;
  console.log(items);
  for (let i = 0; i < items.length; i++) {
    let product = await Product.findById(items[i].product);
    console.log(product.price);
    items[i].price = product.price;
  }
  console.log(items);
  let order = await Order.create({
    user: user,
    items: items,
  });
  return sendResponse(res, 200, true, { order }, null, "Success");
});

orderController.getOrderDetails = catchAsync(async (req, res, next) => {
  const orderId = req.params.id;
  const orderDetails = await Order.findOne({ _id: orderId });
  if (!orderDetails) {
    throw new AppError(401, "Order not found", "error");
  }
  return sendResponse(res, 200, true, { orderDetails }, null, "Success");
});

orderController.updateOrder = catchAsync(async (req, res, next) => {
  const orderId = req.params.id;
  const { item } = req.body;
  let order = Order.findByIdAndUpdate(orderId);
  if (!order) {
    throw new AppError(401, "Order not found", "error");
  }
});

orderController.deleteOrder = catchAsync(async (req, res, next) => {
  const orderId = req.params.id;
  await Order.findByIdAndUpdate(
    { _id: orderId },
    { isDeleted: true },
    { new: true }
  );
  return sendResponse(res, 200, true, {}, null, "Success");
});

module.exports = orderController;
