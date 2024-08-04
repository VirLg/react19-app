import axios, { AxiosResponse } from "axios";
import { MyProduct } from "../components/pages/products/models";

axios.defaults.baseURL = "https://fakestoreapi.com";

export const getAllProducts = async (): Promise<MyProduct[]> => {
  try {
    const response: AxiosResponse<MyProduct[]> = await axios.get<MyProduct[]>(
      "/products?limit=3"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};
