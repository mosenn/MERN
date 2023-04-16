import React from "react";
import { Register } from "../pages/Register";
import { useGlobalcontext } from "../Context/Context";

const Route = () => {
  const { user, userId } = useGlobalcontext();
  if (user) {
    return (
      <div>
        <h1>user is login</h1>
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
