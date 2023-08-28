import React from "react";
import CartItem from "../CartItem";

const ProductList = ({ products }) => {
  //console.log(products?.data);
  return (
    <div className=" my-5 grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-6">
      {products?.data?.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
