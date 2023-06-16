import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { registerUser } from "../../api/users";
import { uploadRegisterImage } from "../../api/uploadImage";
import { useNavigate } from "react-router-dom";

import "./register.css";
import Toast from "../../components/toast/Toast";
interface ErrorRegister {
  username?: string;
  minUsername?: string;
  password?: string;
  confirmPassword?: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [errorRegister, setErrorRegister] = useState<ErrorRegister>({});
  const [toast, setToast] = useState<Boolean>(false);
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    pic: "",
  });

  const handleOnchnage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "pic") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setRegister({
            ...register,
            [e.target.name]: reader.result as string,
          });
        };
        reader.readAsDataURL(file);
        const imageLink = await uploadRegisterImage(register.pic);
        console.log("User ProFile Image Link", imageLink);
      }
    }
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await registerUser(register, setErrorRegister);
    console.log(user, "user");
    if (user?.status === 201) {
      setToast(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
  // console.log(errorRegister);

  return (
    <div className="h-[90vh]  justify-center items-center flex">
      {toast && (
        <Toast text={"register is success redirect to login"} toast={toast} />
      )}

      <form
        onSubmit={handleSubmit}
        action=""
        className=" bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
        <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>

        {errorRegister?.username}
        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        />

        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          password
        </label>
        {errorRegister?.password}

        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="password"
          name="password"
        />
        <label
          className="ml-2 font-semibold text-gray-900"
          htmlFor="confirmPassword"
        >
          confirm password
        </label>
        {errorRegister?.confirmPassword}
        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="confirmPassword"
          name="confirmPassword"
        />
        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          upload profile picture
        </label>
        <input
          onChange={handleOnchnage}
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="file"
          id="pic"
          name="pic"
          accept=".png, .jpg, .jpeg .webp"
        />
        <div className=" m-1 p-1 w-full flex justify-start md:justify-center items-start">
          <Button
            className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            text="Register"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
