const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, ref: "Quantity", required: true },
        price: { type: Number, ref: "Price", required: true },
      },
    ],
    status: { type: String, enum: ["pending", "paid"], default: "pending" },
    isDeleted: { type: String, default: false },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
