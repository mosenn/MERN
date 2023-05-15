import { useEffect } from "react";
import {
  takeCodeAndPostToServerLinkedin,
  getUserDataLinkedin,
} from "../api/linkedin";
// import { useNavigate } from "react-router-dom";

const LinkedinAccess = () => {
  // const navigate = useNavigate();

  const getLinkedinCodeinParamas = async () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    const data = await takeCodeAndPostToServerLinkedin(code);
    console.log(data, "data");
    const userData = await getUserDataLinkedin(data.data?.token);
    console.log(userData, "userData");

    if (data.data?.token) {
      localStorage.setItem("tokens", data.data.token);
      const token = localStorage.getItem("tokens");
      console.log("token in local linkedin", token);

      // navigate("/profile");
    }
  };
  getLinkedinCodeinParamas();
  // useEffect(() => {

  // });
  return (
    <div>
      <h1>access code paramas linkedin</h1>
    </div>
  );
};

export default LinkedinAccess;
