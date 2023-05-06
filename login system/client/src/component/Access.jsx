import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GetToken } from "../../Api";

const Access = () => {
  const [token, setToken] = useState("");
  const [userDataGithub, setUserDataGithub] = useState("");
  const navigate = useNavigate();

  const getUserdata = async (token) => {
    console.log(token, "in getuserdata");
    const userData = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${token}`, // add 'Bearer' before token
      },
    });

    localStorage.setItem("gitData", JSON.stringify(userData));
    setUserDataGithub(userData);
    console.log("userdata", userData);
  };

  const handleGithubLogin = async () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    // Get the access token using the code
    if (code && !token) {
      await GetToken(code, setToken);
      console.log("token in handleGithubLogin :", token);
    }
    await getUserdata(token);
  };

  localStorage.setItem("tokens", token);
  const localtoken = localStorage.getItem("tokens", token);

  // console.log(localtoken, "localtoken");

  useEffect(() => {
    handleGithubLogin();
    if (userDataGithub) {
      navigate("/product");
    }
  });

  if (localtoken) {
    setTimeout(() => {}, 1000);
  }
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Access;
