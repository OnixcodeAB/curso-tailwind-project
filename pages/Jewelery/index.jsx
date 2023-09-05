import React, { useContext} from 'react'
import { ShopiContext } from "../../context";
import CategoryRender from "../../components/CategoryRender";
const Jewelery = () => {
    const {products } = useContext(ShopiContext);


 
  const jewelery = products?.filter(
    (prod) => prod.category === "jewelery"
  );

  return (
    <CategoryRender menclothes={jewelery} />
  );
};

export default Jewelery;
