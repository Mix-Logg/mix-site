import React from "react";
import Header from "../../layouts/header";
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footer";
import Image from "next/image";
import World from "../../assets/svg/world.svg";
import Title from "../../components/Title";
import Input from "../../components/Input";

export default function Company() {
  return (
    <>
      <Header />
      <Wrapper>
        <Image
          src={World}
          alt={"Mundo"}
          className="mx-auto h-1/2 w-1/2 opacity-20"
        />
        
        <div className="absolute flex flex-col gap-2">
        <Title title="Cadastre a sua empresa" subtitle="" className=""/>
          <label>Nome completo</label>
          <div className="mr-20">

          <Input placeholder="Alberto Silva" />
          </div>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            className="flex rounded-lg border border-secondary w-56 bg-complement1 text-terciary hover:border-primary focus:border-primary focus:border-opacity-50 focus:outline-none focus:ring focus:ring-primary "
          />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
