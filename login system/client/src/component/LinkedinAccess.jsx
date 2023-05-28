import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  takeCodeAndPostToServerLinkedin,
  getUserDataSiginLinkedin,
} from "../api/linkedin";

const LinkedinAccess = () => {
  const [sigineError, setSiginError] = useState({});
  const navigate = useNavigate();
  const getUserInfoSiginLinkedin = async () => {
    try {
      console.log("function is run getUserInfoSiginLinkedin");
      console.log(sigineError, "sigineError");
      //*test

      const data = await getUserDataSiginLinkedin(setSiginError);

      //*worked
      //*have data here
      console.log("data", data);
      console.log(data?.data);
      if (data?.status === 200) {
        localStorage.setItem("userData", JSON.stringify(data?.data));
        setTimeout(() => {
          navigate("/profile");
        }, 3000);
        return;
      }
      //*if dont have data redirect to login
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      //*worked
    } catch (err) {
      console.log(err, "errors");
    }
  };
  const getLinkedinCodeinParamas = async () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    if (code) {
      const data = await takeCodeAndPostToServerLinkedin(code);
      console.log("this is Code : ", data);
    }
  };

  useEffect(() => {
    getLinkedinCodeinParamas();
    getUserInfoSiginLinkedin();
    console.log("useEffect for code");
  }, []);

  return (
    <div>
      <h1>access code paramas linkedin</h1>
      {/* {sigineError && <h3>you have account redirect to login page ✌</h3>}
      {loading && <Loading />} */}
    </div>
  );
};

export default LinkedinAccess;
