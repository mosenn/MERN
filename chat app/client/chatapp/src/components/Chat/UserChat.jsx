import { useState, useEffect } from "react";
import { getUsersChats } from "../../services/chatapi";
import { Button, ButtonGroup } from "@chakra-ui/react";
export const UserChat = () => {
  const [chats, SetChats] = useState([]);
  useEffect(() => {
    getUsersChats(SetChats);
  }, []);

  const Chatdata = chats.data;
  console.log(Chatdata);
  return (
    <div>
      <h1> chat Pages</h1>
      <Button colorScheme="blue">Button</Button>
      {Chatdata?.map((items) => {
        // console.log(items, " in map");
        const { chatName, _id } = items;
        return (
          <div key={_id}>
            <h3>{chatName}</h3>
          </div>
        );
      })}
    </div>
  );
};
