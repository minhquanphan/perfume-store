const { catchAsync, sendResponse, AppError } = require("../helpers/utils");
const Brand = require("../models/Brand");

const brandController = {};

brandController.createBrand = catchAsync(async (req, res, next) => {
  let { name } = req.body;
  let brand = await Brand.findOne({ name });

  if (brand) {
    throw new AppError(409, "brand already exists", "Error");
  }

  brand = await Brand.create({ name });
  return sendResponse(res, 200, true, brand, null, "success");
});

brandController.getAllBrand = catchAsync(async (req, res, next) => {
  let { page, limit, ...filters } = { ...req.query };
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;
  const allow = ["name"];
  filterCondition = [{ isDeleted: false }];

  allow.forEach((field) => {
    if (filters[field] != undefined) {
      filterCondition.push({ [field]: filters[field] });
    }
  });

  const filterCriteria = filterCondition ? { $and: filterCondition } : {};
  const count = await Brand.countDocuments(filterCriteria);
  const totalPages = Math.ceil(count / limit);
  const offSet = limit * (page - 1);
  let brandList = await Brand.find(filterCriteria)
    .sort({ createdAt: 1 })
    .skip(offSet)
    .limit(limit);
  return sendResponse(res, 200, [brandList, totalPages], null, "Success");
});

module.exports = brandController;
