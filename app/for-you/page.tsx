"use client";
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import { FadeIn } from "../../components/Animations/FadeIn";
import BannerGlobal from "../../layouts/bannerGlobal";
import Title from "../../components/Title";
import Image from "next/image";
import People from "../../assets/svg/foryou.svg";
import InfoApp from "../../components/infoApp";
export default function ForYou() {
  return (
    <>
      <head>
        <title>Para você | Mixservlog</title>
      </head>
      <Header />
      <Wrapper>
        <BannerGlobal
          title="Para Você"
          paragraph="Oferecemos um serviço de entregas com segurança e integridade da carga, monitoramento em tempo real, opções de pagamento flexíveis e acessíveis. Soluções que visam fortalecer o nosso compromisso em desenvolver uma conexão de confiança."
        />
      </Wrapper>

      <section
        id=""
        className="gap-40 rounded-xl p-4 md:flex md:p-14"
      >
        <div id="">
          <Title
            title="Comunidade de Usuários"
            subtitle="Como fazer parte da nossa "
            className="items-start"
          />
          <InfoApp/>
        </div>
        <Image
          src={People}
          alt="Para você"
          className=""
          width={500}
          height={500}
        />
      </section>

      <Footer />
    </>
  );
}
