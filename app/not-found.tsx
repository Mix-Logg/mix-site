import Link from "next/link";
import Header from "../layouts/header";
import Image from "next/image";
import Truck from "../assets/image/truck.gif";
import { FadeIn, FadeInStagger } from "../components/animations/fadeIn";

export const metadata = {
  title: "Mixservlog | Not-found",
  description: "",
  openGraph: {
    title: "Mixservlog | Not-found",
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

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <FadeIn>


      <div className="flex mt-40 flex-col items-center justify-center">
        <Image
          src={Truck}
          alt="truck"
          width={150}
          height={100}
          className="transition duration-300 ease-in-out hover:opacity-80"
        />
        <h1 className="mb-4 text-6xl font-extrabold text-primary">404 </h1>
        <p className="mb-8 text-4xl font-extrabol text-secondary">
        Em breve esta página estará disponível!
        </p>
        <Link href="/">
          <p className="text-primary hover:underline">
            Voltar para a página inicial
          </p>
        </Link>
      </div>
      </FadeIn>
    </>
  );
};

export default NotFoundPage;
