import React from "react";
import Link from "next/link";

export default function Button({
  text,
  onClick,
  href,
  type = "button",
  className, 
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <button
          type={type} 
          onClick={onClick}
          className={`rounded-full border border-primary transition duration-300 ease-in-out  cursor-pointer px-4 py-2 font-bold text-primary hover:bg-primary hover:bg-none hover:text-complement1 ${className}`}
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
      className={`rounded-full border border-primary transition duration-300 ease-in-out cursor-pointer px-4 py-2 font-bold text-primary hover:bg-primary hover:bg-none hover:text-complement1 ${className}`}
    >
      {text}
    </button>
  );
}
