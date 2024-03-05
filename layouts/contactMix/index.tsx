"use client";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";
import Button from "../../components/Button";
import { HiArrowDown } from "react-icons/hi";
import Flyer from "../../assets/svg/start.svg";
import Floating from "../../components/Animations/Floating";
import useMessageWhatsApp from "../../utils/useMessageWhatsApp";

export default function ContactMix({ title, subtitle, className }: TitleProps) {
  const { isMobile, enviarMensagemWhatsApp } = useMessageWhatsApp();
  let socialMediaContent;

  return (
    <FadeIn className="">
      <div className="mt-10 px-4 md:px-40 ">
        <div className="items-center justify-center gap-24 rounded-3xl bg-gradient-primary p-8 shadow-xl md:flex">
          <div className="flex flex-col gap-3  justify-center items-center  ">
            <p className="w-96 text-center text-2xl font-extrabold text-complement1 md:text-3xl">
              {title}
            </p>
            <p className="w-80 p-5 text-justify text-complement1 md:w-96 md:p-2 md:text-center">
              {subtitle}
            </p>
            <p className="mt-0 flex items-center justify-center gap-2 text-center font-bold text-terciary md:mt-4">
              Clique e vamos te explicar melhor
              <HiArrowDown />
            </p>
            <div className="w-full">

            <Button
              text="Voar junto com a Mix"
              className="w-full rounded-lg border-terciary text-terciary"
              onClick={enviarMensagemWhatsApp}
            />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={Flyer} alt="celular" className="w-60 md:w-80" />{" "}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
