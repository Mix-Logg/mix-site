import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import useMessageWhatsApp from "../../hooks/useMessageWhatsApp";
export default function SocialMedia({ type }: SocialMediaProps) {
    const { isMobile, enviarMensagemWhatsApp } = useMessageWhatsApp();
    let socialMediaContent;

    if (type === "footer") {
        socialMediaContent = (

            <ul className="items-start justify-start gap-2 px-1 md:flex">
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
                className="cursor-pointer rounded-full bg-terciary p-2 transition duration-300 ease-in-out hover:bg-primary"
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
         );
    } else {  
        socialMediaContent = (
            <ul className="items-start justify-start gap-2 px-1 flex ">
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
                className="cursor-pointer rounded-full bg-terciary p-2 transition duration-300 ease-in-out hover:bg-primary"
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
        );
    }

    return <>{socialMediaContent}</>;
}
