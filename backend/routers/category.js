const router = require("express").Router();
const {
  getALLCategory,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

router.get("/", getALLCategory);
router.get("/:id", getCategory);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
