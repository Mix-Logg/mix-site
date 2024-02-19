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
      </Wrapper>
      <Footer />
    </>
  );
}
