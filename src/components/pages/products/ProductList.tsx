import React, { useEffect, useState } from "react";
// import { produstsArr } from "./data/data";
import ProductItem from "./ProductItem";
import { getAllProducts } from "../../../appi/apiProduct";
import { MyProduct } from "./models";

const ProductList = () => {
  const [data, setData] = useState<MyProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        console.log("response", response);
        setData(response); // Оновлення стану з завантаженими даними
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData(); // Виклик асинхронної функції для завантаження даних
  }, []);
  return (
    <div>
      {data.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
