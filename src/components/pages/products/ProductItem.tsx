import { useState } from "react";
import { MyProduct } from "./models";

interface ProductProps {
  product: MyProduct;
}

const ProductItem = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";
  const btnClasses = ["w-32 h-12  border-4", btnBgClassName];
  return (
    <div>
      <img src={product.image} className="w-1/12 " alt={product.title} />
      <div>{product.title}</div>
      <div>{product.price}</div>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails(!details)}>
        {details ? "Hide details" : "Show Details"}
      </button>
      {details && <div>{product.description}</div>}
    </div>
  );
};

export default ProductItem;
