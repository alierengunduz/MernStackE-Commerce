const router = require("express").Router();
const {
  getAllCoupons,
  getSingleCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/coupon");

router.get("/", getAllCoupons);
router.get("/:id", getSingleCoupon);
router.post("/", createCoupon);
router.put("/:id", updateCoupon);
router.delete("/:id", deleteCoupon);

module.exports = router;
