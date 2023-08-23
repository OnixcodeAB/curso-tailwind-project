import React from "react";
import { Input } from "@material-tailwind/react";
import ProductList from "@components/ProductList";

const Home = () => {
  return (
    <div className="max-h-full my-7 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-green-800">Exclusive Products</h1>
      <div className="my-6">
        <Input label="Search" className="w-72 flex flex-col" />
      </div>
      <ProductList />
    </div>
  );
};

export default Home;
