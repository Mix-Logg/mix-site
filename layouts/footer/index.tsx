"use client";
import React from "react";
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
  return (
    <>
      <div className="flex p-3 justify-center items-center">
        <Image src={BrandSvg} alt="Logo Mixservlog" className="h-20" />

        <div className="flex gap-2">
          <div className="p-4">
            <p className="mb-3 w-32 text-center font-semibold text-terciary">Políticas</p>
            <ul className="flex flex-col items-center justify-center gap-2">
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
            </ul>
          </div>
          <div className="p-4">
            <p className="mb-3 w-32 text-center font-semibold text-terciary">Comunidade</p>
            <ul className="flex flex-col items-center justify-center gap-2">
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
            </ul>
          </div>
          <div className="p-4">
            <p className="mb-3 w-32 text-center font-semibold text-terciary">Company</p>
            <ul className="flex flex-col items-center justify-center gap-2">
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
              <li className="w-20 text-center font-normal text-secondary">
                Label
              </li>
            </ul>
          </div>
          <div className="p-4">
            <p className="mb-3 w-32 text-left font-semibold text-terciary">Redes sociais</p>
            <ul className="flex  items-start justify-start gap-2 px-1">
              <Link href="/" className="bg-terciary hover:bg-primary transition duration-300 ease-in-out p-2 rounded-full">
                <FaFacebookF className="h-6 w-6 text-complement1" />
              </Link>
              <Link href="/" className="bg-terciary hover:bg-primary transition duration-300 ease-in-out p-2 rounded-full">
                <FaInstagram className="h-6 w-6  text-complement1" />
              </Link>
              <Link href="/" className="bg-terciary hover:bg-primary transition duration-300 ease-in-out p-2 rounded-full">
                <FaWhatsapp className="h-6 w-6  text-complement1" />
              </Link>
              <Link href="/" className="bg-terciary hover:bg-primary transition duration-300 ease-in-out p-2 rounded-full">
                <FaLinkedinIn className="h-6 w-6  text-complement1" />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-primary p-2 text-sm font-normal text-complement1">
        © 2024 Mixservlog. Todos os direitos reservados.
      </div>
    </>
  );
}
