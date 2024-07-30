import React from "react";
import { MyProduct } from "./models";
interface ProductProps {
  products: MyProduct[];
}

const Product = ({ products }: ProductProps) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default Product;
