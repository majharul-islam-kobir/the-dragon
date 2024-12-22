// categoryAPI.js
import axios from "axios";

const BASE_URL = "https://openapi.programming-hero.com/api/news";


export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data.data.news_category;
  } catch (error) {
    console.error("error:", error);
    throw error;
  }
};

export const getNewsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(`${BASE_URL}/category/${categoryId}`);
    return response.data.data;
  } catch (error) {
    console.error(`error${categoryId} error:`, error);
    throw error;
  }
};
