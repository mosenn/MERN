import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
export const Login = () => {
  let [user, SetUser] = useState({
    Email: "",
    userName: "",
    Password: "",
  });
  const [showPass, SetShowPass] = useState();

  const takeInfoFromUser = (inputs) => {
    SetUser({ ...user, [inputs.target.name]: inputs.target.value });
    console.log(user, "takeInfoFromUser");
  };

  const changeTypePass = () => {
    SetShowPass(!showPass);
  };

  const handelSubmitLogin = (e) => {
    e.preventDefault();
    console.log("hi");
    console.log(user, "handelSubmitLogin");
    //*post user state to database
    //*save someting to localstroge
  };

  const Loginguset = () => {
    console.log(user, "this happen in guset function");
    user = {
      Email: "guset@gmail.com",
      Password: "guset12345",
      userName: "guset",
    };
    console.log(user, "Loginguset");
  };
  return (
    <div>
      <form action="" onSubmit={handelSubmitLogin}>
        <VStack color="black">
          <FormControl>
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
          <FormControl>
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
          <FormControl>
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
          <Button
            onClick={Loginguset}
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
            are you guset member ?
          </Button>
        </VStack>
      </form>
    </div>
  );
};
