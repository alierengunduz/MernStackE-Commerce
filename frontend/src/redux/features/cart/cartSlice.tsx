import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../../types/types";

// LocalStorage'dan sepeti al
const getInitialCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export interface CartState {
  cart: any[];
}

const initialState: CartState = {
  cart: getInitialCart(),
};

const saveCartToLocalStorage = (cart: any[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: ProductType;
        size: string;
        color: string;
        quantity: number;
      }>
    ) => {
      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.product._id === action.payload.product._id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex] = {
          ...state.cart[existingItemIndex],
          quantity:
            state.cart[existingItemIndex].quantity + action.payload.quantity,
        };
      } else {
        state.cart.push({
          ...action.payload,
        });
      }

      saveCartToLocalStorage(state.cart); // LocalStorage'ı güncelle
    },

    removeFromCart: (
      state,
      action: PayloadAction<{
        productId: string;
        size: string;
        color: string;
      }>
    ) => {
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.product._id === action.payload.productId &&
            item.size === action.payload.size &&
            item.color === action.payload.color
          )
      );

      saveCartToLocalStorage(state.cart); // LocalStorage'ı güncelle
    },
    clearCart: (state) => {
      state.cart = [];
      saveCartToLocalStorage(state.cart); // LocalStorage'ı güncelle
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
