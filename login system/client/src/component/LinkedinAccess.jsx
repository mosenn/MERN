import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  takeCodeAndPostToServerLinkedin,
  getUserDataSiginLinkedin,
} from "../api/linkedin";

const LinkedinAccess = () => {
  const [sigineError, setSiginError] = useState("");
  const navigate = useNavigate();
  const getLinkedinCodeinParamas = async () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");

    if (code) {
      const data = await takeCodeAndPostToServerLinkedin(code);
      console.log("this is Code : ", data);
    }
  };

  const getUserInfoSiginLinkedin = async () => {
    const userInfoLinkedin = await getUserDataSiginLinkedin(setSiginError);
    console.log("user info linkedin data", userInfoLinkedin?.data);
    userInfoLinkedin?.data.userPrfoile;
    userInfoLinkedin?.data.userEmail;
    console.log(
      userInfoLinkedin?.data.userPrfoile,
      userInfoLinkedin?.data.userEmail.elements[0]["handle~"].emailAddress
    );
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userProfile: userInfoLinkedin?.data.userPrfoile,
        userEmail:
          userInfoLinkedin?.data.userEmail.elements[0]["handle~"].emailAddress,
      })
    );
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
    console.log(sigineError);
    if (sigineError) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };
  useEffect(() => {
    getLinkedinCodeinParamas();
    getUserInfoSiginLinkedin();
  }, [sigineError]);

  return (
    <div>
      <h1>access code paramas linkedin</h1>
    </div>
  );
};

export default LinkedinAccess;
