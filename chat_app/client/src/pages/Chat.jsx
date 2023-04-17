import React, { useEffect, useState } from "react";

export const Chat = () => {
  const [ws, setWs] = useState();
  const handleMessage = (e) => {
    console.log("socket message : ", e.data);
  };
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4010");
    setWs(socket);
    socket.addEventListener("message", handleMessage);
  }, []);

  return <div>chat</div>;
};
