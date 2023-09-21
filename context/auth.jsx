import React, { createContext, useState } from "react";

/* 
Las rutas de Checkout, Órdenes de compra y Visualización de productos NO deben ser visibles para usuarios sin autenticar:

 Hacer redirect a la página de login si el usuario no está autenticado
 Mostrar común y corriente las páginas anteriormente mencionadas si el usuario ya está autenticado
*/

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [credentials, setCredentials] = useState({ // Save to user login data in the sig-in page
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(true); 
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false); // validate if the user is logged
  const [authState, setAuthState] = useState({ // Save the login data in the local storage
    token: "",
  });

  // Use the JSON Web Token to asign token to the user when sign In ,
  // and use localstorage to save the token in the AuthState

  const setUserAuthInfo = (data) => {
    //console.log(data)
    const dataJSON = JSON.stringify(data);
    localStorage.setItem("token", dataJSON);
    const tokenUser = JSON.parse(localStorage.getItem("token"));
    //console.log(tokenUser);
    setAuthState({
      token: tokenUser,
    });
  };

  const CheckCredentials = (token) => { // Validate if the user login details exits and is equal to the localstorage info saved
    if (
      token?.email === credentials.email &&
      token?.password === credentials.password
    ) {
      setIsUserAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  // checks if the user is authenticated or not
  //const isUserAuthenticated = () => !!authState.token;

  return (
    <AuthContext.Provider
      value={{
        loading,
        authState,
        credentials,
        setCredentials,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
        setIsUserAuthenticated,
        CheckCredentials,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
