import { useState } from "react";
import Image from "next/image";
import BrandSvg from "../../assets/svg/logo.svg";
import Button from "../../components/button/index";
import Link from "next/link";
import Banner from "../banner";
import { motion } from "framer-motion";
import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";

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
              <motion.div
                className="absolute right-0 mr-6 cursor-pointer text-secondary"
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                onClick={toggleMenu}
              >
                <HiBars3BottomRight className="h-6 w-6" />
              </motion.div>
            )}
          </div>

          {isMenuOpen && (
            <div
              className="fixed left-0 top-0  z-20 h-full w-full bg-black bg-opacity-90"
              
            >
              <div className="p-10 flex justify-end w-full">
                <button
                className="flex text-primary"
                onClick={toggleMenu}
              >
                <HiMiniXMark className="w-8 h-8"/>
              </button>

              </div>
              
              <div className="flex flex-col items-center text-left p-4">
                  <Link
                    className="text-xl font-medium text-complement1 "
                    href="/sobre-nos"
                  >
                    Sobre nós
                  </Link>
               
                  <Link
                    className="text-xl font-medium text-complement1 "
                    href="/processos"
                  >
                    Entregadores
                  </Link>
               
                  <Link
                    className="text-xl font-medium text-complement1 "
                    href="/portifolios"
                  >
                    Produtos
                  </Link>
                
              </div>
            </div>
          )}
        </nav>
        <Button text={"Contato"} borderColorHover={"primary md:flex hidden"} />
      </header>
      <Banner />
    </>
  );
}
