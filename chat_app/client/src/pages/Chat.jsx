import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import Logo from "../components/Logo";
import { useGlobalcontext } from "../Context/Context/";

export const Chat = () => {
  const [message, setMessage] = useState("");
  const { user } = useGlobalcontext();
  const [ws, setWs] = useState(null);
  const [online, setOnline] = useState([]);
  const [selectedId, setselectedId] = useState();
  const [uiMessage, setUiMessage] = useState([]);

  const showOnlineUser = (userInfo) => {
    // console.log(userInfo);
    // const userOnline = {};
    const userOnline = userInfo.map(({ userId, username }) => {
      // console.log(userId, username);
      // userOnline[userId] = username;
      // console.log(userId, username);
      return { id: userId, name: username };
    });
    const uniqueUsers = userOnline.filter((user, index, array) => {
      // console.log(array, "array uniqueUser func");
      // console.log(index, "index uniqueUser func");
      // console.log(user, "user uniqueUser func");

      return array.findIndex((u) => u.id === user.id) === index;
    });
    console.log(uniqueUsers, "uniqueUsers");
    // console.log(userOnline);
    setOnline(uniqueUsers);
  };

  const handleMessage = (e) => {
    // console.log("socket message : ", e.data);
    const data = JSON.parse(e.data);
    if ("userInfo" in data) {
      showOnlineUser(data.userInfo);
    } else {
      console.log({ data }, "data in handelmesage");
      setUiMessage((prev) => [...prev, { isOur: false, text: data.text }]);
    }
  };
  // console.log(online);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4010");
    setWs(socket);
    socket.addEventListener("message", handleMessage);
  }, []);
  //? if get proplem about user online then out commend this code and maping onlinePepoleExcolOurUser for online user

  //*برای اینه که وقتی داخل یک مروگر با یک یوسر دیگه انلاین شدی فقط همون رو ببینی
  //*مثلا با کروم میای فقط همون یوسر که با کروم امده دیده شه
  //*با یه  مروگر دیگه مثلا ماکروسافت میای فقط همون یوسر دیده شه
  const onlinePepoleExcolOurUser = online.filter(
    (person) => person.name !== user
  );
  // console.log(onlinePepoleExcolOurUser , 'PeoplExcoloOurUser');

  //send message

  const sendMessage = (e) => {
    e.preventDefault();
    ws.send(
      JSON.stringify({
        msg: {
          recipinet: selectedId,
          text: message,
        },
      })
    );
    setMessage("");
    setUiMessage((prev) => [...prev, { text: message, isOur: true }]);
  };

  return (
    <section className="flex  h-screen">
      <div className="bg-white w-1/2 md:w-1/3 p-4">
        <Logo />
        <div className="text-blue-300 p-4 font-bold text-2xl">Users online</div>
        {online.length > 0 &&
          onlinePepoleExcolOurUser.map((users) => {
            {
              console.log(users);
            }
            return (
              <div
                key={users.id}
                className={
                  "flex items-center gap-2 border-b border-gray-100 cursor-pointer " +
                  (users.id === selectedId ? "bg-blue-50" : "")
                }
                onClick={() => {
                  setselectedId(users.id);
                }}
              >
                {users.id === selectedId && (
                  <div className="w-1 bg-blue-500 h-20 rounded-r-md pl-2"></div>
                )}
                <div className="flex items-center gap-2 p-2">
                  <Avatar username={users.name} id={users.id} />
                  <p className="text-xl font-bold m-2">{users.name}</p>
                </div>
              </div>
            );
          })}
        {/* with object map */}
        {/* {Object.keys(online).map((id) => {
          return (
            <div>
              <p>
                {online[id]} <span>{id}</span>
              </p>
            </div>
          );
        })} */}
      </div>
      <section className=" w-full md:w-2/3 flex bg-blue-50 flex-col justify-between">
        <div className="flex flex-col items-center justify-center h-full m-2">
          {selectedId ? (
            uiMessage.map((msg) => {
              return (
                <div>
                  <p>{msg.text}</p>
                </div>
              );
            })
          ) : (
            <div>
              <h1 className="text-gray-400 text-4xl">
                {" "}
                {`<-`} Selecte User For Chat
              </h1>
            </div>
          )}
        </div>
        {selectedId && (
          <form onSubmit={sendMessage}>
            <div className="border border-orange-900 flex m-2 gap-2 ">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2   border rounded-sm"
                type="text"
                placeholder="send message"
              />
              <button
                type="submit"
                className="w-11  p-2 bg-blue-500 rounded-sm text-white"
              >
                <svg
                  id="Group_10235"
                  data-name="Group 10235"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 173.64 149.826"
                  fill="#fafafa"
                >
                  <path
                    id="Path_8370"
                    data-name="Path 8370"
                    d="M163.3,94.537,23.2,36.4A16.767,16.767,0,0,0,.529,56.035L13,104.936H74.053a5.087,5.087,0,0,1,0,10.175H13l-12.47,48.9A16.768,16.768,0,0,0,23.2,183.643l140.1-58.132a16.767,16.767,0,0,0,0-30.974Z"
                    transform="translate(-0.001 -35.111)"
                  />
                </svg>
              </button>
            </div>
          </form>
        )}
      </section>
    </section>
  );
};
