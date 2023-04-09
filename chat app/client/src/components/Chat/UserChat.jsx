import { useState, useEffect } from "react";
import { getUsersChats } from "../../services/chatapi";
import { Button, ButtonGroup } from "@chakra-ui/react";
export const UserChat = () => {
  const [chats, SetChats] = useState([]);

  return (
    <div>
      <h1> chat Pages</h1>
    </div>
  );
};
