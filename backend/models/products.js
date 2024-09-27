const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
      minLength: 3,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: 1000,
      minLength: 3,
    },
    price: {
      current: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
        required: true,
      },
    },
    image: {
      type: Array,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    subCategory: {
      type: String,
      required: true,
      trim: true,
    },

    sizes: [
      {
        type: String,
        required: true,
      },
    ],
    bestseller: {
      type: Boolean,
      default: false,
    },
    colors: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
