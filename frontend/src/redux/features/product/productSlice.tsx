import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../../types/types";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({ category, sortOrder }: { category: string; sortOrder: string }) => {
    const response = await axios.get("/api/products", {
      params: { category, sortOrder },
    });
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id: string) => {
    const response = await axios.get(`/api/products/${id}`);
    return response.data as ProductType;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId: string, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (product: ProductType, thunkAPI) => {
    try {
      const response = await axios.post("/api/products", product);
      return response.data as ProductType;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: ProductType, thunkAPI) => {
    try {
      const response = await axios.put(`/api/products/${product._id}`, product);
      return response.data as ProductType;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/search",
  async (name: string) => {
    try {
      const response = await axios.get(`/api/products/search/${name}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export interface ProductState {
  product: Array<ProductType>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  productDetail: ProductType | null;
  sortOrder: string;
}

const initialState: ProductState = {
  product: [],
  status: "idle", // Loading state yönetimi için
  error: null,
  productDetail: null,
  sortOrder: "relevant",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setProductDetail: (
      state: ProductState,
      action: PayloadAction<ProductType>
    ) => {
      state.productDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; // Veri çekme işlemi başladı
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // Veri çekme işlemi başarılı
        state.product = action.payload; // Ürünleri store'a ekle
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"; // Veri çekme işlemi başarısız
        state.error = action.error.message ?? "Failed to fetch products";
      });
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Ürünü state'den çıkar
        state.product = state.product.filter(
          (product) => product._id !== action.payload._id
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to delete product";
      });
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetail = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch product";
      })
      .addCase(createProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to create product";
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = state.product.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to update product";
      })
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to search products";
      });
  },
});

export const { setProductDetail, setSortOrder } = productSlice.actions;

export default productSlice.reducer;
