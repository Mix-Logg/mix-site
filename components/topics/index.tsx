import React from "react";
import {
  HiOutlineFlag,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineExclamation,
} from "react-icons/hi";
import { FadeIn, FadeInStagger } from "../animations/fadeIn";
export default function Topics({ title, paragraph }: TopicsProps) {
  let icon,
    invalidTitle = false;

  switch (title) {
    case "Missão":
      icon = <HiOutlineFlag className="h-6 w-6 text-primary md:h-8 md:w-8" />;
      break;
    case "Visão":
      icon = <HiOutlineEye className="h-6 w-6 text-primary md:h-8 md:w-8" />;
      break;
    case "Valores":
      icon = <HiOutlineHeart className="h-6 w-6 text-primary md:h-8 md:w-8" />;
      break;
    default:
      icon = (
        <HiOutlineExclamation className="h-6 w-6 text-red-600 md:h-8 md:w-8" />
      );
      invalidTitle = true;
      break;
  }
  return (
    <FadeIn>
      <div className="mb-10 flex flex-col gap-2 md:mb-0">
        <div className="flex flex-col gap-2">
          {icon}
          <p
            className={`w-${
              invalidTitle ? "60" : "20"
            } text-base font-semibold text-secondary md:text-lg`}
          >
            {invalidTitle ? "Título inválido" : title}
          </p>
        </div>
        <p className="w-80 text-sm font-normal text-secondary md:text-base">
          {invalidTitle ? "Título inválido" : paragraph}
        </p>
      </div>
    </FadeIn>
  );
}
