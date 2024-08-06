import { useEffect } from "react";
import { useAppDisaptch, useAppSelector } from "../../redux";
import { getItProduct } from "../../redux/reducers/userProduct";
import ProductCart from "../ProductCart";

const Product = () => {
  const dispatch = useAppDisaptch();
  const { product } = useAppSelector((s) => s.product);
  console.log(product, "pro");
  useEffect(() => {
    dispatch(getItProduct());
  }, []);
  return (
    <div className="my-[50px]">
      <div className="container">
        <div className="flex items-center flex-wrap justify-between gap-5">
          {product.map((el) => (
            <ProductCart el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
