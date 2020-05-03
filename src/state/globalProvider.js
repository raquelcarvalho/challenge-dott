import React, { createContext, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children, params, actions, ...props }) => {
  return (
    <GlobalContext.Provider value={{ params, ...actions, ...props }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalValue = () => useContext(GlobalContext) || {};
