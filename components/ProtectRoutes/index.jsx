"use client";

import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";

const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      const securePage = async () => {
        const isLoggedIn = await authContext.isUserAuthenticated();
        if (!isLoggedIn) {
          router.push("/SignIn");
        } else {
          authContext.setLoading(false);
        }
      };
      securePage();
    }, 400);
  }, [router.asPath]); // Asegúrate de que esta función se ejecute solo en el lado del cliente

  return children;
};

export default ProtectRoute;
