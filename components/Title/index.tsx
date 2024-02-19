"use client";
import { FadeIn, FadeInStagger } from "../Animations/FadeIn";

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <>
      <FadeIn>
        <div className="flex flex-col items-center justify-center py-4">
          <h2 className="text-xs md:text-sm font-extralight uppercase tracking-widest text-secondary">
            {subtitle}
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">{title}</h1>
        </div>
      </FadeIn>
    </>
  );
}
