import React from "react";
import Button from "../../components/button/Button";

const Login = () => {
  return (
    <div className="h-[90vh]  justify-center items-center flex ">
      <form
        action=""
        className=" w-[90%] bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
      >
        <label className="ml-2 font-semibold text-gray-900" htmlFor="username">
          username
        </label>
        <input
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="username"
          name="username"
        />

        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          password
        </label>
        <input
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="password"
          name="password"
        />
        <div className=" m-1 p-1 w-full flex justify-start md:justify-center items-start">
          <Button
            className="bg-blue-500 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            text="Login"
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
