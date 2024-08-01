import axios from "axios";
import { MyProduct } from "../components/pages/products/models";

// Встановлення базової URL для axios
axios.defaults.baseURL = "https://fakestoreapi.com/products";

// Функція для отримання всіх продуктів
export const getAllProducts = async (): Promise<MyProduct[]> => {
  try {
    const { data } = await axios.get<MyProduct[]>("?limit=3");

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // або можете повернути пустий масив чи інше значення за замовчуванням
  }
};
