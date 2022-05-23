const express = require("express");
const {
  createOrder,
  getOrderDetails,
  deleteOrder,
} = require("../controllers/order.controllers");
const { loginRequired } = require("../middleware/authentication");
const router = express.Router();
router.post("/create", createOrder);
router.get("/:id", getOrderDetails);
router.delete("/:id", deleteOrder);
module.exports = router;
