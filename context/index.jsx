import React, { createContext, useState } from "react";

export const ShopiContext = createContext();

const ShopiProvider = ({ children }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openCartList, setOpenCartList] = useState(false);
  const [prodDetails, setProdDetails] = useState({});

  const [cartList, setCartList] = useState([]);

  const [myOrders, setmyOrders] = useState([]);

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

  const addToCart = (product) => {
    setCartList([...cartList, product]); // Usamos el operador de propagación para agregar el nuevo item
    //console.log(product);
  };

  const deleteItemFromCart = (id) => {
    const index = cartList?.filter((prod) => prod.id !== id); //retorna un nuevo array y excluye el prod que = al id que recive
    //console.log(index);
    setCartList(index);
  };

  const SumTotal = () => {
    const Sumtotal = cartList?.reduce((acc, elem) => {
      return acc + elem.price;
    }, 0);
    const total = Sumtotal.toFixed(2);
    return total;
  };

  const procedToCheckout = (order) => {
    const Sumtotal = order?.reduce((acc, elem) => {
      return acc + elem.price;
    }, 0);
    const orders = { ...order, price: Sumtotal };
    setmyOrders([...myOrders, orders]);
  };
  //console.log(myOrders);
  //console.log(cartList);
  //console.log(cartList);

  return (
    <ShopiContext.Provider
      value={{
        cartList,
        myOrders,
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
        SumTotal,
        procedToCheckout,
      }}
    >
      {children}
    </ShopiContext.Provider>
  );
};

export default ShopiProvider;
