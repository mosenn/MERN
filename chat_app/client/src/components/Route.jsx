import React from "react";
import { Register } from "../pages/Register";
import { useGlobalcontext } from "../Context/Context";
const Route = () => {
  const { user } = useGlobalcontext();

  if (user) {
    return (
      <div>
        <h1>Welcome! {user} You are Login</h1>
      </div>
    );
  }

  return (
    <div>
      <Register />
    </div>
  );
};

export default Route;
