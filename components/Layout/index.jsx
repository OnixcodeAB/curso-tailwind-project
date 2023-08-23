import React from "react";
import NavMenu from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavMenu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
