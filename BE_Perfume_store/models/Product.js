const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    name: { type: String, required: true },
    brand: { type: Schema.Types.ObjectId, ref: "Brand", required: true },
    description: { type: String, required: true },
    notes: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ imageUrl: { type: String, required: true } }],
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
