"use client";
import { useState } from "react";
import Image from "next/image";
import  BrandSvg from "../../assets/svg/logo.svg";
import Button from "../../components/button/index";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import { FadeIn, FadeInStagger } from "../../components/animations/fadeIn";
import Floating from "../../components/animations/floating";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="relative flex items-center justify-between gap-x-10 px-5 py-2 md:px-40">
        <div className="hidden md:flex">
          <Link href={`/`}>
            <Image
              src={BrandSvg}
              alt="Logo Mixservlog"
              width={70}
              height={30}
              className="transition duration-300 ease-in-out hover:opacity-80"
            />
          </Link>
        </div>
        <nav className="flex items-center text-sm font-bold">
          <ul className="hidden items-center justify-center gap-x-5 md:flex">
            <li className="w-28">
              <Link
                className="text-base font-medium text-terciary transition duration-300 ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-primary"
                href="/about-us"
              >
                Sobre nós
              </Link>
            </li>
            <li className="w-28">
              <Link
                className="text-base font-medium text-terciary transition duration-300 ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-primary"
                href="/entregadores"
              >
                Entregadores
              </Link>
            </li>
            <li className="w-28">
              <Link
                className="text-base font-medium text-terciary transition duration-300 ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-primary"
                href="/servicos"
              >
                Serviços
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-56 md:hidden">
            <Link href={`/`}>
              <Image
                src={BrandSvg}
                alt="Logo Mixservlog"
                width={50}
                height={20}
              />
            </Link>
            {!isMenuOpen && (
              <Floating
                className={"absolute right-0 mr-6 cursor-pointer text-terciary"}
                onClick={toggleMenu}
              >
                <HiBars3BottomRight className="h-6 w-6" />
              </Floating>
            )}
          </div>

          {isMenuOpen && (
            <motion.div
              className="fixed left-0 top-0 z-20 h-full w-full bg-black bg-opacity-95"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex w-full justify-end p-10">
                <Floating
                  className={
                    "absolute right-0 mr-6 cursor-pointer text-primary"
                  }
                  onClick={toggleMenu}
                >
                  <HiMiniXMark className="h-8 w-8" />
                </Floating>
              </div>

              <div className="flex flex-col items-center p-4 text-left">
                <FadeIn className="flex flex-col">
                  <Link
                    className="h-12 justify-center text-3xl font-bold text-complement1 "
                    href="/about-us"
                  >
                    Sobre nós
                  </Link>

                  <Link
                    className="h-12  justify-center text-3xl font-bold text-complement1 "
                    href="/entregas"
                  >
                    Entregadores
                  </Link>

                  <Link
                    className="h-12  justify-center text-3xl font-bold text-complement1 "
                    href="/serviços"
                  >
                    Serviços
                  </Link>

                  <Link
                    className="h-12  justify-center text-3xl font-bold text-complement1 "
                    href="/contact"
                  >
                    Contato
                  </Link>
                  
                </FadeIn>
              </div>
            </motion.div>
          )}
        </nav>
        <Button
          text="Contato"
          borderColorHover="primary"
          style="md:flex hidden rounded-full"
          type="submit"
          href="/contact"
        />
      </header>
    </>
  );
}
