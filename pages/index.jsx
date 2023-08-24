import React, { useContext, useEffect, useState } from "react";
import ProductList from "@components/ProductList";
import ProductDetails from "@components/ProductDetails";
import { ShopiContext } from "../context";

const Home = () => {
  const [products, setProducts] = useState();

  const { prodDetails,openDetails } = useContext(ShopiContext);

  console.log(openDetails);

  useEffect(() => {
    fetch("http://localhost:3000/api/shopi/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);
  //console.log(products);
  return (
    <div className="max-h-full my-7 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-green-800">Exclusive Products</h1>
      <div className="my-6">
        <input
          placeholder="Search"
          size="md"
          className="flex flex-col w-80 px-2 border border-black rounded-md h-9"
        />
      </div>
      <main className="flex flex-row items-center ">
        <ProductList products={products} />
        {openDetails ? <ProductDetails prodDetails={...prodDetails} />:""}
      </main>
    </div>
  );
};

export default Home;
