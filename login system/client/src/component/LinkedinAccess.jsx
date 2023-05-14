import React, { useEffect, useState } from "react";

const LinkedinAccess = () => {
  const [codeLinkedin, setCodeLinkedin] = useState();
  const getLinkedinCodeinParamas = () => {
    const param = new URLSearchParams(window.location.search);
    const code = param.get("code");
    console.log(code);
    setCodeLinkedin(codeLinkedin);
  };

  useEffect(() => {
    getLinkedinCodeinParamas();
  }, [codeLinkedin]);
  return (
    <div>
      <h1>access code paramas linkedin</h1>
    </div>
  );
};

export default LinkedinAccess;
