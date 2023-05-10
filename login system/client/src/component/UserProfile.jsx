import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserProfile = () => {
  const navigate = useNavigate();

  //*get token and user data from local
  let localtoken = localStorage.getItem("tokens");
  const gitUserData = JSON.parse(localStorage.getItem("userData"));
  console.log(gitUserData?.email, "userData");
  console.log(gitUserData?.data, "localgitUserDAta");
  const useruserData = gitUserData?.data;
  console.log(useruserData, "userdata in uselayout");

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("tokens");
    localStorage.removeItem("userData");
    const gitUserData = JSON.parse(localStorage.getItem("userData"));

    console.log(gitUserData);
    if (!localStorage.getItem("tokens") && !localStorage.getItem("userData")) {
      navigate("/login");
    }
  };

  useEffect(() => {
    console.log(localtoken, "localtoken");
    if (!localStorage.getItem("tokens") && !localStorage.getItem("userData")) {
      navigate("/login");
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() => {
          logout();
        }}
      >
        logout
      </button>
      <h1>Profile Pages</h1>{" "}
      {localtoken && useruserData ? (
        <>
          <h2>welcome {useruserData?.login}</h2>
          <h2>{useruserData?.blog ? useruserData?.blog : ""}</h2>
          <figure>
            <img
              src={useruserData?.avatar_url}
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
              alt=""
            />
          </figure>
          <Link to={useruserData?.html_url}>{useruserData?.html_url}</Link>
        </>
      ) : (
        ""
      )}
      <div>
        {gitUserData?.email}
        <p> {gitUserData?.password}</p>
        <img
          src={gitUserData?.pic}
          alt=""
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
        />
      </div>
    </div>
  );
};

export default UserProfile;
