import React, { useContext } from "react";
import { ShopiContext } from "../../context";
import CategoryRender from "@components/CategoryRender";
import { AuthContext } from "../../context/auth";
import Loading from "@components/Loading";


const Jewelery = () => {
  const { products } = useContext(ShopiContext);
  const authContext = useContext(AuthContext);

  const jewelery = products?.filter((prod) => prod.category === "jewelery");
  
  if (authContext.loading) {
    return <Loading />;
  } else {
    return <CategoryRender menclothes={jewelery} />;
  }
};

export default Jewelery;
