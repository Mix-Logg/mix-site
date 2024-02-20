"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BrandSvg from "../../assets/svg/logoPrimary.svg";
import Button from "../../components/Button/index";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";
import Floating from "../../components/Animations/Floating";
import ProgressBar from "../../components/ProgressBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolled = scrollTop > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`${
          isScrolled
            ? "fixed top-0 z-50 flex w-full items-center justify-between bg-complement1 px-5 py-2 shadow-xl transition-all duration-300 md:px-40"
            : "relative flex items-center justify-between px-5 py-2 md:px-40"
        } ${isMenuOpen ? "h-screen overflow-hidden" : "flex items-center "}`}
      >
        <ProgressBar/>
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
                    href="/empresas"
                  >
                    Empresas
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
          className="md:flex hidden "
          type="submit"
          href="/contact"
        />
      </header>
    </>
  );
}
