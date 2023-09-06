import React, { createContext, useState } from "react";

/* 
Las rutas de Checkout, Órdenes de compra y Visualización de productos NO deben ser visibles para usuarios sin autenticar:

 Hacer redirect a la página de login si el usuario no está autenticado
 Mostrar común y corriente las páginas anteriormente mencionadas si el usuario ya está autenticado
*/

export const authContext = createContext();

export const authProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: "",
  });

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
