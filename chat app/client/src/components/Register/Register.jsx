import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

import React, { useState } from "react";

export const Register = () => {
  const [user, SetUser] = useState();
  const [showPass, SetShowPass] = useState();

  const takeInfoFromUser = (inputs) => {
    if (inputs.target.name === "pic") {
      SetUser({
        ...user,
        [inputs.target.name]: inputs.target.files[0],
      });
    } else {
      SetUser({ ...user, [inputs.target.name]: inputs.target.value });
    }
  };

  const changeTypePass = () => {
    SetShowPass(!showPass);
  };
  //? this log with onchange input
  console.log(user);
  const handelSubmitRegister = (e) => {
    e.preventDefault();
    console.log("hi");
    //*post user state to database
    //*save someting to localstroge
  };
  return (
    <form action="" onSubmit={handelSubmitRegister}>
      <VStack color="black">
        <FormControl isRequired>
          <FormLabel>username</FormLabel>
          <Input
            name="userName"
            variant="filled"
            size="md"
            focusBorderColor="green.200"
            onChange={(e) => {
              takeInfoFromUser(e);
            }}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>email</FormLabel>
          <Input
            name="Email"
            variant="filled"
            size="md"
            focusBorderColor="green.200"
            onChange={(e) => {
              takeInfoFromUser(e);
            }}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>password</FormLabel>
          <Input
            name="Password"
            variant="filled"
            size="md"
            focusBorderColor="green.200"
            onChange={(e) => {
              takeInfoFromUser(e);
            }}
            type={showPass ? "text" : "password"}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>confrim password</FormLabel>
          <InputGroup>
            <Input
              name="confrimPassword"
              variant="filled"
              size="md"
              focusBorderColor="green.200"
              type={showPass ? "text" : "password"}
              onChange={(e) => {
                takeInfoFromUser(e);
              }}
            />
            <InputRightElement>
              <Button size={"sm"} onClick={changeTypePass}>
                {showPass ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Profile Image</FormLabel>
          <Input
            name="pic"
            variant="filled"
            size="md"
            focusBorderColor="green.200"
            onChange={(e) => {
              takeInfoFromUser(e);
            }}
            type="file"
            accept="image/*"
          ></Input>
        </FormControl>
        <Button
          type="submit"
          m={{ base: "15px", md: "15px" }}
          w={{ base: "70%", md: "50%" }}
          border="1px solid #80808066"
          borderRadius={"4px"}
          _focus={{
            boxShadow: "none",
            border: "1px solid #80808066",
            outline: "none",
            bg: "#9ED5C5",
            color: "black",
          }}
          _hover={{
            bg: "#9ED5C5",
            border: "1px solid #80808066",
            color: "black",
          }}
        >
          Register
        </Button>
      </VStack>
    </form>
  );
};
