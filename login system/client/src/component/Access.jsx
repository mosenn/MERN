import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../_api";
const Access = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const getUserdata = async (token) => {
    console.log(token, "in getuserdata");

    const userData = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${token}`, // add 'Bearer' before token
      },
    });

    localStorage.setItem("gitData", JSON.stringify(userData));

    // if (githubUserData.data) {

    // }
    console.log("userdata", userData);
  };

  const handleGithubLogin = async () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    console.log(code);

    // Get the access token using the code
    if (code && !token) {
      //add function from _api
      // console.log("token in handleGithubLogin :", token);
      //*for logout and refresh
      getToken(code, setToken);
      // setToken(token);
    }
    if (token) {
      getUserdata(token);
    }
  };

  //* set in local for logout and if i refrash login page userData is not despare
  localStorage.setItem("tokens", token);
  const localtoken = localStorage.getItem("tokens", token);
  console.log(localtoken, "localtoken");

  useEffect(() => {
    handleGithubLogin();
  }, []);

  if (localtoken) {
    setTimeout(() => {
      navigate("/product");
    }, 3000);
  }
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Access;
