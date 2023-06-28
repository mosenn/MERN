import e from "cors";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "../../api/post";
import { uploadRegisterImage } from "../../api/users";
import Loading from "../../components/loading/Loading";
import Button from "../../components/button/Button";

const CreatePost = () => {
  // TODO Refactor State to global state
  const [uploadAnimation, setUploadAnimation] = useState(false);
  const [uploadMessage, setuploadMessage] = useState(
    "upload your profile image"
  );
  const [disabelSubmitForm, setDisabelSubmitForm] = useState(false);

  const [postValue, setPostValue] = useState({
    title: "",
    summery: "",
    cover: {},
    content: "",
  });

  const [content, setContent] = useState("");
  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
  //   setPostValue({ ...postValue, [e.target.name]: e.target.value });
  // };

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "cover") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setDisabelSubmitForm(true);
        setPostValue({ ...postValue, cover: file });
      }
    } else {
      setPostValue({ ...postValue, [e.target.name]: e.target.value });
    }
    console.log("Regiser State in onChange func", postValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(postValue);
    setPostValue({ ...postValue, content: content });
    console.log(postValue, "POST VALUE");
    createPost(postValue);
    // uploadRegisterImage(postValue.cover);
  };
//  TODO  Refactor to Global function
  const Uploadimage = async () => {
    setUploadAnimation(true);
    const res = await uploadRegisterImage(postValue.cover);
    console.log("response upload pic in submit func", res);
    if (res.status === 200) {
      setTimeout(() => {
        setUploadAnimation(false);
        setuploadMessage("upload is done ✔");
        setDisabelSubmitForm(false);
      }, 3000);
      setPostValue({
        ...postValue,
        cover: res.data.secure_url,
      });
    }
    if (res?.response?.status === 400) {
      console.log("error");
      setUploadAnimation(false);
      setuploadMessage("upload is fail ☹");
    }
    console.log("register state in uplpad image btn", postValue);
  };
  return (
    <div>
      <h1> create Post </h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleOnChange}
        />
        <input
          type="text"
          placeholder="summery"
          name="summery"
          onChange={handleOnChange}
        />
        {/* <label
          htmlFor="cover-input"
          id="cover"
          className=" bg-blue-500 text-white  p-2 m-2 rounded hover:bg-blue-400"
        >
          upload thumbnail post
        </label> */}
        <input
          type="file"
          name="cover"
          id="cover-input"
          onChange={handleOnChange}
        />
        <Button
          disabled={false}
          text={
            uploadAnimation ? (
              <Loading size={35} color={"#ECF0F3"} />
            ) : (
              uploadMessage
            )
          }
          className={
            "bg-blue-500 hover:bg-blue-300 w-[96%]   md:w-[180px] md:-translate-x-1 lg:w-[250px] rounded p-3 text-zinc-50 font-semibold"
          }
          type="button"
          onClick={Uploadimage}
        ></Button>
        <ReactQuill theme="snow" value={content} onChange={setContent} />

        <button
          className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
          type="submit"
          disabled={disabelSubmitForm}
        >
          create post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
