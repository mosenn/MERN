import React from "react";

const Header = () => {
  return (
    <header className="bg-red-300 flex justify-between p-4 text-lg font-bold">
      <div>logo</div>
      <nav>
        <ul className="flex justify-end">
          <li className="mr-4">Login</li>
          <li className="mr-4">Register</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
