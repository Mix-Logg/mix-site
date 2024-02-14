// pages/contact.tsx
"use client";
import React, { useState } from "react";
import Header from "../../layouts/header";
import Button from "../../components/button";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  const [nome, setNome] = useState("");

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const enviarMensagemWhatsApp = () => {
    const numeroWhatsApp = "5511978612671";
    const mensagem = `Olá, meu nome é ${nome} gostaria de saber mais sobre a Mix!`;

    const linkWhatsAppWeb = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
      mensagem
    )}`;

    window.location.href = linkWhatsAppWeb;
  };

  return (
    <>
      <Header />

      <div className="item-center mt-10 flex flex-col gap-8">
        <div className="mb-2 flex flex-col items-center justify-center">
          <h1 className=" text-3xl font-extrabold text-primary md:text-4xl">
            Entre em Contato
          </h1>
          <p className="text-base font-light text-secondary">
            Venha saber mais sobre nós!
          </p>
        </div>

        <div className=" items-center justify-center gap-2 md:flex md:">
          <div className="flex flex-col items-start gap-3 p-3 text-lg font-normal text-terciary">
            <div className="inline-flex rounded-xl bg-primary p-2">
              <HiOutlineMail className="h-6 w-6 text-complement1" />
            </div>
            <p className="w-52">mixlogg2023@gmail.com</p>
          </div>
          <div className="flex flex-col items-start gap-3 p-3 text-lg font-normal text-terciary">
            <div className=" inline-flex rounded-xl bg-primary p-2">
              <BsWhatsapp className="h-6 w-6 text-complement1" />
            </div>
            <p className="w-52">(11) 97861-2671</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <p className="mb-4 text-center font-light text-secondary">
            Você pode enviar uma mensagem <br /> sem muito esforço!
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={handleNomeChange}
              placeholder="Digite seu nome"
              className="flex rounded-lg border border-secondary bg-complement1 text-terciary hover:border-primary focus:border-primary focus:border-opacity-50 focus:outline-none focus:ring focus:ring-primary focus:ring-offset-2"
            />
            <Button
              text="Enviar"
              style="rounded-lg"
              borderColorHover="primary"
              onClick={enviarMensagemWhatsApp}
            />
          </div>
        </div>
      </div>
    </>
  );
}
