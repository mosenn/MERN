import React from "react";
import Button from "../../components/button/button";
const Register = () => {
  return (
    <div className="h-[90vh]  justify-center items-center flex">
      <form
        action=""
        className=" bg-gray-300 rounded-lg grid p-3 m-2 md:w-[60%]"
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
        <label
          className="ml-2 font-semibold text-gray-900"
          htmlFor="confirmPassword"
        >
          confirm password
        </label>
        <input
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="text"
          id="confirmPassword"
          name="confirmPassword"
        />
        <label className="ml-2 font-semibold text-gray-900" htmlFor="password">
          upload profile picture
        </label>
        <input
          className="p-1 m-2 border border-solid border-gray-300 rounded-sm"
          type="file"
          id="pic"
          name="pic"
        />
        <div className=" m-1 p-1 w-full flex justify-start md:justify-center items-start">
          <Button
            className="bg-blue-500 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            text="Register"
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
