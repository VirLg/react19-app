import React from "react";
import { MyProduct } from "./models";

interface ProductProps {
  product: MyProduct;
}

const ProductItem = ({ product }: ProductProps) => (
  <div>
    <img src={product.image} alt={product.title} />
    <div>{product.title}</div>
    <div>{product.description}</div>
    <div>{product.price}</div>
  </div>
);

export default ProductItem;
