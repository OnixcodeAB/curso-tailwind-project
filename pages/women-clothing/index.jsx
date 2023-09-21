import React, { useContext } from "react";
import { ShopiContext } from "../../context";
import CategoryRender from "@components/CategoryRender";
import Loading from "@components/Loading";
import { AuthContext } from "../../context/auth";

const WomenClothing = () => {
  const { products } = useContext(ShopiContext); // get the products
  const authContext = useContext(AuthContext); // get the authentication context

  const womanItems = products?.filter(
    // filter the products by category
    (prod) => prod.category === "women's clothing"
  );

  if (authContext.loading) {
    // Validate if the user is logged for access to the page
    return <Loading />;
  } else {
    return <CategoryRender menclothes={womanItems} />;
  }
};

export default WomenClothing;
