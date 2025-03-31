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
import Button from "../../components/Button";

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
            paragraph="A missão de um entregador vai além de uma simples entrega, ela  permeia o compromisso de gerar uma experiência excepcional aos clientes. Cada entrega é vista como uma oportunidade não apenas de conectar pessoas e produtos, mas também de crescimento e desenvolvimento pessoal."
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
                Junte-se à nossa comunidade, valorizamos a resiliência e
                determinação dos nossos entregadores, oferecendo suporte mútuo e
                compartilhando experiências únicas da jornada diária.
                Encontramos forças na união e celebramos a importância do
                Entregador para realização das entregas. A nossa comunidade
                busca atender além das expectativas dos nossos clientes,
                oferecendo uma verdadeira experiência transformando cada entrega
                em uma oportunidade de conexão, crescimento e realização."
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
                title="Vantagens Entregador Mix"
                subtitle="MIX Beneficios"
                className="text-white"
              />
            </div>
            <p className="w-72 text-justify text-sm font-normal text-orange-200 md:w-96 md:text-base">
              Construir uma rede de apoio sólida não apenas facilita a superação
              de desafios e a busca por soluções de problemas, mas também
              enriquece o processo ao promover o compartilhamento de recursos e
              a colaboração entre seus membros, contribui para impulsionar o
              crescimento sustentável a longo prazo, gerando relações que
              promovem o desenvolvimento dos negócios.
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
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="mx-auto items-center justify-center gap-10 md:flex">
            <div className="flex flex-col">
              <Title
                title="Nosso aplicativo"
                subtitle="Você está conosco"
                className="items-start"
              />
              <p className="w-72 text-justify text-sm font-normal text-secondary md:w-96 md:text-base">
                O Mix Entregadores é um aplicativo pensado para 
                facilitar a vida de motoqueiros, caminhoneiros e 
                entregadores em geral. Desde o seu lançamento, ele 
                tem se tornado uma ferramenta essencial para quem trabalha com 
                transporte e logística, conectando esses profissionais a oportunidades de entregas de forma prática e 
                eficiente. Desenvolvido para atender às necessidades do dia a dia, o app mantém sua essência simples e funcional, 
                ajudando entregadores a encontrar serviços, gerenciar suas rotas e receber pagamentos com agilidade, tudo isso em uma 
                plataforma moderna e confiável.
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

          <div className="flex items-center justify-center w-1/2">
            <div className="w-1/2 ">
                <Button
                  onClick={() => {
                    window.open("https://wa.me/5511978612671?text=Olá, gostaria de saber mais sobre o acesso antecipado ao aplicativo Mix Entregadores.", "_blank");
                  }}
                  text="Acesso Antecipado"
                  type="button"
                  className="w-full"
                />
            </div>
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
