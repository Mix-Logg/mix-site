"use client";
import React from "react";
import Image from "next/image";
import Multicultural from "../../assets/videos/multicultural.gif";
import { FadeIn, FadeInStagger } from "../../components/animations/fadeIn";

export default function BannerGlobal({ title, paragraph }: BannerGlobalProps) {
  return (
    <FadeIn>
      <div className="relative m-2 rounded-3xl bg-complement1 p-4 md:p-10">
        <div className="relative flex-grow">
          <Image
            src={Multicultural}
            alt="Mix Multicultural"
            className="h-60 w-full rounded-3xl object-cover"
          />
          <div className="absolute inset-0 rounded-3xl bg-terciary opacity-80"></div>
        </div>

        <div className="absolute inset-0 hidden items-center justify-center gap-96 p-0 text-white md:flex">
          <p className="flex items-center text-center text-5xl font-extrabold text-primary">
            {title}
          </p>
          <p className="w-72 text-sm font-normal">{paragraph}</p>
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 p-4 px-10 text-white md:hidden">
          <p className="flex items-center text-center text-3xl font-extrabold text-primary md:text-5xl">
            {title}
          </p>
          <p className="w-72 text-xs font-normal">{paragraph}</p>
        </div>
      </div>
    </FadeIn>
  );
}
