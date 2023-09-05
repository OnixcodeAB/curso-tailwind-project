import React, { createContext, useEffect, useState } from "react";
import { getCurrentDate } from "./utils";

export const ShopiContext = createContext();

const ShopiProvider = ({ children }) => {
  // Product
  const [products, setProducts] = useState([]);

  // Filter Product by input search
  const [search, setSearch] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);

  // Cart product
  const [cartList, setCartList] = useState([]);
  // Orders products
  const [myOrders, setmyOrders] = useState([]);

  // Products Details
  const [prodDetails, setProdDetails] = useState({});

  // Open and close Modals
  const [openDetails, setOpenDetails] = useState(false);
  const [openCartList, setOpenCartList] = useState(false);

  //useEffect To Fech Data.
  useEffect(() => {
    fetch("http://localhost:3000/api/shopi/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.data));
  }, []);

  // Filter Product

  const fitleredproductsByTitle = (products, search) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    if (search) setFilterProduct(fitleredproductsByTitle(products, search));
  }, [products, search]);


  // functiosn to handle change in Modals, cart and Order Product
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

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
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

  const procedToCheckout = (products) => {
    const sumTotal = products?.reduce((acc, elem) => {
      return acc + elem.price;
    }, 0);
    const orderToAdd = {
      date: getCurrentDate(),
      products,
      totalProduct: products.length,
      totalPrice: sumTotal,
    };
    //const totalProduct = order.length;
    //const orders = { ...order, price: Sumtotal, products: totalProduct };
    setmyOrders([...myOrders, orderToAdd]);
    setCartList([]);
    handleCloseCartList();

    //console.log(orderToAdd)
  };

  return (
    <ShopiContext.Provider
      value={{
        products,
        search,
        filterProduct,
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
        handleSearch,
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
