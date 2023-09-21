import React, { useContext } from "react";
import { ShopiContext } from "../../context";
import CategoryRender from "../../components/CategoryRender";
import Loading from "@components/Loading";
import { AuthContext } from "../../context/auth";

const Electonics = () => {
  const { products } = useContext(ShopiContext);
  const authContext = useContext(AuthContext);

  const electronicItems = products?.filter(
    (prod) => prod.category === "electronics"
  );
  if (authContext.loading) {
    return <Loading />;
  }
  else{
    return <CategoryRender menclothes={electronicItems} />;
  }
};

export default Electonics;
