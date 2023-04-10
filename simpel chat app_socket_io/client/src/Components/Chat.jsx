import React, { useEffect, useState } from "react";
import chatStyle from "./module.chat.css";
export const Chat = ({ socket, username, room }) => {
  const [message, setMessage] = useState({});
  const [list, setList] = useState([]);
  const sendMessage = async () => {
    if (message !== "") {
      const usersMessage = {
        message: message,
        name: username,
        roomId: room,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("SEND_MESSAGE", usersMessage);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setList((prevList) => [...prevList, data]);
    });
  }, [socket]);
  return (
    <div className={chatStyle.containerChat}>
      <textarea
        type="text"
        placeholder="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>send Message</button>
    </div>
  );
};
