const { sendResponse, catchAsync, AppError } = require("../helpers/utils");
const Product = require("../models/Product");

const productController = {};

productController.addProduct = catchAsync(async (req, res, next) => {
  let { name, description, price, images } = req.body;
  let product = await Product.findById(id);
  if (product) {
    throw new AppError(409, "Product exist", "add product failed");
  }
  product = await Product.create({ name, description, price, images });
  return sendResponse(res, 200, true, { product }, null, "Success");
});

productController.getAllProducts = catchAsync(async (req, res, next) => {
  let { page, limit, ...filters } = { ...req.query };
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 25;
  const filterCondition = [{ isDeleted: false }];
  const allow = ["name"];
  allow.forEach((field) => {
    if (filters[field] != undefined) {
      filterCondition.push({ [field]: filters[field] });
    }
  });
  const filterCriteria = filterCondition.length
    ? { $and: filterCondition }
    : {};
  const count = await Product.countDocuments(filterCriteria);
  const offSet = limit * (page - 1);
  const totalPages = Math.ceil(count / limit);
  let productList = await Product.find(filterCriteria)
    .sort({ createdAt: 1 })
    .skip(offSet)
    .limit(limit);
  return sendResponse(
    res,
    200,
    true,
    { productList, totalPages },
    null,
    "Success"
  );
});

productController.getSingleProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError(404, "Product not found", "error");
  }
  return sendResponse(res, 200, true, { product }, null, "Success");
});

productController.deleteSingleProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await Product.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  return sendResponse(res, 200, true, {}, null, "Success");
});

module.exports = productController;
