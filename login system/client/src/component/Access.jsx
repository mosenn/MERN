import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetToken, getInfomationGithubUser } from "../../_api";

const Access = () => {
  const [token, setToken] = useState("");
  const [getUserData, setGetUserData] = useState("");
  const [userDataGithub, setUserDataGithub] = useState("");
  const [denieLogin, setDenieLogin] = useState(false);
  const navigate = useNavigate();

  const getCodeinUrl = () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    handleGithubLogin(code);
  };

  const setUserDataToLocal = async (token) => {
    console.log(token, "in getuserdata");
    localStorage.setItem("gitData", JSON.stringify(getUserData));
    setUserDataGithub(getUserData);
    console.log("userdata", getUserData);
  };

  const handleGithubLogin = (code) => {
    // console.log(code, "code ");
    //*this change to new function getCodeinUrl
    // const param = new URLSearchParams(window.location.search);
    // const code = param.get("code");
    // console.log(token, "before set GetToken");

    getInfomationGithubUser(token, setGetUserData);
    setUserDataToLocal();
    if (code && !token) {
      GetToken(code, setToken);
      console.log("token in handleGithubLogin :", token);
    }
  };

  localStorage.setItem("tokens", token);
  const localtoken = localStorage.getItem("tokens", token);

  useEffect(() => {
    // handleGithubLogin();
    getCodeinUrl();
    // if (userDataGithub && localtoken) {
    //   navigate("/profile");
    // }
    userDataGithub && localtoken
      ? navigate("/profile")
      : setTimeout(() => {
          setDenieLogin(true);
        }, 3000);
  });

  return (
    <div>
      {denieLogin ? (
        <Link to="/login">back to login page</Link>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Access;
