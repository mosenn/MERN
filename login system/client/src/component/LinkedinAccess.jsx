import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import {
  takeCodeAndPostToServerLinkedin,
  getUserDataSiginLinkedin,
} from "../api/linkedin";
import Loading from "./Loading";
const LinkedinAccess = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [messageSigin, setMesssageSigin] = useState(false);
  // const [checkData, setCheckdata] = useState(false);
  const getUserInfoSiginLinkedin = async () => {
    //*change for update user just one time save in db
    // try {
    //   const data = await axios.get("http://localhost:5000/signinLinkedin");
    //   console.log(data, "in update function accesslinkedin.jsx");

    //   if (data?.status === 200 && data?.data !== "") {
    //     setCheckdata(true);
    //     localStorage.setItem("userData", JSON.stringify(data?.data));
    //     setTimeout(() => {
    //       navigate("/profile");
    //       setLoading(false);
    //     }, 3000);
    //     return;
    //   }
    //   // setMesssageSigin(true);
    //   //*if dont have data redirect to login
    // } catch (err) {
    //   console.log("siginData err", err);
    //   // console.log(err.response.status)
    //   setMesssageSigin(true);
    //   setLoading(false);
    //   setTimeout(() => {
    //     navigate("/login");
    //     setLoading(false);
    //     console.log("navigate login");
    //   }, 3000);
    // }

    //*old is working perfect
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
    setTimeout(() => {
      getUserInfoSiginLinkedin();
    }, 4000);
    console.log("useEffect for code");
  }, []);

  // useEffect(() => {
  //   getUserInfoSiginLinkedin();
  // }, [checkData]);
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
