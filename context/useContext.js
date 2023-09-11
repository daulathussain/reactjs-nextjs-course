import React from "react";
export const NFTContext = React.createContext();

export const NFTProvider = ({ children }) => {
  const NFT_MARKETPLACE = "Daulat";
  return (
    <NFTContext.Provider value={{ NFT_MARKETPLACE }}>
      {children}
    </NFTContext.Provider>
  );
};
