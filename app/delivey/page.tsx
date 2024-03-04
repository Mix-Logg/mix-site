"use client";
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footer";
import Image from "next/image";
import Title from "../../components/Title";
import Delivery2 from "../../assets/svg/delivery.svg";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";
import Header from "../../layouts/header";
import BannerGlobal from "../../layouts/bannerGlobal";
import Benefits from "../../components/Benefits/indesx";

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
          <div className="gap-40 rounded-xl p-4 md:flex md:p-20">
            <div>
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
              alt="Carros MIX"
              className=""
              width={500}
              height={500}
            />
          </div>
        </FadeIn>
        <div className="justify-center gap-10 rounded-xl bg-primary p-4 md:flex md:flex-row-reverse md:p-10">
          <div className="inline-flex flex-col">
            <div className="inline-flex">
              <Title
                title="Vantagens de ser Mix"
                subtitle="MIX Beneficios"
                className="items-start text-orange-100"
              />
            </div>
            <p className="w-96 text-justify text-sm font-normal text-complement1 md:text-base">
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
          <div className="inline-flex flex-col gap-4">
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
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
