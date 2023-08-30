import React, { useContext, useEffect, useState } from "react";
import ProductDetails from "@components/ProductDetails";
import ProductList from "@components/ProductList";
import CartList from "@components/CartList";
import { ShopiContext } from "../../context";

const WomenClothing = () => {
  
  const [womanClothe, setWomanClothe] = useState([]);

  const {openCartList, prodDetails,openDetails } = useContext(ShopiContext);


  useEffect(() => {
    fetch("http://localhost:3000/api/shopi/products")
      .then((res) => res.json())
      .then((res) => setWomanClothe(res.data));
  }, []);

  const womanItems = womanClothe?.filter(
    (prod) => prod.category === "women's clothing"
  );

  return (
    <div className="max-h-full my-7 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-green-800">Women's clothing</h1>
      <main className="flex flex-row items-center mt-14 "></main>
      <ProductList products={womanItems} />
        {openDetails ? <ProductDetails prodDetails={...prodDetails} />:""}
        {openCartList ? <CartList />:""}
    </div>
  );
};

export default WomenClothing;
