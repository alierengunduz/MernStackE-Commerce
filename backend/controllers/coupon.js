const Coupon = require("../models/coupon");
const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

// Get all coupons
const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get single coupon
const getSingleCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;
    if (!objectId.isValid(couponId)) {
      return res.status(400).json({ message: "Invalid Coupon ID" });
    }
    const coupon = await Coupon.findById(couponId);
    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }
    res.status(200).json(coupon);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a coupon
const createCoupon = async (req, res) => {
  try {
    const { code, discountPercent } = req.body;
    const coupon = new Coupon({ code, discountPercent });
    await coupon.save();
    res.status(201).json(coupon);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a coupon
const updateCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;
    if (!objectId.isValid(couponId)) {
      return res.status(400).json({ message: "Invalid Coupon ID" });
    }
    const { code, discountPercent } = req.body;
    const updatedCoupon = await Coupon.findByIdAndUpdate(
      couponId,
      { code, discountPercent },
      { new: true }
    );
    res.status(200).json(updatedCoupon);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a coupon
const deleteCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;
    if (!objectId.isValid(couponId)) {
      return res.status(400).json({ message: "Invalid Coupon ID" });
    }
    await Coupon.findByIdAndDelete(couponId);
    res.status(200).json({ message: "Coupon deleted successfully" });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllCoupons,
  getSingleCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon,
};
