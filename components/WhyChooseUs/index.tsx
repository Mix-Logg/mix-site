"use client";
import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FadeIn, FadeInStagger } from "../Animations/FadeIn";
import { HiOutlineExclamation } from "react-icons/hi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { PiHandHeart } from "react-icons/pi";
export default function WhyChooseUs({ title, paragraph }: WhyChooseUsProps) {
  let icon,
    invalidTitle = false;

  switch (title) {
    case "Cabe no seu bolso":
      icon = (
        <LiaPiggyBankSolid className="h-6 w-6 text-primary md:h-8 md:w-8" />
      );
      break;
    case "Entregas Rápidas":
      icon = (
        <AiOutlineFieldTime className="h-6 w-6 text-primary md:h-8 md:w-8" />
      );
      break;
    case "Cuidado Personalizado":
      icon = <PiHandHeart className="h-6 w-6 text-primary md:h-8 md:w-8" />;

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
      <div className="">
        <div className="rounded-2xl bg-primary p-3">
          <div className="inline-flex rounded-lg bg-complement1 p-2">
            {icon}
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <p className="text-base font-semibold text-complement1">
              {invalidTitle ? "Título inválido" : title}
            </p>
            <p className="w-52 text-justify text-sm font-normal text-complement1">
              {invalidTitle ? "Título inválido" : paragraph}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
