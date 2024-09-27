import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import categoryReducer from "./features/category/categorySlice";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import orderReducer from "./features/order/orderSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    user: userReducer,
    carts: cartReducer,
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
