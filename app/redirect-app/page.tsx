"use client";
import Image from "next/image";
import LogoComplement from "../../assets/svg/logoComplement.svg";
export default function RedirectApp() {
  return (
    <>
      <head>
        <title>Situação registro | Mixservlog</title>
      </head>
      <div className="items-center justify-center bg-primary">
        <div className="px-4 py-6">
          <Image
            src={LogoComplement}
            alt="logo"
            className="mb-6 mx-auto"
            width={40}
            height={40}
          />
          <div className="flex flex-col items-center justify-center px-5">
            <h1 className="text-4xl font-extrabold text-complement1 text-center">
              Somos Mixservlog!
            </h1>
            <p className="mt-4 text-sm font-medium text-complement1 text-justify">
              Estamos análisando os seus dados logo, logo
              <span className="rounded-md bg-complement1 px-2 py-1 m-1 font-semibold text-primary">
                entre 24h
              </span>
              vamos liberar seu acesso!
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-2 rounded-t-xl bg-complement1">
        <div className="px-4 py-6">
          <p className="text-primary font-bold text-2xl text-center">Enquanto isso</p>
        </div>
      </div>
    </>
  );
}
