"use client";
import React from "react";
import Header from "../../layouts/header";
import BannerGlobal from "../../layouts/bannerGlobal";

export default function Aboutus() {
  return (
    <>
      <Header />
      <BannerGlobal
        title="Sobre nós"
        paragraph="Mixservlog vem crescendo a cada tempo que passa, solidificando sua
          posição como uma transportadora. Esse crescimento constante destaca a
          eficiência operacional e a confiança que os clientes depositam nos
          serviços de transporte oferecidos por nós."
      />
    </>
  );
}
