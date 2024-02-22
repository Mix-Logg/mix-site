import Faq from "../components/Faq";
import Title from "../components/Title";
import WhyChooseUs from "../components/WhyChooseUs";
import Banner from "../layouts/bannerHome";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Wrapper from "../layouts/wrapper";

export const metadata = {
  title: "Mixservlog",
  description: "",
  openGraph: {
    title: "Mixservlog",
    description: "",
    url: "",
    siteName: "",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "banner full desktop",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

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
                paragraph="Sua encomenda é nossa prioridade! Valorizamos o seu tempo tanto quanto você. "
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
