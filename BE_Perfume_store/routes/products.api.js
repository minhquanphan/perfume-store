const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
  addProduct,
} = require("../controllers/product.controllers");
const { adminRequired } = require("../middleware/authentication");

const router = express.Router();

router.post("/addProduct", adminRequired, addProduct);
router.get("/all", getAllProducts);
router.get("/:id", getSingleProduct);
router.delete("/:id", deleteSingleProduct);

module.exports = router;
