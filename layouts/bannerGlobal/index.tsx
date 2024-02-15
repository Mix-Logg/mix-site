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
        
        <div className="hidden absolute inset-0 md:flex items-center justify-center gap-96 text-white p-0">
          <p className="flex items-center text-center font-extrabold text-primary text-5xl">
            {title}
          </p>
          <p className="w-72 text-sm font-normal">{paragraph}</p>
        </div>


        <div className="md:hidden absolute inset-0 flex flex-col items-start px-10 justify-center gap-6 p-4 text-white">
          <p className="flex items-center text-center font-extrabold text-primary md:text-5xl text-3xl">
            {title}
          </p>
          <p className="w-72 text-xs font-normal">{paragraph}</p>
        </div>
      </div>
    </FadeIn>
  );
}
