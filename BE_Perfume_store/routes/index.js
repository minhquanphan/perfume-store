var express = require("express");
var router = express.Router();

/* GET home page. */
const userRouter = require("./users.api.js");
router.use("/users", userRouter);

const brandRouter = require("./brands.api.js");
router.use("/brands", brandRouter);

const productRouter = require("./products.api.js");
router.use("/products", productRouter);

const orderRouter = require("./orders.api.js");
router.use("/orders", orderRouter);

module.exports = router;
