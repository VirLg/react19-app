import { useState } from "react";
import { MyProduct } from "./models";

interface ProductProps {
  product: MyProduct;
}

const ProductItem = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  return (
    <div>
      <img src={product.image} className="w-1/12 " alt={product.title} />
      <div>{product.title}</div>
      <div>{product.price}</div>
      <button
        className="w-32 h-12  border-4 "
        onClick={() => setDetails(!details)}>
        Show Details
      </button>
      {details && <div>{product.description}</div>}
    </div>
  );
};

export default ProductItem;
