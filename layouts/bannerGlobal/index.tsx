"use client";
import React from "react";
import Image from "next/image";
import Multicultural from "../../assets/videos/multicultural.gif";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";

export default function BannerGlobal({ title, paragraph }: BannerGlobalProps) {
  return (
    <FadeIn>
      <div className="relative rounded-3xl bg-complement1">
        <div className="relative flex-grow">
          <Image
            src={Multicultural}
            alt="Mix Multicultural"
            className="h-60 w-full rounded-3xl object-cover"
          />
          <div className="absolute inset-0 rounded-3xl bg-terciary opacity-80"></div>
        </div>

        <div className="absolute inset-0 items-center justify-center px-4 py-11 text-white md:flex md:gap-96 md:p-0">
          <p className="flex items-center text-center text-4xl font-extrabold text-primary md:text-5xl">
            {title}
          </p>
          <p className="mt-4 w-72 text-xs font-normal md:mt-0 md:text-sm">
            {paragraph}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
