import React, { createContext, useState } from "react";

/* 
Las rutas de Checkout, Órdenes de compra y Visualización de productos NO deben ser visibles para usuarios sin autenticar:

 Hacer redirect a la página de login si el usuario no está autenticado
 Mostrar común y corriente las páginas anteriormente mencionadas si el usuario ya está autenticado
*/

export const authContext = createContext();

export const authProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: "",
  });

  // Use the JSON Web Token to asign token to the user when is assigned,
  // and use localstorage to save the token in the AuthState

  const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data.data);

    setAuthState({
      token,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => !!authState.token;

  return (
    <authContext.Provider value={auth}>
      {{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    </authContext.Provider>
  );
};
