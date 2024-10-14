// data.js
import axios from "axios";

// Function to fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products; // Return products array from the response
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array in case of an error
  }
};

// Function to fetch products by category
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return response.data.products; // Return products array
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return []; // Return empty array in case of error
  }
};
