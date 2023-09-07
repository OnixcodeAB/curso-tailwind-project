"use client";

import { useRouter } from "next/router";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { AuthContext } from "../../context/auth";

const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  /* const getRouteToAuthenticated = () => {
    CurrentRoute = router.
  } */

  useLayoutEffect(() => {
    const isLoggedIn = authContext.isUserAuthenticated();
    console.log(isLoggedIn);
    console.log(router.pathname);

    if (isLoggedIn && window.location.pathname === "/") {
      router.push("/");
    } else if (!isLoggedIn && window.location.pathname == "/") {
      router.push("/SignIn");
    }
  }, [router, authContext]); // Asegúrate de que esta función se ejecute solo en el lado del cliente

  return children;
};

export default ProtectRoute;
