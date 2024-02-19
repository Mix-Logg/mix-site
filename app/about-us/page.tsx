import React from "react";
import Header from "../../layouts/header";
import BannerGlobal from "../../layouts/bannerGlobal";
import Wrapper from "../../layouts/wrapper";
import Topics from "../../components/Topics";
import Head from "next/head";
import Footer from "../../layouts/footer";

export default function Aboutus() {
  return (
    <>
      <Head>
        <title>Sobre nós | Mixservlog</title>
        <meta name="description" content="This page is about our company" />
      </Head>
      <Header />
      <Wrapper>
        <BannerGlobal
          title="Sobre nós"
          paragraph="Mixservlog vem crescendo a cada tempo que passa, solidificando sua
          posição como uma transportadora. Esse crescimento constante destaca a
          eficiência operacional e a confiança que os clientes depositam nos
          serviços de transporte oferecidos por nós."
        />
        <div className="justify-center gap-20 md:flex">
          <Topics
            title="Missão"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Topics
            title="Visão"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Topics
            title="Valores"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </Wrapper>
      <Footer/>
    </>
  );
}
