const express = require("express");
const {
  createBrand,
  getAllBrand,
} = require("../controllers/brand.controllers");

const router = express.Router();

router.post("/create", createBrand);
router.get("/all", getAllBrand);

module.exports = router;
