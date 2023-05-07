import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetToken, getInfomationGithubUser } from "../../_api";

const Access = () => {
  const [token, setToken] = useState("");
  const [getUserData, setGetUserData] = useState("");
  const [userDataGithub, setUserDataGithub] = useState("");
  const navigate = useNavigate();


  
  const setUserdataToLocal = async (token) => {
    console.log(token, "in getuserdata");
    localStorage.setItem("gitData", JSON.stringify(getUserData));
    setUserDataGithub(getUserData);
    console.log("userdata", getUserData);
  };

  const handleGithubLogin = async () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    // console.log(code, "code ");

    // console.log(token, "before set GetToken");

    await getInfomationGithubUser(token, setGetUserData);
    await setUserdataToLocal();
    if (code && !token) {
      await GetToken(code, setToken);
      console.log("token in handleGithubLogin :", token);
    }
  };

  localStorage.setItem("tokens", token);
  const localtoken = localStorage.getItem("tokens", token);

  useEffect(() => {
    handleGithubLogin();
    if (userDataGithub && localtoken) {
      navigate("/profile");
    }
  });

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Access;
