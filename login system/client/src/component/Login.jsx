import { Link } from "react-router-dom";
import UserLoginAndRegister from "./UserLoginAndRegister";
const Login = () => {
  console.log(import.meta.env.VITE_CLINET_ID);
  const CLINET_ID_GITHUB = import.meta.env.VITE_CLINET_ID_GITHUB;
  const CLINET_ID_LINKEDIN = import.meta.env.VITE_CLINET_ID_LINKEDIN

  return (
    <div>
      <UserLoginAndRegister />
      <Link
        to={`https://github.com/login/oauth/authorize?client_id=${CLINET_ID_GITHUB}`}
      >
        Login with github
      </Link>
      <br />
      <Link
        to={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLINET_ID_LINKEDIN}&redirect_uri=http://127.0.0.1:5173/accessLinkedin&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`}
      >
        Login with linkedin
      </Link>
    </div>
  );
};
export default Login;
