import { useEffect, useState } from "react";
import { registerUser } from "../api/registerAndLogin";
import { useNavigate } from "react-router-dom";
import optionImage from "../../public/men-1.jpg";
const UserRegister = () => {
  const options = [
    {
      value:
        "https://images.unsplash.com/photo-1680252111945-c80eabc8e191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",

      image:
        "https://images.unsplash.com/photo-1680252111945-c80eabc8e191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      label: "😃",
    },
    { value: "profile-2", image: "men-2.png", label: "profile-2" },
    { value: "profile-3", image: "woman-1.png", label: "profile-3" },
    { value: "profile-4", image: "woman-2.png", label: "profile-4" },
  ];

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

        {/* <select
          name="profileImage"
          value={registerValue.profileImage}
          onChange={onchangeHandleRegister}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.image}
              style={{ backgroundImage: `url(${option.image})` }}
            >
              {option.label}
              <label
                htmlFor=""
                style={{ backgroundImage: `url(${option.image})` }}
              >
                <img src="../../public/men-1.jpg"></img>
              </label>
            </option>
          ))}
        </select> */}

        <button type="submit">Register</button>
        {/* <img src="men-1.jpg" alt="" /> */}

        <input
          type="radio"
          id="profile1"
          value="men-1.jpg"
          name="pic"
          onChange={onchangeHandleRegister}
        />
        <label htmlFor="profile1">
          <img
            src="men-1.jpg"
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </label>
        <input
          type="radio"
          id="profile2"
          value="men-2.png"
          name="pic"
          onChange={onchangeHandleRegister}
        />
        <label htmlFor="profile2">
          <img
            src="men-2.png"
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </label>
        <input
          type="radio"
          id="profile3"
          value="woman-1.png"
          name="pic"
          onChange={onchangeHandleRegister}
        />
        <label htmlFor="profile3">
          <img
            src="woman-1.png"
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </label>

        <input
          type="radio"
          id="profile4"
          value="woman-2.png"
          name="pic"
          onChange={onchangeHandleRegister}
        />
        <label htmlFor="profile4">
          <img
            style={{ width: "100px", height: "100px" }}
            src="woman-2.png"
            alt=""
          />
        </label>
      </form>
    </div>
  );
};

export default UserRegister;
