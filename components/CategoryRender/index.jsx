import React, { useContext } from "react";
import ProductDetails from "@components/ProductDetails";
import ProductList from "@components/ProductList";
import CartList from "@components/CartList";
import { ShopiContext } from "../../context";


const CategoryRender = ({menclothes}) => {
  const { openCartList, prodDetails, openDetails } = useContext(ShopiContext);

  return (
    <div className="max-h-full my-7 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-green-800">Men's Clothing</h1>
      <main className="flex flex-row items-center mt-14 "></main>
      <ProductList products={menclothes} />
      {openDetails ? <ProductDetails prodDetails={prodDetails} /> : ""}
      {openCartList ? <CartList /> : ""}
    </div>
  );
};

export default CategoryRender;
