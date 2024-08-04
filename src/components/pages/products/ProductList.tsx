import React, { useEffect, useState } from "react";
// import { produstsArr } from "./data/data";
import ProductItem from "./ProductItem";
import { getAllProducts } from "../../../appi/apiProduct";
import { MyProduct } from "./models";

const ProductList = () => {
  const [data, setData] = useState<MyProduct[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getAllProducts();
      setData(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      {data &&
        data.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductList;
