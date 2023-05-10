import { useEffect, useState } from "react";
import { loginUser } from "../api/registerAndLogin";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const onChangeHandelLogin = (inputs) => {
    setLoginValue({ ...loginValue, [inputs.target.name]: inputs.target.value });
  };
  const handleLoginForm = (form) => {
    form.preventDefault();
    console.log(loginValue, "login value");
    loginUser(loginValue, setLoginData, setLoginError);
  };

  useEffect(() => {
    console.log(loginData, "in use effect login data");

    localStorage.setItem("userData", JSON.stringify(loginData?.data));
    if (loginData) {
      navigate("/profile");
    }
  }, [loginData]);
  return (
    <div>
      {loginError && <p>password or email is worng</p>}
      <form action="" onSubmit={handleLoginForm}>
        <input
          type="text"
          name="email"
          placeholder="your@gmail.com"
          value={loginValue.email}
          onChange={onChangeHandelLogin}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={loginValue.password}
          onChange={onChangeHandelLogin}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default UserLogin;
