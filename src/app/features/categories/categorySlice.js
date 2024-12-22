// categorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, getNewsByCategory } from "./categoryAPI";

// সব ক্যাটেগরি ফেচ করার অ্যাসিঙ্ক থাংক
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const categories = await getCategories();
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// নির্দিষ্ট ক্যাটেগরির নিউজ ফেচ করার অ্যাসিঙ্ক থাংক
export const fetchNewsByCategory = createAsyncThunk(
  "categories/fetchNewsByCategory",
  async (categoryId, thunkAPI) => {
    try {
      const news = await getNewsByCategory(categoryId);
      return news;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// প্রাথমিক স্টেট
const initialState = {
  categories: [],
  news: [],
  isLoading: false,
  isError: false,
  error: null,
};

// স্লাইস তৈরি করা
const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(fetchNewsByCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchNewsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(fetchNewsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
