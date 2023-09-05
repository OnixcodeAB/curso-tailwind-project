import React, { useContext, useEffect, useState } from "react";

import { ShopiContext } from "../../context";
import CategoryRender from "../../components/CategoryRender";

const MenClothing = () => {
  /* const [menClothes, setMenClothes] = useState([]);
  const [ItemAdded, setItemAdded] = useState(false); */
  const { products, openCartList, prodDetails, openDetails } =
    useContext(ShopiContext);

  /*  useEffect(() => {
    fetch("http://localhost:3000/api/shopi/products")
      .then((res) => res.json())
      .then((res) => setMenClothes(res.data));
  }, []); */

  // Get Product by Category
  const menclothes = products?.filter(
    (prod) => prod.category === "men's clothing"
  );

  return <CategoryRender menclothes={menclothes} />;
};

export default MenClothing;
