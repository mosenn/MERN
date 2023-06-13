import React, { useEffect, useState, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { logoutUser, profileUser } from "../../api/users";
interface setUserOnline {
  id: string;
  username: string;
  iat: number;
}
const Header = () => {
  const [userOnline, setUserOnline] = useState<setUserOnline | null>({
    id: "",
    username: "",
    iat: +"",
  });
  const getuserOnline = async () => {
    const user: {} = await profileUser();
    if (user) {
      setUserOnline(user as setUserOnline);
    }
  };
  const logOut = async () => {
    await logoutUser();
    setUserOnline(null);
  };
  useEffect(() => {
    getuserOnline();
  }, []);

  console.log("state user online in header", userOnline);
  return (
    <header className="bg-red-300 flex justify-between p-4 text-lg font-bold">
      <div>logo</div>

      <nav>
        {userOnline ? (
          <ul className="flex justify-end">
            <li className="mr-4">{userOnline?.username}</li>
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
