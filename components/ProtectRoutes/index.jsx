import { useRouter } from "next/router";
import React, { useContext } from "react";
import { authContext } from "../../context/auth";

const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const AuthContext = useContext(authContext);

  const isLoggedIn = AuthContext.isUserAuthenticated();

  if (isLoggedIn && window.location.pathname === "/") {
    router.push("/");
  } else if (!isLoggedIn && window.location.pathname !== "/") {
    router.push("/SignIn");
  }

  return children;
};

export default ProtectRoute;
