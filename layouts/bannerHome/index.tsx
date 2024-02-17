"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Cars from "../../assets/svg/cars.svg";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";

const Banner = () => {
  const [titulo, setTitulo] = useState("Histórias");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const opcoes = ["Conexões", "Amigos"];
      const indiceAtual = opcoes.indexOf(titulo);
      const novoIndice = (indiceAtual + 1) % opcoes.length;

      setTitulo(opcoes[novoIndice]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [titulo]);

  return (
    <FadeIn>
      <div className="items-center  justify-center gap-36 py-10 md:flex">
        <div className="flex flex-col items-start px-7 ">
          <p className="text-sm font-medium text-secondary md:text-base">
            Entregamos Soluções Logísticas Eficientes
          </p>
          <div>
            <p className="text-3xl font-extrabold  text-terciary md:text-5xl">
              Mais do que uma
            </p>
            <p className="text-3xl font-extrabold text-terciary md:text-5xl">
              Entrega fazemos
            </p>
          </div>
          <div>
            <motion.p
              key={titulo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-4xl font-extrabold  text-primary md:mt-3 md:text-5xl"
            >
              {titulo}
            </motion.p>
          </div>
        </div>
        <Image
          src={Cars}
          alt="Carros MIX"
          className="hidden md:flex"
          width={400}
          height={400}
        />
        <Image
          src={Cars}
          alt="Carros MIX"
          className="p-8 md:hidden"
          width={400}
          height={400}
        />
      </div>
    </FadeIn>
  );
};

export default Banner;
