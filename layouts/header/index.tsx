import { useState } from "react";
import Image from "next/image";
import BrandSvg from "../../assets/svg/logo.svg";
import Button from "../../components/button/index";
import Link from "next/link";
import Banner from "../banner";
import { motion } from "framer-motion";
import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import { FadeIn, FadeInStagger } from "../../components/animations/fadeIn";
import Floating from "../../components/animations/floating";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header className="relative flex items-center justify-between gap-x-10 px-5 py-2 md:px-40">
        <div className="hidden md:flex">
          <Image src={BrandSvg} alt="Logo life sound" width={70} height={30} />
        </div>
        <nav className="flex items-center text-sm font-bold">
          <ul className="hidden items-center justify-center gap-x-5 md:flex">
            <li className="w-28">
              <Link
                className="text-base font-medium text-terciary transition duration-300 ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-primary"
                href="/sobre-nos"
              >
                Sobre nós
              </Link>
            </li>
            <li className="w-28">
              <Link
                className="text-base font-medium text-terciary transition duration-300 ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-primary"
                href="/processos"
              >
                Entregadores
              </Link>
            </li>
            <li className="w-28">
              <Link
                className="text-base font-medium text-terciary transition duration-300 ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-primary"
                href="/portifolios"
              >
                Produtos
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-56 md:hidden">
            <Image
              src={BrandSvg}
              alt="Logo life sound"
              width={50}
              height={20}
            />
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
              className="fixed left-0 top-0 z-20 h-full w-full bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="fixed left-0 top-0  z-20 h-full w-full bg-black bg-opacity-30">
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
                      className="h-12 justify-center text-2xl font-semibold text-complement1 "
                      href="/sobre-nos"
                    >
                      Sobre nós
                    </Link>

                    <Link
                      className="h-12  justify-center text-2xl font-semibold text-complement1 "
                      href="/processos"
                    >
                      Entregadores
                    </Link>

                    <Link
                      className="h-12  justify-center text-2xl font-semibold text-complement1 "
                      href="/portifolios"
                    >
                      Produtos
                    </Link>
                  </FadeIn>
                </div>
              </div>
            </motion.div>
          )}
        </nav>
        <Button text={"Contato"} borderColorHover={"primary md:flex hidden"} />
      </header>
      <Banner />
    </>
  );
}
