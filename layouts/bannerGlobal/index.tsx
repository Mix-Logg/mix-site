"use client";
import React from "react";
import Image from "next/image";
import Multicultural from "../../assets/videos/multicultural.gif";
import PeopleDelivery from "../../assets/videos/peopleDelivery.gif";

import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";
import { HiOutlineExclamation } from "react-icons/hi";

export default function BannerGlobal({ title, paragraph }: BannerGlobalProps) {

  let video;
  switch (title) {
    case "Entregadores":
      video = (
        <Image
        src={PeopleDelivery}
        alt="Mix Entregadores"
        className="h-60 w-full rounded-3xl object-cover"
      />
      );
      break;
      case "Sobre nós":
        video = (
          <Image
          src={Multicultural}
          alt="Mix Multicultural"
          className="h-60 w-full rounded-3xl object-cover"
        />
        );
        break;
    default:
      video = (
        <div className="inline-flex items-center rounded-lg bg-neutral-100 p-1 text-neutral-600">
          <HiOutlineExclamation className="h-10 w-10 text-neutral-600" />
          <p>passe nome de icone válido</p>
        </div>
      );
      break;
  }

  return (
    <FadeIn>
      <div className="relative rounded-3xl mb-6 md:mb-10 bg-complement1">
        <div className="relative flex-grow">
          {video}
          <div className="absolute inset-0 rounded-3xl bg-terciary opacity-50"></div>
        </div>

        <div className="absolute inset-0 items-center justify-center px-4 py-11 text-complement1 md:flex md:gap-96 md:p-0">
          <p className="flex items-center text-center text-4xl font-extrabold text-primary md:text-5xl">
            {title}
          </p>
          <p className="mt-4 w-72 text-xs text-justify font-normal md:mt-0 md:text-sm">
            {paragraph}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
