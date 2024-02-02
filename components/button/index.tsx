import React from "react";

interface ButtonProps {
  text: string;
  borderColorHover: string;
  onClick?: () => void;
}

export default function Button({
  text,
  borderColorHover,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border border-primary transition duration-300 ease-in-out border-${borderColorHover} hover:bg-primary cursor-pointer px-4 py-2 font-bold text-primary hover:bg-none hover:text-complement1`}
    >
      {text}
    </button>
  );
}
