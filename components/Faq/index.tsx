"use client";
import { FadeIn, FadeInStagger } from "../Animations/FadeIn";
import { IoIosArrowDown } from "react-icons/io";
export default function Faq({ title, paragraph }: FaqProps) {
  return (
    <>
      <FadeIn>
        <div className="flex px-36  items-center justify-center">
          <div className="flex flex-col  items-start justify-center py-7">
            <h2 className="flex w-56 items-center justify-between text-lg font-medium text-terciary">
              {title}
              <IoIosArrowDown />
            </h2>
            <p className="text-justify text-base font-extralight tracking-widest text-terciary">
              {paragraph}
            </p>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
