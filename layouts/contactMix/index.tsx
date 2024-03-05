"use client";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";
import Button from "../../components/Button";
import { HiArrowDown } from "react-icons/hi";
import Flyer from "../../assets/svg/flyer.svg";
import Floating from "../../components/Animations/Floating";
import useMessageWhatsApp from "../../utils/useMessageWhatsApp";

export default function ContactMix  ()  {
  
  const { isMobile, enviarMensagemWhatsApp } = useMessageWhatsApp();
  let socialMediaContent;

  return (
    <FadeIn className="">
      <div className="mt-10 px-4 md:px-40 ">
        <div className="items-center justify-center gap-24 rounded-3xl bg-gradient-primary p-8 shadow-xl md:flex">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-2xl font-extrabold text-complement1 md:text-3xl">
              E aí, bora decolar <br />
              suas entregas?
            </p>
            <p className=" p-5 text-justify md:text-center md:p-2 text-complement1 md:w-96">
              Venha fazer parte desse céu de oportunidades e inovações com a
              gente!
            </p>
            <p className="mt-0 md:mt-8 flex items-center justify-center gap-2 text-center font-bold text-terciary">
              Clique e vamos te explicar melhor
              <HiArrowDown />
            </p>
            <Button
              text="Voar junto com a Mix"
              className="rounded-lg border-terciary text-terciary"  onClick={enviarMensagemWhatsApp}
            />
          </div>
          <Floating className="flex items-center justify-center">
            <Image src={Flyer} alt="celular" className="w-60 md:w-80" />{" "}
          </Floating>
        </div>
      </div>
    </FadeIn>
  );
};

