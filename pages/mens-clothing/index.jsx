import React, { useContext, useEffect, useState } from "react";
import { ShopiContext } from "../../context";
import CategoryRender from "@components/CategoryRender";
import Loading from "@components/Loading";
import { AuthContext } from "../../context/auth";

const MenClothing = () => {
  /* const [menClothes, setMenClothes] = useState([]);
  const [ItemAdded, setItemAdded] = useState(false); */
  const { products, openCartList, prodDetails, openDetails } =
    useContext(ShopiContext);

  const authContext = useContext(AuthContext);

  /*  useEffect(() => {
    fetch("http://localhost:3000/api/shopi/products")
      .then((res) => res.json())
      .then((res) => setMenClothes(res.data));
  }, []); */

  // Get Product by Category
  const menclothes = products?.filter(
    (prod) => prod.category === "men's clothing"
  );

  // conditional render
  if (authContext.loading) {
    return <Loading />;
  } else {
    return <CategoryRender menclothes={menclothes} />;
  }
};

export default MenClothing;
