"use client";
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footer";
import Image from "next/image";
import Title from "../../components/Title";
import Delivery2 from "../../assets/svg/delivery.svg";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";
import Header from "../../layouts/header";
import BannerGlobal from "../../layouts/bannerGlobal";
import Benefits from "../../components/Benefits";
import cellPhone from "../../assets/svg/cellphone.svg";
import Ocean from "../../components/Ocean";
import ContactMix from "../../layouts/contactMix";

export default function Delivery() {
  return (
    <>
      <head>
        <title>Entregadores | Mixservlog</title>
      </head>
      <Header />
      <Wrapper>
        <FadeIn>
          <BannerGlobal
            title="Entregadores"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged."
          />
        </FadeIn>
        <FadeIn>
          <section
            id="delivery-community"
            className="gap-40 rounded-xl p-4 md:flex md:p-20"
          >
            <div id="delivery-community">
              <Title
                title="Comunidade de entregadores"
                subtitle="Como fazer parte da nossa "
                className="items-start"
              />
              <p className="text-justify text-sm font-normal text-secondary  md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <Image
              src={Delivery2}
              alt="Entregadores"
              className=""
              width={500}
              height={500}
            />
          </section>
        </FadeIn>
        <div className="items-center justify-center gap-10 rounded-xl bg-primary p-4 md:flex md:flex-row-reverse md:p-10">
          <div className="inline-flex flex-col">
            <div className="">
              <Title
                title="Vantagens Mix"
                subtitle="MIX Beneficios"
                className="text-white"
              />
            </div>
            <p className="w-72 text-justify text-sm font-normal text-orange-200 md:w-96 md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <FadeIn>
            <div className="mt-10 inline-flex flex-col gap-4 md:mt-0">
              <div className="flex gap-4">
                <Benefits type="Abastecimento" />
                <Benefits type="Troca de Óleo" />
              </div>
              <div className="flex gap-4">
                <Benefits type="Compra de peças" />
                <Benefits type="Seguro de veículo" />
              </div>
              <div className="flex gap-4">
                <Benefits type="Seguro de vida" />
                <Benefits type="Guincho" />
              </div>
              <div className="flex gap-4">
                <Benefits type="Cooperativa de crédito" />
                <Benefits type="Atendimento" />
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="mx-auto items-center justify-center gap-10 md:flex">
          <div className="flex flex-col">
            <Title
              title="Nosso aplicativo"
              subtitle="Você está conosco"
              className="items-start"
            />
            <p className="w-72 text-justify text-sm font-normal text-secondary md:w-96 md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={cellPhone}
              alt="celular"
              className="mt-10 w-60 md:w-1/2"
            />
          </div>
        </div>
      </Wrapper>
      <ContactMix
        title="E aí, bora decolar 
              suas entregas?"
        subtitle="Venha fazer parte desse céu de oportunidades e inovações com a
              gente!"
      />

      <Footer />
    </>
  );
}
