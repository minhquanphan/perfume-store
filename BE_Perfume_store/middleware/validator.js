const mongoose = require("mongoose");
const { sendResponse, AppError } = require("../helpers/utils");
const { validationResult } = require("express-validator");
const validators = {};

validators.validate;

validators.checkObjectId = (paramId) => {
  if (!mongoose.Type.isObjectId.isValid(paramId)) {
    throw new Error("Invalid object");
  }
  return true;
};

module.exports = validators;
