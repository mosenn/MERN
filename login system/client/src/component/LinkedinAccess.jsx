import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import {
  takeCodeAndPostToServerLinkedin,
  getUserDataSiginLinkedin,
} from "../api/linkedin";

const LinkedinAccess = () => {
  const [sigineError, setSiginError] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getUserInfoSiginLinkedin = async () => {
    const data = await getUserDataSiginLinkedin(setSiginError, setUserInfo);
    if (data && data?.data) {
      localStorage.setItem("userData", JSON.stringify(userInfo.data));
      setLoading(false);
      navigate("/profile");
    } else {
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 3000);
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
  }, []);

  return (
    <div>
      {/* <h1>access code paramas linkedin</h1> */}
      {sigineError && <h3>you have account redirect to login page ✌</h3>}
      {loading && <Loading />}
    </div>
  );
};

export default LinkedinAccess;
