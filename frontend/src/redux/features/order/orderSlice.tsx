import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_STRIPE_SECRET_KEY = import.meta.env.VITE_API_STRIPE_SECRET_KEY;

export const fetchData = createAsyncThunk("order/fetchData", async () => {
  try {
    const response = await axios.get(
      "https://api.stripe.com/v1/payment_intents",
      {
        headers: {
          Authorization: `Bearer ${VITE_API_STRIPE_SECRET_KEY}`,
        },
      }
    );
    console.log("API response:", response.data); // Yanıtı kontrol edin
    return response.data.data;
  } catch (error: any) {
    console.error(
      "API Fetch Error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
});

export interface OrderState {
  orders: any[];
  status: "idle" | "loading" | "failed" | "succeeded";
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  status: "idle",
  error: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state: OrderState) => {
        state.status = "loading";
      })
      .addCase(
        fetchData.fulfilled,
        (state: OrderState, action: PayloadAction<any[]>) => {
          state.status = "succeeded";
          state.orders = action.payload;
        }
      );
  },
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
