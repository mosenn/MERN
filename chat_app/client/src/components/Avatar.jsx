import React from "react";

const colors = [
  "bg-teal-200",
  "bg-red-200",
  "bg-green-200",
  "bg-purple-200",
  "bg-blue-200",
  "bg-yellow-200",
];

const Avatar = ({ username, id }) => {
  // console.log(id);
  const userIdBase16 = parseInt(id, 16);
  const colorIndex = userIdBase16 % colors.length;
  const color = colors[colorIndex];
  // console.log(color);

  return (
    <div
      className={"w-16 h-16 rounded-full  flex items-center justify-center text-2xl opacity-70 "+color}
    >
      {username[0]}
    </div>
  );
};

export default Avatar;
