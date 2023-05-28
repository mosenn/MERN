import { useEffect, useState } from "react";

import {
  takeCodeAndPostToServerLinkedin,
  getUserDataSiginLinkedin,
} from "../api/linkedin";

const LinkedinAccess = () => {
  const [sigineError, setSiginError] = useState("");

  const getUserInfoSiginLinkedin = async () => {
    try {
      console.log("function is run getUserInfoSiginLinkedin");
      console.log(sigineError, "sigineError");
      const data = await getUserDataSiginLinkedin(setSiginError);
      //*have data here
      console.log("data", data);
    } catch (err) {
      console.log(err);
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
