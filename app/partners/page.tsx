"use client";
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footer";
import Image from "next/image";
import Title from "../../components/Title";
import Partners2 from "../../assets/svg/pessoasPart.svg";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";
import Header from "../../layouts/header";
import BannerGlobal from "../../layouts/bannerGlobal";
import Benefits from "../../components/Benefits";
import cellPhone from "../../assets/svg/cellphone.svg";
import Ocean from "../../components/Ocean";
import ContactMix from "../../layouts/contactMix";
import { IoIosPeople } from "react-icons/io";
import WhyChooseUs from "../../components/WhyChooseUs";

export default function Partners() {
  return (
    <>
      <head>
        <title>Parceiros | Mixservlog</title>
      </head>
      <Header />
      <Wrapper>
        <FadeIn>
          <BannerGlobal
            title="Parceiros"
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
            id="parceiros-community"
            className="gap-40 rounded-xl p-4 md:flex md:p-20"
          >
            <div>
              <Title
                title="Comunidade de parceiros"
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
              src={Partners2}
              alt="Parceiros"
              className=""
              width={500}
              height={500}
            />
          </section>
        </FadeIn>
        <Title
          title="Vantagens Parceiro Mix"
          subtitle="MIX Beneficios"
          className="items-center"
        />
        <div className="items-center justify-center overflow-y-hidden overflow-x-scroll  md:flex  md:overflow-hidden">
            <div className="flex gap-3 md:gap-6">
              <WhyChooseUs
                title="Vitrine de clientes"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry industry."
              />
              <WhyChooseUs
                title="Oportunidade de negócio"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry industry."
              />
              <WhyChooseUs
                title="Vendas"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry industry."
              />
               <WhyChooseUs
                title="Serviços"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry industry."
              />
               <WhyChooseUs
                title="Produtos"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry industry."
              />
            </div>
          </div>
      </Wrapper>
      <ContactMix
        title="E aí, bora decolar com a nossa parceria?"
        subtitle="Venha fazer parte desse céu de oportunidades e inovações com a
              gente!"
      />

      <Footer />
    </>
  );
}
