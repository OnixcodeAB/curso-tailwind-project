import React, {useContext} from 'react'
import { ShopiContext } from "../../context";
import CategoryRender from "../../components/CategoryRender";


const Electonics = () => {
    const { products } =
    useContext(ShopiContext);


  const electronicItems = products?.filter(
    (prod) => prod.category === "electronics"
  );

  return (
    <CategoryRender menclothes={electronicItems} />
  );
};

export default Electonics