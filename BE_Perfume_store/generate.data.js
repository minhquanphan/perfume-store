// const fs = require("fs");

// const loadData = () => {
//   let db = fs.readFileSync("data.json", "utf8");
//   return JSON.parse(db);
// };
require("dotenv").config();
const mongoURI = process.env.MONGO_DEV_URI;
const mongoose = require("mongoose");

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log(`DB connected`);
    createDatabase();
  })
  .catch((err) => console.log(err));

const data = require("./data.json");
const Product = require("./models/Product");
const Brand = require("./models/Brand");

const createDatabase = async () => {
  await Product.collection.drop();
  await Brand.collection.drop();
  for (let i = 0; i < 400; i++) {
    let brand = await Brand.findOne({ name: data[i].Brand });
    if (!brand) {
      brand = await Brand.create({ name: data[i].Brand });
    }

    let product = await Product.create({
      name: data[i].Name,
      brand: brand._id,
      // brand: data[i].Brand,
      description: data[i].Description,
      notes: data[i].Notes,
      price: Math.floor(Math.random() * (200 - 140 + 1) + 60),
      images: [{ imageUrl: data[i]["Image URL"] }],
    });
  }
  console.log("done");
};

// function sample() {
//     return a +100;
// }

// sample = () => {
//     return a + 100;
// }
