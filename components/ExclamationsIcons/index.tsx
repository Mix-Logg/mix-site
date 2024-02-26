"use client";
import { HiOutlineExclamation } from "react-icons/hi";

interface ExclamationProps {
  type: string;
  className?: string;
}

export default function Exclamation({ type, className }: ExclamationProps) {
  let icon;
  switch (type) {
    case "FAILED":
      icon = (
        <div className={`${className} inline-flex rounded-lg bg-red-100 p-1`}>
          <HiOutlineExclamation className="h-10 w-10 text-red-600" />
        </div>
      );
      break;
    case "WARNING":
      icon = (
        <div className={`${className} inline-flex rounded-lg bg-amber-100 p-1`}>
          <HiOutlineExclamation className="h-10 w-10 text-amber-600" />
        </div>
      );
      break;
    case "AWAIT":
      icon = (
        <div className={`${className} inline-flex rounded-lg bg-blue-100 p-1`}>
          <HiOutlineExclamation className="h-10 w-10 text-blue-600" />
        </div>
      );
      break;

    case "SUCCESSFUL":
      icon = (
        <div className={`${className} inline-flex rounded-lg bg-green-100 p-1`}>
          <HiOutlineExclamation className="h-10 w-10 text-green-600" />
        </div>
      );
      break;
    default:
      icon = (
        <div className="inline-flex items-center rounded-lg bg-neutral-100 p-1 text-neutral-600">
          <HiOutlineExclamation className="h-10 w-10 text-neutral-600" />
          <p>passe nome de icone válido</p>
        </div>
      );
      break;
  }

  return <>{icon}</>;
}
