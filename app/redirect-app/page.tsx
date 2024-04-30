"use client";
import Image from "next/image";
import LogoComplement from "../../assets/svg/logoComplement.svg";
import { RiHeadphoneFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function RedirectApp() {
  const router = useRouter();
  const handleVisitSite = (type: string) => {
    switch (type) {
      case "site":
        router.push("/");
        break;
      case "contact":
        router.push("https://www.mixservloghub.com/");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <head>
        <title>Situação registro | Mixservlog</title>
      </head>
      <div className="items-center justify-center bg-secondary">
        <div className="px-4 py-6">
          <Image
            src={LogoComplement}
            alt="logo"
            className="mx-auto mb-6"
            width={40}
            height={40}
          />
          <div className="flex flex-col items-center justify-center px-5">
            <h1 className="text-center text-4xl font-extrabold text-complement1">
              Somos Mixservlog!
            </h1>
            <p className="mt-4 text-justify text-sm font-medium text-complement1">
              Estamos análisando os seus dados logo, logo
              <span className="m-1 rounded-md bg-complement1 px-2 py-1 font-semibold text-secondary">
                entre 24h
              </span>
              vamos liberar seu acesso!
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-2 rounded-t-xl bg-complement1">
        <div className="px-4 py-6">
          <p className="text-center text-2xl font-bold text-primary">
            Enquanto isso
          </p>
        </div>
        <div className="flex flex-col gap-3 px-8 ">
          <button
            className="flex w-full items-center justify-center gap-2 rounded-t-lg bg-orange-600 py-2 font-semibold text-complement1"
            onClick={() => handleVisitSite("site")}
          >
            <Image
              src={LogoComplement}
              alt="logo"
              className=""
              width={24}
              height={24}
            />
            <p className="w-32 text-left">Visite nosso site</p>
          </button>
          <button
            className="flex w-full items-center justify-center gap-2 rounded-b-lg bg-orange-500 py-2 font-semibold text-complement1"
            onClick={() => handleVisitSite("contact")}
          >
            <RiHeadphoneFill className="text-lg text-complement1" />
            <p className="w-32 text-left">Entre em Contato</p>
          </button>
        </div>
      </div>
    </>
  );
}
