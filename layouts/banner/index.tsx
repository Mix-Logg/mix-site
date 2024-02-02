import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Cars from "../../assets/svg/cars.svg";

const Banner = () => {
  const [titulo, setTitulo] = useState("História");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const opcoes = ["Histórias", "Conexões", "Amigos"];
      const indiceAtual = opcoes.indexOf(titulo);
      const novoIndice = (indiceAtual + 1) % opcoes.length;

      setTitulo(opcoes[novoIndice]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [titulo]);

  return (
    <div className="md:flex items-center justify-center gap-36 py-10">
      <div className="flex flex-col px-7 items-start ">
        <p className="md:text-base text-sm font-medium text-secondary">
          Entregamos Soluções Logísticas Eficientes
        </p>
        <div>
          <p className="md:text-5xl text-3xl  font-extrabold text-terciary">
            Mais do que uma
          </p>
          <p className="md:text-5xl text-3xl font-extrabold text-terciary">
            Entrega fazemos
          </p>
        </div>
        <div>
          <motion.p
            key={titulo} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:mt-3 md:text-5xl mt-2  text-4xl font-extrabold text-primary"
          >
            {titulo}
          </motion.p>
        </div>
      </div>
      <Image src={Cars} alt="Carros MIX" className="hidden md:flex" width={400} height={400}/>
      <Image src={Cars} alt="Carros MIX" className="md:hidden p-8" width={400} height={400}/>
    </div>
  );
};

export default Banner;
