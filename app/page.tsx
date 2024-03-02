import { Metadata } from "next";
import Faq from "../components/Faq";
import Title from "../components/Title";
import WhyChooseUs from "../components/WhyChooseUs";
import Banner from "../layouts/bannerHome";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Wrapper from "../layouts/wrapper";

export const metadata: Metadata = {
  title: 'Home | Mixservlog',
  description: 'This page is home page mixservlog',
}

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="h-screen">
          <Banner />
        </div>
        <div className="-mt-40">
          <Title
            title="Por que nos escolher?"
            subtitle="O futuro das entregas"
          />
          <div className="items-center justify-center overflow-y-hidden overflow-x-scroll  md:flex  md:overflow-hidden">
            <div className="flex gap-3 md:gap-6">
              <WhyChooseUs
                title="Cabe no seu bolso"
                paragraph="Garantimos um serviço de qualidade que se adequa ao seu bolso."
              />
              <WhyChooseUs
                title="Entregas Rápidas"
                paragraph="Priorizamos sua encomenda, garantindo rapidez sem comprometer a segurança."
              />
              <WhyChooseUs
                title="Cuidado Personalizado"
                paragraph="Atendimento dedicado e personalizado para atender às suas necessidades específicas."
              />
            </div>
          </div>
        </div>
      </Wrapper>  
      <Footer />
    </>
  );
}
