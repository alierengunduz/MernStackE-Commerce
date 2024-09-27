const router = require("express").Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
} = require("../controllers/product");
const multer = require("multer");

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5, // 5MB
  // },
  // fileFilter: (req, file, cb) => {
  //   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
  //     return cb(null, true);
  //   } else {
  //     return cb(new Error("Only .jpeg or .png files are allowed"));
  //   }
  // },
});

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/", upload.array("image", 4), createProduct);
router.put("/:id", upload.array("image", 4), updateProduct);
router.delete("/:id", deleteProduct);
router.get("/search/:name", searchProduct);

module.exports = router;
