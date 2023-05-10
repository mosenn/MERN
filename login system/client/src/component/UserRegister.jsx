import { useEffect, useState } from "react";
import { registerUser } from "../api/registerAndLogin";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();
  const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    pic: "",
  });
  const [dataUserRegister, setDataUserRegister] = useState("");
  const [userRegisterError, setUserRegisterError] = useState([]);
  const onchangeHandleRegister = (inputs) => {
    setRegisterValue({
      ...registerValue,
      [inputs.target.name]: inputs.target.value,
    });
    //*if want show warning message in typing register inputs
    // registerUser(registerValue, setDataUserRegister, setUserRegisterError);
  };

  //*
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file, "in on change file");
    const imageData = new FormData();
    imageData.append("image", file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setRegisterValue({
        ...registerValue,
        pic: reader.result,
      });
    };
    console.log("after reader ", registerValue);
  };
  //*

  const handleSubmit = async (form) => {
    form.preventDefault();
    console.log(registerValue, "register value in submit");
    registerUser(registerValue, setDataUserRegister, setUserRegisterError);
  };
  useEffect(() => {
    console.log(dataUserRegister, "data user register");
    console.log(userRegisterError, "data err");
    if (dataUserRegister.data) {
      console.log(dataUserRegister.data, "data user register in submit");
      localStorage.setItem("userData", JSON.stringify(dataUserRegister.data));
      navigate("/profile");
    }
  }, [dataUserRegister, userRegisterError]);

  return (
    <div>
      {userRegisterError.length > 0 &&
        userRegisterError?.map((items, index) => {
          return (
            <div key={index}>
              <p>{items}</p>
            </div>
          );
        })}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={registerValue.email}
          onChange={onchangeHandleRegister}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={registerValue.password}
          onChange={onchangeHandleRegister}
        />
        <input
          type="text"
          name="confirmPassword"
          placeholder="confrim password"
          value={registerValue.confirmPassword}
          onChange={onchangeHandleRegister}
        />

        <input
          type="file"
          name="pic"
          placeholder="uplod profile image"
          onChange={handleFileChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
