import React, { createContext, useState } from "react";

export const ShopiContext = createContext();

const ShopiProvider = ({ children }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openCartList, setOpenCartList] = useState(false);
  const [prodDetails, setProdDetails] = useState({});

  const [cartList, setCartList] = useState([]);

  const handleOpenDetails = () => {
    setOpenDetails(true);
  };
  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleOpenCartList = () => {
    setOpenCartList(true);
  };

  const handleCloseCartList = () => {
    setOpenCartList(false);
  };

  const addToCart = ({ product }) => {
    setCartList([...cartList, product]); // Usamos el operador de propagación para agregar el nuevo item
  };
  console.log(cartList);

  return (
    <ShopiContext.Provider
      value={{
        cartList,
        prodDetails,
        openDetails,
        openCartList,
        setProdDetails,
        handleOpenDetails,
        handleOpenCartList,
        handleCloseDetails,
        handleCloseCartList,
        addToCart,
      }}
    >
      {children}
    </ShopiContext.Provider>
  );
};

export default ShopiProvider;
