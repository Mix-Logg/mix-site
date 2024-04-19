"use client";
import { FadeIn, FadeInStagger } from "../Animations/FadeIn";

export default function Title({ title, subtitle, className }: TitleProps) {
  return (
    <>
      {/* <FadeIn> */}
        <div className={`flex flex-col justify-center py-7 ${className}`}>
          <h2 className={`text-xs md:text-sm font-extralight uppercase tracking-widest text-secondary ${className}`}>
            {subtitle}
          </h2>
          <h1 className={`text-3xl md:text-4xl font-extrabold text-primary ${className}`}>{title}</h1>
        </div>
      {/* </FadeIn> */}
    </>
  );
}
