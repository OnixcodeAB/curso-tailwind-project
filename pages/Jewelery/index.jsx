import React, { useContext, useEffect, useState } from 'react'
import ProductDetails from "@components/ProductDetails";
import ProductList from "@components/ProductList";
import CartList from "@components/CartList";
import { ShopiContext } from "../../context";

const Jewelery = () => {
  const [jewelries, setJewelries] = useState([]);

  const {openCartList, prodDetails,openDetails } = useContext(ShopiContext);


  useEffect(() => {
    fetch("http://localhost:3000/api/shopi/products")
      .then((res) => res.json())
      .then((res) => setJewelries(res.data));
  }, []);

  const jewelery = jewelries?.filter(
    (prod) => prod.category === "jewelery"
  );

  return (
    <div className="max-h-full my-7 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-green-800">Jewelery</h1>
      <main className="flex flex-row items-center mt-14 "></main>
      <ProductList products={jewelery} />
        {openDetails ? <ProductDetails prodDetails={...prodDetails} />:""}
        {openCartList ? <CartList />:""}
    </div>
  );
};

export default Jewelery;
