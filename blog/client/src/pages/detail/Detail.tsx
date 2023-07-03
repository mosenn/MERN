import { useParams } from "react-router-dom";
import { posts } from "../../api/post";
import { useEffect, useState } from "react";
import { postUserComments, getAllPostComments } from "../../api/comment";
import { useGlobalContext } from "../../context/context";
import Button from "../../components/button/Button";

import "./detail.css";
interface Post {
  _id: string;
  title: string;
  content: string;
  img: string;
  createdAt: number;
  summery: string;
  username: string;
  author: {
    username: string;
    pic: string;
  };
}

const Detail = () => {
  const [disabelSubmitForm, setDisabelSubmitForm] = useState(true);

  const { userInfoOnline } = useGlobalContext();
  const [postData, setPostData] = useState<Post[]>([]);
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState({
    comment: "",
  });
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const { id } = useParams();
  const takePost = async () => {
    const response = await posts();
    // console.log(response);

    setPostData(response.data);
  };

  const pos = postData.find((p: Post) => {
    return p?._id === id;
  });

  const sendComment = async () => {
    if (value && userInfoOnline) {
      const response = await postUserComments(
        value,
        userInfoOnline.id,
        pos?._id as string
      );

      console.log(response, "Response handlesubmit comment");
    } else {
      console.log("is empty");
    }
  };

  const takeAllComments = async () => {
    console.log(pos);
    const comments = await getAllPostComments(pos?._id as string);
    setComments(comments.data);
    console.log(comments, "Comments all");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(value);
    sendComment();
  };

  useEffect(() => {
    takePost();
  }, []);

  useEffect(() => {
    takeAllComments();
    if (userInfoOnline.id) {
      setDisabelSubmitForm(false);
    }
  }, [pos]);

  return (
    <div>
      <h1>Detail</h1>
      {pos?.title}
      {pos?.title}
      <p>author : {pos?.author.username}</p>
      <img
        className="w-[50px]"
        src={pos?.author.pic}
        alt={pos?.author.username}
      />
      <div className="flex flex-col m-3 justify-center align-cneter">
        {comments &&
          comments.map((com: any) => {
            // console.log(com, "this is com in map");
            return (
              <div
                key={com._id}
                className=" mt-3  rounded-md  border border-zinc-200  flex-col"
              >
                <div className="flex p-1 m-1  w-[fit-content]">
                  <img src={com?.author?.pic} alt="" className="w-[35px]" />
                  <p className="ml-2">{com?.author?.username}</p>
                </div>
                <p className="m-3">{com.comment}</p>
              </div>
            );
          })}
      </div>
      <form action="" onSubmit={handleSubmit} className="p-1 m-1 ">
        <input
          className="rounded-md p-3 h-[90px] w-[100%] border"
          name="comment"
          placeholder="write your comment"
          onChange={handleOnchange}
        ></input>
        <Button
          text={"send comment"}
          className="bg-blue-500 hover:bg-blue-300 w-[100%] rounded-md mt-2 md:w-60 p-3 text-zinc-50 font-semibold"
          type="submit"
          disabled={disabelSubmitForm}
        ></Button>
      </form>
    </div>
  );
};

export default Detail;
