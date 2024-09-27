import HomePage from "../pages/home/HomePage";
import CollectionPage from "../pages/collection/CollectionPage";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import ProductPage from "../pages/product/ProductPage";
import CartPage from "../pages/cart/CartPage";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import AdminUserPage from "../pages/admin/user/AdminUserPage";
import AdminCategoryPage from "../pages/admin/category/AdminCategoryPage";
import AdminCategoryUpdatePage from "../pages/admin/category/AdminCategoryUpdatePage";
import AdminCategoryCreatePage from "../pages/admin/category/AdminCategoryCreatePage";
import AdminProductPage from "../pages/admin/product/AdminProductPage";
import AdminProductCreatePage from "../pages/admin/product/AdminProductCreatePage";
import AdminProductUpdatePage from "../pages/admin/product/AdminProductUpdatePage";
import AdminOrderPage from "../pages/admin/order/AdminOrderPage";
import Success from "../pages/success/Success";
export const CustomRouter = [
  {
    path: "/",
    element: <HomePage />,
    hideHeaderFooter: false, // Header ve Footer gösterilecek
  },
  {
    path: "/collection",
    element: <CollectionPage />,
    hideHeaderFooter: false,
  },
  {
    path: "/about",
    element: <AboutPage />,
    hideHeaderFooter: false,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    hideHeaderFooter: false,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
    hideHeaderFooter: false,
  },
  {
    path: "/success",
    element: <Success />,
    hideHeaderFooter: false,
  },
  {
    path: "/cart",
    element: <CartPage />,
    hideHeaderFooter: false,
  },
  {
    path: "/login",
    element: <LoginPage />,
    hideHeaderFooter: true, // Header ve Footer gizlenecek
  },
  {
    path: "/register",
    element: <RegisterPage />,
    hideHeaderFooter: true,
  },
  {
    path: "/admin/users",
    element: <AdminUserPage />,
    hideHeaderFooter: true,
  },
  {
    path: "/admin/categories",
    element: <AdminCategoryPage />,
    hideHeaderFooter: true,
  },
  {
    path: "/admin/category/:categoryId",
    element: <AdminCategoryUpdatePage />,
    hideHeaderFooter: true,
  },
  {
    path: "/admin/categories/create",
    element: <AdminCategoryCreatePage />,
    hideHeaderFooter: true,
  },
  {
    path: "/admin/products",
    element: <AdminProductPage />,
    hideHeaderFooter: true,
  },
  {
    path: "/admin/products/create",
    element: <AdminProductCreatePage />,
    hideHeaderFooter: true,
  },
  {
    path: "/admin/product/:productId",
    element: <AdminProductUpdatePage />,
    hideHeaderFooter: true,
  },
  {
    path: "/admin/orders",
    element: <AdminOrderPage />,
    hideHeaderFooter: true,
  },
];
