import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [token, setToken] = useState("");

  // const handleGithubLogin = async () => {
  //   const param = new URLSearchParams(window.location.search);
  //   const code = param.get("code");
  //   console.log(code);

  //   // window.location.href =
  //   // "https://github.com/login/oauth/authorize?client_id=373605aaa0df2e4fecde";
  //   // const response = await fetch("http://localhost:3000/login/github/callback");
  //   // const data = await response.json();
  //   // console.log(data, "data");
  //   // const { token } = data;
  //   // console.log(token);

  //   if (code && localStorage.getItem("accessToken") === null) {
  //     const data = await axios.get(
  //       `http://localhost:3000/getAccessToken?code=${code}`
  //     );

  //     setToken(data.data.token);
  //     console.log("data in if :", data);

  //     return data;
  //     // const getAccessToken = async () => {};
  //     // getAccessToken();
  //   }
  // };
  const handleGithubLogin = async () => {
    // Redirect user to GitHub login page
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=373605aaa0df2e4fecde";

    // Get the code from the query parameters
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    console.log(code);

    // Get the access token using the code
    if (code && !token) {
      const response = await axios.get(
        `http://localhost:3000/getAccessToken?code=${code}`
      );
      const token = response.data.token;
      console.log("token in handleGithubLogin :", token);

      // Store the token in state
      setToken(token);
    }
  };

  const getUserdata = async () => {
    console.log(token, "in getuserdata");
    const userData = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${token}`, // add 'Bearer' before token
        // Authorization: req.get("Authorization"), // add 'Bearer' before token
      },
    });
    console.log("userdata", userData);
  };
  // useEffect(() => {
  //   handleGithubLogin();
  // }, [checkClick]);
  console.log(token, "token out side after useeffect");
  return (
    <div>
      {/* <Link to="https://github.com/login/oauth/authorize?client_id=373605aaa0df2e4fecde">
        Login with github
      </Link> */}
      <button onClick={handleGithubLogin}>login with github btn</button>
      <button onClick={getUserdata}>useerdata</button>
      {/* {token ? (
        <div>
          <h1>USER LOGIN</h1>
        </div>
      ) : (
        <div></div>
      )} */}
    </div>
  );
};

export default Login;
