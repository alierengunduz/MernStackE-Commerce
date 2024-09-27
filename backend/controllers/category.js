const Category = require("../models/category");

const getALLCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({
      error: "Categories not found",
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.json(category);
  } catch (error) {
    return res.status(400).json({
      error: "Category not found",
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.json({ category });
  } catch (error) {
    return res.status(400).json({
      error: "Category not created",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: "Category not updated" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({
      message: "Category deleted",
      _id: category._id, // Silinen kategorinin id'sini geri döndürüyoruz
    });
  } catch (error) {
    return res.status(400).json({
      error: "Category not deleted",
    });
  }
};

module.exports = {
  getALLCategory,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
