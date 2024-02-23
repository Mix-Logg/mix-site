"use client";
import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface InputProps {
  idInput: string;
  defaultValue?: string;
  name?: string;
  type?:
    | "text"
    | "search"
    | "password"
    | "email"
    | "checkbox"
    | "date"
    | "number"
    | "datetime-local";
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
interface LabelProps {
  label: string;
}

export default function Input({
  idInput,
  type = "text",
  placeholder = "",
  className,
  textColor = "text-terciary",
  ringColor = "ring-primary",
  hoverBgColor = "hover:bg-none",
  focusRingColor = "focus:ring-primary",
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
  label,
}: InputProps & LabelProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={idInput}
          className="cursor-pointer text-sm text-terciary font-normal"
        >
          {label}
        </label>
        <input
          id={idInput}
          readOnly={readonly}
          minLength={minLength}
          maxLength={maxlength}
          value={value}
          type={type}
          required={required}
          className={`${className} ${width}  ${height} ${padding} text-sm ${textColor} ${hoverBgColor} bg-complement1 transition duration-300 ease-in-out border-neutral-300 font-normal hover:border-primary ${ringColor} ${focusRingColor}  focus:outline-non rounded-md placeholder-secondary shadow-sm focus:outline-none ${
            hasError && "text-red-500 ring-red-500"
          }`}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleOnChange(e.target.value)
          }
        />
      </div>
    </>
  );
}
