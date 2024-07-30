import React from "react";
import { produstsArr } from "./data/data";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div>
      {produstsArr.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
