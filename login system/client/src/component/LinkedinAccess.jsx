import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  takeCodeAndPostToServerLinkedin,
  getUserDataSiginLinkedin,
} from "../api/linkedin";
import Loading from "./Loading";
const LinkedinAccess = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [messageSigin, setMesssageSigin] = useState(false);

  const getUserInfoSiginLinkedin = async () => {
    try {
      console.log("function is run getUserInfoSiginLinkedin");

      const data = await getUserDataSiginLinkedin();

      //*worked
      //*have data here
      console.log("data", data);
      console.log(data?.data);
      if (data?.status === 200) {
        localStorage.setItem("userData", JSON.stringify(data?.data));
        setTimeout(() => {
          navigate("/profile");
          setLoading(false);
        }, 3000);
        return;
      }
      setMesssageSigin(true);
      //*if dont have data redirect to login
      setTimeout(() => {
        navigate("/login");
        setLoading(false);
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
      {/* <h1>access code paramas linkedin</h1> */}
      {/* work for error */}
      {messageSigin && (
        <div>
          <h3>you are sigin before</h3>
          <h4>redirect to login page wait..</h4>
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
};

export default LinkedinAccess;
