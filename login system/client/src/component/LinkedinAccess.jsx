import { useEffect } from "react";
import { takeCodeAndPostToServerLinkedin } from "../api/linkedin";

const LinkedinAccess = () => {
  const getLinkedinCodeinParamas = async () => {
    const param =  new URLSearchParams(window.location.search);
    const code =  param.get("code");
    if (code) {
      const data = await takeCodeAndPostToServerLinkedin(code);
      console.log(data);
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
