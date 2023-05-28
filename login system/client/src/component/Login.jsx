import { Link } from "react-router-dom";
import UserLoginAndRegister from "./UserLoginAndRegister";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  console.log(import.meta.env.VITE_CLINET_ID);
  const CLINET_ID_GITHUB = import.meta.env.VITE_CLINET_ID_GITHUB;
  const CLINET_ID_LINKEDIN = import.meta.env.VITE_CLINET_ID_LINKEDIN;

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <UserLoginAndRegister />
      <Link
        style={{
          margin: "5px 0",
          padding: "15px",

          width: "100px",
          textAlign: "center",
        }}
        to={`https://github.com/login/oauth/authorize?client_id=${CLINET_ID_GITHUB}`}
      >
        Sigin github
      </Link>

      <Link
        style={{
          margin: "5px 0",
          padding: "15px",
          width: "100px",
          textAlign: "center",
        }}
        //  to={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLINET_ID_LINKEDIN}&redirect_uri=https://loginsystemtest.vercel.app/accessLinkedin&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`}
        // // > // for online ridirect url linkedin
        to={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLINET_ID_LINKEDIN}&redirect_uri=http://127.0.0.1:5173/accessLinkedin&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`} // for local linkdin url redirect
      >
        Sigin linkedin
      </Link>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};
export default Login;
