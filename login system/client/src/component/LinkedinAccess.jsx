import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import {
  takeCodeAndPostToServerLinkedin,
  getUserDataSiginLinkedin,
} from "../api/linkedin";

const LinkedinAccess = () => {
  const [sigineError, setSiginError] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
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
    await getUserDataSiginLinkedin(setSiginError, setUserInfo);
    // setUserInfo(userInfoLinkedin);
    // console.log(userInfoLinkedin?.data, "userinfolinkedin");
  };
  useEffect(() => {
    getLinkedinCodeinParamas();
  });
  useEffect(() => {
    getUserInfoSiginLinkedin();
  }, [sigineError, userInfo]);

  //*set linkedin data to localstroge
  //*log data
  console.log("userInfo State", userInfo);

  localStorage.setItem(
    "userData",
    JSON.stringify(
      userInfo?.data
      // firstName: userInfoLinkedin?.data.firstName,
      // lastName: userInfoLinkedin?.data.lastName,
      // userEmail: userInfoLinkedin?.data.email,
      // pic: userInfoLinkedin?.data.pic,
    )
  );

  //*control singin navigate
  // if (userInfoLinkedin) {
  //   setTimeout(() => {
  //     setLoading(false);
  //     navigate("/profile");
  //   }, 2000);
  // }
  // console.log(sigineError);
  // if (sigineError) {
  //   return setTimeout(() => {
  //     setLoading(false);
  //     navigate("/login");
  //   }, 4000);
  // }

  return (
    <div>
      <h1>access code paramas linkedin</h1>
      {/* {sigineError && (
        <h1>you are sigin one time w8 for to redirect login page ✌</h1>
      )}
      {loading && <Loading />} */}
    </div>
  );
};

export default LinkedinAccess;
