"use client";

import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";

const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isUserAuthenticated;
  const checkUserLogin = authContext.CheckCredentials();

  useEffect(() => {
    setTimeout(() => {
      const securePage = async () => {
        if (!isLoggedIn && router.asPath !== "/sign-up") {
          router.push("/sign-in");
        } else {
          authContext.setLoading(false);
        }
      };
      securePage();
    }, 400);
  }, [router.asPath, checkUserLogin]); // Asegúrate de que esta función se ejecute solo en el lado del cliente

  return children;
};

export default ProtectRoute;
