import { createContext, useContext, useState } from "react";

interface MyContextValue {
  name: string;
  setUserInforOnline: React.Dispatch<React.SetStateAction<{}>>;
  setuserIntraction: React.Dispatch<React.SetStateAction<[]>>;
  userInfoOnline: {} | any;
  userIntraction: [] | any;
}

interface AppProviderProps {
  children: React.ReactNode;
}

//* create context
const AppContext = createContext<MyContextValue>({
  name: "",
  setUserInforOnline: () => {},
  setuserIntraction: () => {},
  userInfoOnline: {},
  userIntraction: [],
});
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  let [userInfoOnline, setUserInforOnline] = useState<{}>({});
  let [userIntraction, setuserIntraction] = useState<[]>([]);
  return (
    <AppContext.Provider
      value={{
        name: "mohsen",
        setUserInforOnline,
        userInfoOnline,
        setuserIntraction,
        userIntraction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
