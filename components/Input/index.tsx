"use client";
import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface InputProps {
  id?: string;
  defaultValue?: string;
  name?: string;
  type?: "text" | "search" | "password" | "email" | "checkbox" | "date" | "number" | "datetime-local";
  placeholder?: string;
  className?: string;
  textColor?: string;
  ringColor?: string;
  hoverBgColor?: string;
  focusRingColor?: string;
  focusBorderColor?: string;
  disabled?: boolean;
  autoComplete?: string;
  required?: boolean;
  handleOnChange?: Dispatch<SetStateAction<string>> | any;
  value?: string | number;
  autoFocus?: boolean;
  width?: string;
  height?: string;
  maxlength?: number;
  minLength?: number;
  readonly?: boolean;
  padding?: string;
  hasError?: boolean;
}

export default function Input({
  type = "text",
  placeholder = "",
  className,
  textColor = "text-dark-700",
  ringColor = "ring-dark-300",
  hoverBgColor = "hover:bg-dark-50",
  focusRingColor = "focus:ring-dark-500",
  required,
  handleOnChange,
  value,
  width = "w-full",
  height = "   ",
  padding = "p-3",
  maxlength,
  minLength,
  readonly = false,
  hasError,
}: InputProps) {
  return (
    <input
      readOnly={readonly} 
      minLength={minLength}
      maxLength={maxlength}
      value={value}
      type={type}
      required={required}
      className={`${className} ${width}  ${height} ${padding} text-sm ${textColor} ${hoverBgColor} font-normal hover:border-primary border-gray-300 ${ringColor} ${focusRingColor}  focus:outline-none rounded-md shadow-sm focus:outline-non placeholder-gray-400 ${hasError && 'ring-red-500 text-red-500'}`}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleOnChange(e.target.value)
      }
    />
  );
}