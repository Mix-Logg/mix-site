import { useState } from "react";
import Image from "next/image";
import BrandSvg from "../../assets/svg/logo.svg";
import Button from "../../components/button/index";
import Link from "next/link";
import Banner from "../banner";
import { motion } from "framer-motion";
import { HiBars3BottomRight } from "react-icons/hi2";

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

<motion.div
      className="absolute right-0 mr-6  cursor-pointer text-secondary"
      whileHover={{ scale: 1.1 }} // Aumenta a escala quando o mouse passa por cima
      animate={{
        y: [0, -2, 0], // Animação de vaivém no eixo Y
      }}
      transition={{ repeat: Infinity, duration: 1.5 }} // Repete a animação constantemente
      onClick={toggleMenu}
    >
      <HiBars3BottomRight className="h-6 w-6"/>
    </motion.div>
          </div>
          {isMenuOpen && (
            <div
              className="fixed left-0 top-0  z-20 h-full w-full bg-black bg-opacity-50"
              onClick={closeMenu}
            >
              <div className="absolute right-0 top-0 z-30 h-full w-1/2 rounded-s-xl bg-white shadow-md">
                <button
                  className="absolute -left-6 top-4 rounded-full bg-secondary p-4 px-3"
                  onClick={toggleMenu}
                >
                  {/* <Image src={Arrow} alt="flecha" width={20} height={20} /> */}
                </button>
                <ul className="mt-14 flex flex-col items-start p-4">
                  <li className="mb-2">
                    <Link href="#encontrar-musica">Encontrar Música</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#como-funciona">Como Funciona</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#quem-somos">Quem Somos</Link>
                  </li>
                </ul>
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
