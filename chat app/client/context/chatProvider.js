import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
const chatContext = createContext();

const chatProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    console.log(user, "in context");
    if (!userInfo) {
      //navigate to login
      navigate("/login");
    }
  }, [navigate]);
  return (
    <chatContext.Provider value={(user, setUser)}>
      {children}
    </chatContext.Provider>
  );
};
export const chatState = () => {
  useContext(chatContext);
};

export default chatProvider;
