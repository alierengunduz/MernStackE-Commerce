const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorMid");
const productRoutes = require("./routers/product");
const categoryRoutes = require("./routers/category");
const userRoutes = require("./routers/user");
const couponRoutes = require("./routers/coupon");
const paymentRoutes = require("./routers/payment");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api", paymentRoutes);
app.use("/images", express.static("uploads"));

// Error Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on port ${PORT}`);
});
