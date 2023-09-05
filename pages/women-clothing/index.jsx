import React, { useContext } from "react";
import { ShopiContext } from "../../context";
import CategoryRender from "../../components/CategoryRender";

const WomenClothing = () => {
  const { products } = useContext(ShopiContext);

  const womanItems = products?.filter(
    (prod) => prod.category === "women's clothing"
  );

  return <CategoryRender menclothes={womanItems} />;
};

export default WomenClothing;
