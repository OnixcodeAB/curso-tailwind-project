import React from "react";
import CartItem from "../CartItem";

const ProductList = ({products}) => {
  //console.log(products);
  return (
    <div className="productList my-5 grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-6">
      {products?.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
