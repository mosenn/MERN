import { useEffect } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const handleGithubLogin = async () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    console.log(code);
    // window.location.href =
    //   "https://github.com/login/oauth/authorize?client_id=373605aaa0df2e4fecde";
    // const response = await fetch("http://localhost:3000/login/github/callback");
    // const data = await response.json();
    // console.log(data, "data");
    // const { token } = data;
    // console.log(token);
  };

  useEffect(() => {
    handleGithubLogin();
  }, []);

  return (
    <div>
      <Link to="https://github.com/login/oauth/authorize?client_id=373605aaa0df2e4fecde">
        <h1>Login with Github</h1>
      </Link>
    </div>
  );
};

export default Login;
