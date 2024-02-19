import React from "react";
import Header from "../../layouts/header";
import BannerGlobal from "../../layouts/bannerGlobal";
import Wrapper from "../../layouts/wrapper";
import Topics from "../../components/Topics";
import Footer from "../../layouts/footer";
import Image from "next/image";
import Nos from "../../assets/svg/nos.svg";
import Title from "../../components/Title";

export default function Aboutus() {
  return (
    <>
      <Header />
      <Wrapper>
        <BannerGlobal
          title="Sobre nós"
          paragraph="a MIX Serviços Logísticos posiciona-se como uma força impulsionadora na transformação positiva do setor logístico brasileiro. Sua visão de criar uma comunidade de parceiros interligados destaca o comprometimento da empresa em promover uma logística eficiente, inteligente e orientada para o futuro."
        />
        <div className="items-center justify-center gap-14 px-2 py-8 md:flex">
          <p className="text-sm font-normal text-secondary md:w-1/3 md:text-base">
            A <span className="font-bold">MIX Serviços Logísticos</span> é uma
            empresa brasileira dedicada a estabelecer uma sólida rede de
            parcerias por meio da interação, desenvolvimento e fortalecimento
            contínuo. Sua abordagem inovadora visa promover a indicação e a
            troca de serviços de forma sustentável por meio de uma plataforma
            especializada.
            <br />
            <br />
            Com um compromisso claro com a excelência, buscamos criar sinergias
            entre seus parceiros, incentivando uma colaboração mutuamente
            benéfica. A ênfase na sustentabilidade não apenas reflete a
            responsabilidade ambiental da empresa, mas também destaca seu
            comprometimento em construir relacionamentos duradouros e positivos
            no mercado logístico.
          </p>

          <Image
            src={Nos}
            alt="Equipe Mixservlog"
            className="mx-auto mt-4 w-72 md:mx-0 md:mt-0 md:w-2/5"
          />
        </div>
        <Title title="Cultura Mix" subtitle="Estamos com você" />
        <div className="justify-center gap-20 md:flex">
          <Topics
            title="Conexão"
            paragraph="Cultivar uma boa relação é essencial para prosperidade, buscamos desenvolver uma Conexão de confiança através de atitudes éticas, ações de servir, fazer organizado e entregar com qualidade. "
          />
          <Topics
            title="Efetividade"
            paragraph="Buscamos sempre obter os melhores índices de Efetividade operacional, objetivos primordiais para otimizar os resultados de forma a atender o nível de serviço estabelecido, garantindo a satisfação dos nossos clientes. "
          />
          <Topics
            title="Inovação"
            paragraph="Acreditamos que a Inovação é o caminho para melhoria continua dos  nossos processos e soluções de problemas, pilares fundamentais para o crescimento, desenvolvimento e fortalecimento dos nossos serviços de entregas. "
          />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
