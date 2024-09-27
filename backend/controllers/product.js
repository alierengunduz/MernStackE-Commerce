const Product = require("../models/products");
const mongoose = require("mongoose");

const objectId = mongoose.Types.ObjectId;

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;

    // Eğer kategori 'All' ise tüm ürünleri getir
    const query = category && category !== "all" ? { category } : {};

    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get single product
const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!objectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a product
const createProduct = async (req, res) => {
  try {
    const imagePaths = req.files.map((file) => file.path);
    const { sizes, colors, price, ...otherFields } = req.body;
    const parsedSizes = typeof sizes === "string" ? JSON.parse(sizes) : sizes;
    const parsedColors =
      typeof colors === "string" ? JSON.parse(colors) : colors;

    const product = new Product({
      ...otherFields,
      image: imagePaths,
      sizes: parsedSizes,
      colors: parsedColors,
      price: price, // Burada price verisini de ekliyoruz
    });

    await product.save();
    console.log("Saved product:", product); // Debug satırı
    res.status(201).json(product);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // ObjectId'nin geçerli olup olmadığını kontrol edin
    if (!objectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    // Gelen body'den sizes ve colors'ı parse edin
    const { sizes, colors, ...otherFields } = req.body;
    const parsedSizes = typeof sizes === "string" ? JSON.parse(sizes) : sizes;
    const parsedColors =
      typeof colors === "string" ? JSON.parse(colors) : colors;

    // Güncellenecek verileri birleştirin
    const updatedData = {
      ...otherFields,
      sizes: parsedSizes,
      colors: parsedColors,
    };

    // Ürünü güncelle
    const product = await Product.findByIdAndUpdate(productId, updatedData, {
      new: true, // Güncellenmiş veriyi döndürmek için
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};
// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!objectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

const searchProduct = async (req, res) => {
  try {
    const productName = req.params.name;
    const products = await Product.find({
      name: { $regex: productName, $options: "i" },
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
