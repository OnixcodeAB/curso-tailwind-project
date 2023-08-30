import React, { useContext, useEffect, useState } from "react";
import ProductDetails from "@components/ProductDetails";
import ProductList from "@components/ProductList";
import CartList from "@components/CartList";
import { ShopiContext } from "../../context";

const MenClothing = () => {
  const [menClothes, setMenClothes] = useState([]);
  const [ItemAdded, setItemAdded] = useState(false);
  const { openCartList, prodDetails,openDetails } = useContext(ShopiContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/shopi/products")
      .then((res) => res.json())
      .then((res) => setMenClothes(res.data));
  }, []);

  const clothes = menClothes?.filter(
    (prod) => prod.category === "men's clothing"
  );

  return (
    <div className="max-h-full my-7 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-green-800">Men's Clothing</h1>
      <main className="flex flex-row items-center mt-14 "></main>
      <ProductList products={clothes} />
        {openDetails ? <ProductDetails prodDetails={...prodDetails} />:""}
        {openCartList ? <CartList />:""}
    </div>
  );
};

export default MenClothing;
