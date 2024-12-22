// store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categories/categorySlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export default store;
