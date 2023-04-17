import React, { useEffect } from "react";

export const Chat = () => {
  useEffect(() => {
    new WebSocket("ws://localhost:4010");
  }, []);
  return <div>chat</div>;
};
