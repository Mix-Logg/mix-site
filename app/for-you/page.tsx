"use client";
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import { FadeIn } from "../../components/Animations/FadeIn";
import BannerGlobal from "../../layouts/bannerGlobal";
import Title from "../../components/Title";
import Image from "next/image";
import People from "../../assets/svg/foryou.svg";

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
          paragraph="Sint esse dolore Lorem aliqua velit exercitation cupidatat sint mollit labore velit aliquip excepteur sit. Dolor velit do fugiat voluptate fugiat aliqua nostrud. Labore magna ex ad esse ullamco dolore in dolor pariatur in occaecat ipsum.
Nisi elit laboris laborum nulla sit ipsum nulla ut ea adipisicing id exercitation. Dolor anim dolor reprehenderit minim."
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
          <p className="text-justify text-sm font-normal text-secondary  md:text-base">
            Sint esse dolore Lorem aliqua velit exercitation cupidatat sint
            mollit labore velit aliquip excepteur sit. Dolor velit do fugiat
            voluptate fugiat aliqua nostrud. Labore magna ex ad esse ullamco
            dolore in dolor pariatur in occaecat ipsum. Nisi elit laboris
            laborum nulla sit ipsum nulla ut ea adipisicing id exercitation.
            Dolor anim dolor reprehenderit minim.Nisi elit laboris laborum nulla
            sit ipsum nulla ut ea adipisicing id exercitation. Dolor anim dolor
            reprehenderit minim.
          </p>
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
