import {
  Button,
  Box,
  Tooltip,
  Text,
  Flex,
  Menu,
  MenuButton,
  Avatar,
} from "@chakra-ui/react";
import { useChatState } from "../../../context/ChatProvider";

import { BellIcon, TriangleDownIcon } from "@chakra-ui/icons";

import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";

export const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSerachResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const { userProvider } = useChatState();

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        bg="white"
        w="100%"
        border="2px solid gray"
        p="5px 10px 5px 10px"
      >
        <Tooltip
          spacing="5px"
          label="search users to chat"
          hasArrow
          placement="bottom-end"
          p="5px"
          ml="10px"
        >
          <Button variant="ghost" p="5px" my="15px">
            <FcSearch fontSize="30px" />
            <Text
              display={{ base: "none", md: "flex" }}
              px="4px"
              m="5px"
            >
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2x1" fontFamily="Work sans">
          Chat App
        </Text>
        <div>
          <Menu>
            <MenuButton>
              <BellIcon m={1} fontSize="2x1" />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<TriangleDownIcon />}>
              <Avatar
                size="sm"
                cruser="pointer"
                name={userProvider?.userName}
              />
            </MenuButton>
          </Menu>
        </div>
      </Flex>
    </div>
  );
};
