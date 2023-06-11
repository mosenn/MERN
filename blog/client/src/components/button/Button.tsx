import React from "react";

interface buttonProps {
  text: string;
  type: "button" | "submit" | "reset";
  className: string;
}

export default function Button({ text, type, className }: buttonProps) {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}
