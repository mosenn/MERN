import React, { useState } from "react";

export const Register = () => {
  const [ValueRegister, setValueRegister] = useState({
    username: "",
    password: "",
  });

  const takeRegisterValue = (input) => {
    const { name, value } = input.target;
    setValueRegister({
      ...ValueRegister,
      [name]: value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ValueRegister);
  };

  return (
    <div className="h-screen border-2 border-black flex  flex-col md:flex-row ">
      <div className="h-1/6 md:w-1/2 md:h-full bg-red-400">for detail</div>
      <form
        onSubmit={handleSubmit}
        className="h-full  flex border-2 border-gray-500 flex-col md:items-center justify-center  w-full bg-blue-300"
      >
        <input
          type="text"
          name="username"
          className="outline-0 border-2 border-[#e0e7ff] rounded-sm p-2 m-2  md:w-1/2"
          placeholder="username"
          onChange={(input) => {
            takeRegisterValue(input);
          }}
        />
        <input
          type="text"
          name="password"
          className="outline-0 border-2 border-[#e0e7ff] rounded-sm p-2 m-2 md:w-1/2"
          placeholder="password"
          onChange={(input) => {
            takeRegisterValue(input);
          }}
        />
        <button className="bg-[#0284c7] text-colortext md:w-1/2 p-1 m-2  hover:bg-[#0369a1] text-lg rounded-sm	 text-[#fafafafa]">
          Register
        </button>
      </form>
    </div>
  );
};
