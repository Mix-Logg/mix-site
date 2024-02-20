"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandSvg from "../../assets/svg/logoSecondary.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
  const [nome, setNome] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = /Mobi/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const enviarMensagemWhatsApp = () => {
    const numeroWhatsApp = "5511978612671";
    const mensagem = `Olá, gostaria de saber mais sobre a Mix!`;

    let linkWhatsApp;

    if (isMobile) {
      linkWhatsApp = `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
        mensagem
      )}`;
    } else {
      linkWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
        mensagem
      )}`;
    }

    window.location.href = linkWhatsApp;
  };
  return (
    <>
      <div className="mt-10 flex items-center justify-center  md:p-3 ">
        <Link href={`/`}>
          <Image
            src={BrandSvg}
            alt="Logo Mixservlog"
            className="mr-4 hidden h-20 transition duration-300 ease-in-out hover:opacity-80 md:flex"
          />
        </Link>
        <div className="gap-2  md:flex">
          <div className="  flex md:flex">
            <div className="p-4">
              <p className="mb-3 w-32 text-center font-semibold text-terciary">
                Políticas
              </p>
              <ul className="flex flex-col items-center justify-center gap-2">
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
              </ul>
            </div>
            <div className="p-4">
              <p className="mb-3 w-32 text-center font-semibold text-terciary">
                Comunidade
              </p>
              <ul className="flex flex-col items-center justify-center gap-2">
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex">
            <div className="p-4">
              <p className="mb-3 w-32 text-center font-semibold text-terciary">
                Company
              </p>
              <ul className="flex flex-col items-center justify-center gap-2">
                <Link
                  href={`/about-us`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Sobre nós
                </Link>
                <Link
                  href={`/about-us#cultura-mix`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Cultura Mix
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className=" text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
              </ul>
            </div>
            <div className="p-4">
              <p className="mb-3 w-32 text-left font-semibold text-terciary">
                Redes sociais
              </p>
              <ul className="items-start  justify-start gap-2 px-1 md:flex">
                <div className="mb-2 flex gap-2">
                  <Link
                    href="/"
                    className="rounded-full  bg-terciary p-2 transition duration-300 ease-in-out hover:bg-primary"
                  >
                    <FaFacebookF className="h-5 w-5  text-complement1 md:h-6 md:w-6" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/mixservlog/"
                    className="rounded-full bg-terciary p-2 transition duration-300 ease-in-out hover:bg-primary"
                  >
                    <FaInstagram className="h-5 w-5 text-complement1 md:h-6 md:w-6" />
                  </Link>
                </div>
                <div className="flex gap-2">
                  <p
                    onClick={enviarMensagemWhatsApp}
                    className="rounded-full bg-terciary p-2 transition duration-300 ease-in-out cursor-pointer hover:bg-primary"
                  >
                    <FaWhatsapp className="h-5 w-5 text-complement1 md:h-6 md:w-6" />
                  </p>
                  <Link
                    href="/"
                    className="rounded-full bg-terciary p-2 transition duration-300 ease-in-out hover:bg-primary"
                  >
                    <FaLinkedinIn className="h-5 w-5 text-complement1 md:h-6 md:w-6" />
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-primary p-2 text-xs font-normal text-complement1 md:text-sm">
        © 2024 Mixservlog. Todos os direitos reservados.
      </div>
    </>
  );
}
