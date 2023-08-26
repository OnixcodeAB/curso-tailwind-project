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

  const deleteItemFromCart = (id) => {
    const index = cartList?.filter((prod) => prod.id !== id); //retorna un nuevo array y excluye el prod que = al id que recive
    console.log(index);
    setCartList(index);
  };
  console.log(cartList);
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
        deleteItemFromCart,
      }}
    >
      {children}
    </ShopiContext.Provider>
  );
};

export default ShopiProvider;
