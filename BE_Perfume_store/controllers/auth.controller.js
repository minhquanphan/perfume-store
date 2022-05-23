const { catchAsync, sendResponse, AppError } = require("../helpers/utils");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const authController = {};

authController.loginWithEmailPassword = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email: email }, "+password");

  if (!user) {
    throw new AppError(404, "Email not exists", "error");
  }

  const isMatch = bcrypt.compare(password, user.password);
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

module.exports = authController;
