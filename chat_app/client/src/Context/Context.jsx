import { useContext, createContext, useState, useEffect } from "react";
import { Profile } from "../api/RegisterUser";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    Profile();
  }, [user]);
  return (
    <AppContext.Provider value={{ user, setUser, userId, setUserId }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export const useGlobalcontext = () => {
  return useContext(AppContext);
};
