import { useParams } from "react-router-dom";
import { posts } from "../../api/post";
import { useEffect, useState } from "react";
import { postUserComments, getAllPostComments } from "../../api/comment";
import { useGlobalContext } from "../../context/context";
import Button from "../../components/button/Button";
import "./detail.css";
import { getLikes, postLike, testing } from "../../api/userIntraction";
import { PiHeartStraight, PiHeartStraightFill } from "react-icons/pi";

interface Post {
  _id: string;
  title: string;
  content: string;
  cover: string;
  createdAt: number;
  summery: string;
  username: string;
  author: {
    username: string;
    pic: string;
  };
}
interface likeData {
  createdAt: string;
  liked: boolean;
  post: string;
  saved: boolean;
  updatedAt: string;
  user: {
    _id: string;
    username: string;
    pic: string;
  };
  __v: number;
  _id: string;
}
interface LikeResponse {
  data: likeData[];
  status: number;
  statusText: string;

  config: any;
}

const Detail = () => {
  const [disabelSubmitForm, setDisabelSubmitForm] = useState(true);
  const { userInfoOnline } = useGlobalContext();
  const [postData, setPostData] = useState<Post[]>([]);
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState({
    comment: "",
  });
  // const [dataLike, setDataLike] = useState<Array<likeData>>([]);

  const [dataLike, setDataLike] = useState<LikeResponse>({
    data: [],
    status: 0,
    statusText: "",
    config: {},
  });
  const [like, setLike] = useState(false);
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
    if (value && pos?._id) {
      const response = await postUserComments(
        value,
        userInfoOnline.id,
        pos?._id as string
      );

      // console.log(response, "Response handlesubmit comment");
    } else {
      console.log("is empty");
    }
  };

  const takeAllComments = async () => {
    // console.log(pos);
    if (pos?._id) {
      const comments = await getAllPostComments(pos?._id as string);
      setComments(comments.data);
    }
    // console.log(comments, "Comments all");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(value);
    sendComment();
  };

  useEffect(() => {
    takePost();
  }, []);

  //*Take Likes For Post With User
  const takeAllLikes = async () => {
    if (pos?._id) {
      const likes = await getLikes(pos?._id as string);
      // console.log("Likes in detail", likes);
      if (likes) {
        setDataLike(likes);
        likes.data.map((L: any) => {
          const { liked } = L;
          return setLike(liked);
        });
      }
    }
  };
  useEffect(() => {
    takeAllComments();
    takeAllLikes();
    if (userInfoOnline.id) {
      setDisabelSubmitForm(false);
    }
  }, [pos]);

  // console.log("liked true data", dataLike);
  // console.log("Like IS", like);

  //* Button Like set Like and Remove
  const interactionLikeBtn = async () => {
    try {
      const like = await postLike(pos?._id as string);
      // console.log(like, "like in click");
      const anchor = document.getElementById("like");
      if (anchor) {
        window.location.reload();
        let checkReloadPage = true;
        if (checkReloadPage) {
          anchor.scrollIntoView({ behavior: "smooth" });
        }
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };
  return (
    <div className="w-[100%]">
      <h1 className="text-4xl m-2 p-2">{pos?.title}</h1>
      <figure className="md:flex justify-center">
        <img
          className=" md:mb-4 md:w-[90%] md:object-cover md:bg-center  md:h-[200px] p-3 rounded-[14px]"
          src={pos?.cover}
          alt={pos?.title}
        />
      </figure>
      <div className=" md:p-3 m-3 flex justify-center items-start">
        <p className=" summary text-xl p-3 leading-9 md:w-[92%]">
          {" "}
          {pos?.summery}
        </p>
      </div>

      <div className="container">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: pos ? pos?.content : "" }}
        />
      </div>
      <div className="flex">
        <img
          className="w-[50px]"
          src={pos?.author.pic}
          alt={pos?.author.username}
        />
        <p>author : {pos?.author.username}</p>
      </div>
      {/* try to map likes and user */}
      {dataLike.data &&
        dataLike.data?.map((items) => {
          const { user, liked } = items;
          console.log(user, liked, "in map");
          return (
            <div key={user._id}>
              <p>{user.username}</p>
              <img className="w-[20px]" src={user.pic} alt="" />
            </div>
          );
        })}
      {/* Like button */}
      <button className="ml-5" type="button" onClick={interactionLikeBtn}>
        {like ? (
          <a href="#like">
            <PiHeartStraightFill size="1.5rem" />
          </a>
        ) : (
          <a href="#like">
            <PiHeartStraight size="1.5rem" />
          </a>
        )}

        {dataLike.data && <p id="like">{dataLike.data.length}</p>}
        {/* <p>{dataLike.data.length}</p> */}
      </button>
      {/* testing button */}
      <button
        className="ml-3"
        type="button"
        onClick={async () => {
          const test = await testing();
          console.log(test, "testing is work ");
        }}
      >
        testing
      </button>
      {/* show comment */}
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
      {/* form for send comment */}
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
