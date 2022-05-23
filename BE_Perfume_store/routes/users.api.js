const express = require("express");
const {
  register,
  loginEmailPassword,
  getCurrentUser,
  getCurrentUserOrder,
  paymentUserOrder,
} = require("../controllers/user.controllers");
const { loginRequired } = require("../middleware/authentication");
const router = express.Router();

router.post("/register", register);
router.post("/login", loginEmailPassword);
router.get("/:id/order", loginRequired, getCurrentUserOrder);
router.put("/id/payment", loginRequired, paymentUserOrder);
router.put("/me", loginRequired, getCurrentUser);

module.exports = router;
