import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { json, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const urluploadimg = `https://api.cloudinary.com/v1_1/dm6tmiksw/image/upload`;
export const Register = () => {
  const navigate = useNavigate();
  const [user, SetUser] = useState();
  const [showPass, SetShowPass] = useState();
  const [imageUrlUpload, SetImageUrlUpload] = useState();
  const [loading, SetLoading] = useState(false);
  const [registerUser, SetUserRegister] = useState();
  const [handleError, SetHandelError] = useState();
  const errors = [
    {
      path: "",
      message: "",
      email: "",
    },
  ];
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
  // console.log(user, "this user input state");

  //* Create Form data for get pic
  const data = new FormData();
  const SeTimageAndControllLoadingBtn = () => {
    if (
      (user?.pic && user?.pic?.type === "image/jpeg") ||
      user?.pic?.type === "image/png"
    ) {
      // console.log(user.pic.type, "this type");
      // console.log(data, "form data");
      // console.log(user.pic, "userpic");
      data.append("file", user.pic);
      data.append("upload_preset", "chatapp");
      data.append("cloudName", "dm6tmiksw");
      fetch(urluploadimg, {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.secure_url !== "") {
            const uploadedFileUrl = data.secure_url;
            // console.log(uploadedFileUrl, "in then");
            SetImageUrlUpload(uploadedFileUrl);
            SetLoading(false);
          }
        })
        .catch((err) => console.log(err.message, "error in 62"));
    } else {
      //*set chakraUi toast
      // console.log("pls set image for profile");
      SetLoading(false);
    }
  };

  const sendUserValue = async () => {
    // console.log("typeof", typeof user?.name);
    const userData = await fetch(
      "http://localhost:3000/registerUsers",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user?.name,
          password: user?.Password,
          confirmPassword: user?.confrimPassword,
          email: user?.Email,
          pic: imageUrlUpload,
        }),
      }
    );
    const jsonData = await userData.json();
    SetUserRegister(jsonData);
  };

  // console.log(registerUser?.token, "i need this token");
  //?have email error here
  console.log(registerUser, "user state");

  if (registerUser?.inner) {
    registerUser.inner.filter((items) => {
      const { message, path } = items;
      // console.log(items.message, items.path);
      errors.push({ path, message });
    });
    // console.log(registerUser.inner, "registeruser");
  }
  console.log(errors, "e");
  const navigateTochatRoute = () => {
    // if (registerUser?.token) {
    //   setTimeout(() => {
    //     navigate("/chat");
    //   }, 3000);
    // }
  };
  const handelSubmitRegister = (e) => {
    SetLoading(true);
    e.preventDefault();
    SeTimageAndControllLoadingBtn();

    sendUserValue();

    // navigateTochatRoute();
    // console.log("hi");
    // //*post user state to database
    // //*save someting to localstroge
  };

  //* i want know that new linke image has set or not . ! is okey no any proplem
  useEffect(() => {
    console.log(imageUrlUpload, "image linke");
  }, [imageUrlUpload]);
  //* i want know that new linke image has set or not . ! is okey no any proplem

  return (
    <form action="" onSubmit={handelSubmitRegister}>
      <VStack color="black">
        {errors?.map((items) => {
          return (
            <div key={items.path}>
              <p>{items.message}</p>
            </div>
          );
        })}
        <FormControl>
          <FormLabel>name</FormLabel>
          {errors?.map((items) => {
            return (
              <div key={items.path}>
                <p>{items.path === "name" && items.message}</p>
              </div>
            );
          })}
          <Input
            name="name"
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

          {errors?.map((items) => {
            console.log(items);
            return (
              <div key={items.path}>
                <p>{items.path === "email" && items.message}</p>
              </div>
            );
          })}
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
          {errors?.map((items) => {
            return (
              <div key={items.path}>
                <p>{items.path === "password" && items.message}</p>
              </div>
            );
          })}
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
        <FormControl>
          <FormLabel>confrim password</FormLabel>
          {errors?.map((items) => {
            return (
              <div key={items.path}>
                <p>
                  {items.path === "confirmPassword" && items.message}
                </p>
              </div>
            );
          })}
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
        <FormControl>
          <FormLabel>Profile Image</FormLabel>
          {errors?.map((items) => {
            return (
              <div key={items.path}>
                <p>{items.path === "pic" && items.message}</p>
              </div>
            );
          })}
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
          isLoading={loading}
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
          {imageUrlUpload ? "Register" : "Upload image"}
        </Button>
      </VStack>
      <figure>
        <img src={imageUrlUpload} alt="" />
      </figure>
    </form>
  );
};
