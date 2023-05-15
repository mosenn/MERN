import { useEffect, useState } from "react";
import { takeCodeAndPostToServer } from "../api/linkedin";

const LinkedinAccess = () => {
  const [codeLinkedin, setCodeLinkedin] = useState();
  const getLinkedinCodeinParamas = () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    console.log("code in conponet linkedin access", code);
    setCodeLinkedin(codeLinkedin);
    console.log("state code", codeLinkedin);
    takeCodeAndPostToServer(code);
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
