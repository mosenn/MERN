import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-red-300 flex justify-between p-4 text-lg font-bold">
      <div>logo</div>
      <nav>
        <ul className="flex justify-end">
          <li className="mr-4">
            <Link to="/login">login</Link>
          </li>
          <li className="mr-4">
            <Link to="/register">register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
