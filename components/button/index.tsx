import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  borderColorHover: string;
  style: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

export default function Button({
  text,
  borderColorHover,
  onClick,
  style,
  href,
  type = "button",
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <button
          type={type} 
          onClick={onClick}
          className={`${style} border border-primary transition duration-300 ease-in-out border-${borderColorHover} cursor-pointer px-4 py-2 font-bold text-primary hover:bg-primary hover:bg-none hover:text-complement1`}
        >
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type} 
      onClick={onClick}
      className={`${style} border border-primary transition duration-300 ease-in-out border-${borderColorHover} cursor-pointer px-4 py-2 font-bold text-primary hover:bg-primary hover:bg-none hover:text-complement1`}
    >
      {text}
    </button>
  );
}
