import React, { createContext, useState } from "react";

export const ShopiContext = createContext();

const ShopiProvider = ({ children }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [closeDetails, setcloseDetails] = useState(false);

  const [prodDetails, setProdDetails] = useState({})

  const handleOpenDetails = () => {
    setOpenDetails(true);
    setcloseDetails(false);
  };
  const handleCloseDetails = () => {
    setcloseDetails(true);
    setOpenDetails(false);
  };

  return (
    <ShopiContext.Provider
      value={{
        prodDetails,
        openDetails,
        closeDetails,
        setProdDetails,
        handleOpenDetails,
        handleCloseDetails,
      }}
    >
      {children}
    </ShopiContext.Provider>
  );
};

export default ShopiProvider;
