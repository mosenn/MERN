import { createContext, useContext } from "react";
const githubUserData = {};
const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  return (
    <LoginContext.Provider value={{ name: "mohsen", githubUserData }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider };

export const useLoginContext = () => {
  return useContext(LoginContext);
};
