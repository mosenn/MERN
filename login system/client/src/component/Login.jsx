import { Link } from "react-router-dom";
import UserLoginAndRegister from "./UserLoginAndRegister";
const Login = () => {
  console.log(import.meta.env.VITE_CLINET_ID);
  const CLINET_ID = import.meta.env.VITE_CLINET_ID;
  return (
    <div>
      <UserLoginAndRegister />
      <Link
        to={`https://github.com/login/oauth/authorize?client_id=${CLINET_ID}`}
      >
        Login with github
      </Link>
    </div>
  );
};

export default Login;
