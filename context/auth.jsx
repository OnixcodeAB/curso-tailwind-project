import React, { createContext, useState } from "react";

/* 
Las rutas de Checkout, Órdenes de compra y Visualización de productos NO deben ser visibles para usuarios sin autenticar:

 Hacer redirect a la página de login si el usuario no está autenticado
 Mostrar común y corriente las páginas anteriormente mencionadas si el usuario ya está autenticado
*/

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authState, setAuthState] = useState({
    token: "",
  });

  // Use the JSON Web Token to asign token to the user when sign In ,
  // and use localstorage to save the token in the AuthState

  const setUserAuthInfo = (data) => {
    //console.log(data)
    const dataJSON = JSON.stringify(data);
    localStorage.setItem("token", dataJSON);
    const tokenUser = JSON.parse(localStorage.getItem("token"));
    console.log(tokenUser);
    setAuthState({
      token: tokenUser,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => !!authState.token;

  return (
    <AuthContext.Provider
      value={{
        loading,
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
