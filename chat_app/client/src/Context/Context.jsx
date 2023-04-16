import { useContext, createContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ name: "mohsen" }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export const useGlobalcontext = () => {
  return useContext(AppContext);
};
