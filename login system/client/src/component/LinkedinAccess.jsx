import { useEffect, useState } from "react";
import { takeCodeAndPostToServerLinkedin } from "../api/linkedin";
import { useNavigate } from "react-router-dom";

const LinkedinAccess = () => {
  const navigate = useNavigate();
  const [linkedinData, setLinkedinData] = useState();
  const getLinkedinCodeinParamas = async () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    const data = await takeCodeAndPostToServerLinkedin(code, setLinkedinData);
    console.log(data.data?.error, "error");
    console.log(data.data?.token, "token");

    if (data.data?.token) {
      localStorage.setItem("tokens", data.data.token);
      navigate("/profile");
    }
  };

  useEffect(() => {
    getLinkedinCodeinParamas();
  }, []);
  return (
    <div>
      <h1>access code paramas linkedin</h1>
    </div>
  );
};

export default LinkedinAccess;
