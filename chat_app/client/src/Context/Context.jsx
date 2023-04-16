import { useContext, createContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState('mohsen ab');
  const [userId, setUserId] = useState(1);
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
