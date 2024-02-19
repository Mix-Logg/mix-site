"use client";
import React from "react";
import {
  HiOutlineFlag,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineExclamation,
  HiOutlineWifi,
  HiOutlineBadgeCheck,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { FadeIn, FadeInStagger } from "../Animations/FadeIn";
export default function Topics({ title, paragraph }: TopicsProps) {
  let icon,
    invalidTitle = false;

  switch (title) {
    case "Inovação":
      icon = (
        <HiOutlineLightBulb className="h-6 w-6 text-primary md:h-8 md:w-8" />
      );
      break;
    case "Efetividade":
      icon = (
        <HiOutlineBadgeCheck className="h-6 w-6 text-primary md:h-8 md:w-8" />
      );
      break;
    case "Conexão":
      icon = <HiOutlineWifi className="h-6 w-6 text-primary md:h-8 md:w-8" />;
      break;
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
            className={`
             text-base font-semibold text-secondary md:text-lg`}
          >
            {invalidTitle ? "Título inválido" : title}
          </p>
        </div>
        <p className="text-left justify-left w-80 text-sm font-normal text-secondary md:text-base">
          {invalidTitle ? "Título inválido" : paragraph}
        </p>
      </div>
    </FadeIn>
  );
}
