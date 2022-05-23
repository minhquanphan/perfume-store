const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = Schema(
  {
    name: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
