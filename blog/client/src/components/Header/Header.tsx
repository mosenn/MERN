import React, { useEffect, useState, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { logoutUser, profileUser } from "../../api/users";
import { useGlobalContext } from "../../context/context";

interface userinfo {
  id: string;
  username: string;
  iat: number;
}
const Header = () => {
  let { userInfoOnline } = useGlobalContext();

  const logOut = async () => {
    await logoutUser();
    //* can set loading for logout take effect
    await localStorage.removeItem("userInfoData");
    window.location.reload();
  };

  const getDataLocalSTroge = localStorage?.getItem("userInfoData");
  if (getDataLocalSTroge !== null) {
    userInfoOnline = JSON.parse(getDataLocalSTroge);
  }

  console.log(
    "user online from context and take local storge data",
    userInfoOnline
  );
  return (
    <header className="bg-red-300 flex justify-between p-4 text-lg font-bold">
      <div>logo</div>

      <nav>
        {userInfoOnline?.username ? (
          <ul className="flex justify-end">
            <li className="mr-4">{userInfoOnline?.username}</li>

            <li className="mr-4" onClick={logOut}>
              logout
            </li>
          </ul>
        ) : (
          <ul className="flex justify-end">
            <li className="mr-4">
              <Link to="/login">login</Link>
            </li>
            <li className="mr-4">
              <Link to="/register">register</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
