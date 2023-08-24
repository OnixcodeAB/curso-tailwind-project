import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import ProductList from "@components/ProductList";

const Home = () => {
  const [products, setProducts] = useState();

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
        <Input
          label="Search"
          size="md"
          className="flex flex-col w-96"
          width={384}
        />
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
