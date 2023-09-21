"use client";

import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";

// Function to similate a login process

const ProtectRoute = ({ children }) => {
  const router = useRouter(); // to know the link path
  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isUserAuthenticated;
  const checkUserLogin = authContext.CheckCredentials();

  // Useeffect task to validate if the user is login to navigae throut the page and validate it credentias
  useEffect(() => {
    setTimeout(() => { // Time Out to simulate asynchronous validation
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
