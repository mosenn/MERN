import React, { useState } from "react";
import Button from "../../components/button/Button";
import { registerUser } from "../../api/users";
const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    pic: "",
  });

  const handleOnchnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //*Todo i want send inputs value to server and save to data base in clinet
     await registerUser(register);
    console.log("form submit");
  };
  return (
    <div className="h-[90vh]  justify-center items-center flex">
      <form
        onSubmit={handleSubmit}
        action=""
        className=" bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
        <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>
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
