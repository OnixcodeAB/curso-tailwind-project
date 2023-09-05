import React, { useContext, useEffect, useState } from "react";
import ProductList from "@components/ProductList";
import ProductDetails from "@components/ProductDetails";
import { ShopiContext } from "../context";
import CartList from "../components/CartList";

const Home = () => {
   const {products,filterProduct, search,openCartList, prodDetails,openDetails, handleSearch } = useContext(ShopiContext);

   const renderView = () => {
     if(search.length > 0){
        if (filterProduct.length > 0) {
          return (
            <ProductList products={filterProduct} />
          )
        }else{
          return (
            <div>Product Not Found</div>
          )
        }
     }else{
      return (
        <ProductList products={products} />
      )
     }
   }
 
  return (
    <div className="max-h-full my-7 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-green-800">Exclusive Products</h1>
      <div className="my-6">
        <input
          value={search}
          placeholder="Search"
          size="md"
          className="flex flex-col w-80 px-2 border border-black rounded-md h-9"
          onChange={handleSearch}
        />
      </div>
      <main className="flex flex-row items-center ">
        {renderView()}
        {openDetails ? <ProductDetails prodDetails={prodDetails} />:""}
        {openCartList ? <CartList />:""}
      </main>
    </div>
  );
};

export default Home;
