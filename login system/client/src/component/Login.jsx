import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
    if (code && localStorage.getItem("accessToken") === null) {
      const getAccessToken = async () => {
        const data = await axios.get(
          `http://localhost:3000/getAccessToken?code=${code}`
        );
        console.log("data in if :", data);

        return data;
      };
      getAccessToken();
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Link to="https://github.com/login/oauth/authorize?client_id=373605aaa0df2e4fecde">
        <h1>Login with Github</h1>
      </Link>
      <button onClick={handleGithubLogin}>get token</button>
    </div>
  );
};

export default Login;
