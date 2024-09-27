import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoryType } from "../../../types/types";

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async (categoryId?: string) => {
    // Eğer categoryId varsa, belirli bir kategori için istek yap
    const response = categoryId
      ? await axios.get(`/api/categories/${categoryId}`)
      : await axios.get("/api/categories");
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId: string) => {
    const response = await axios.delete(`/api/categories/${categoryId}`);
    return response.data;
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({
    categoryId,
    updatedData,
  }: {
    categoryId: string;
    updatedData: Partial<CategoryType>;
  }) => {
    const response = await axios.put(
      `/api/categories/${categoryId}`,
      updatedData
    );
    return response.data;
  }
);

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (newCategory: Partial<CategoryType>) => {
    const response = await axios.post("/api/categories", newCategory);
    return response.data;
  }
);

export interface CategoryState {
  categories: CategoryType[]; // Kategoriler için CategoryType tipinde bir array
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedCategory: string; // Seçilen kategori
}

const initialState: CategoryState = {
  categories: [],
  status: "idle", // Loading state yönetimi için
  error: null,
  selectedCategory: "", // Başlangıçta seçili kategori boş
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (
      state: CategoryState,
      action: PayloadAction<string>
    ) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.categories = action.payload;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || null;
    });
    builder.addCase(deleteCategory.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      // Silme işlemi başarılı olduğunda Redux state'i güncelle
      state.categories = state.categories.filter(
        (category) => category._id !== action.payload._id // ID'ye göre filtreleme yap
      );
      state.status = "succeeded"; // İşlem başarılı olarak işaretlendi
    });

    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || null;
    });

    builder.addCase(updateCategory.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      const index = state.categories.findIndex(
        (category) => category._id === action.payload._id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
      state.status = "succeeded";
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || null;
    });
    builder.addCase(createCategory.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
      state.status = "succeeded";
    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || null;
    });
  },
});

export const { setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
