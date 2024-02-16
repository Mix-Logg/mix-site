import Link from "next/link";
import Header from "../layouts/header";
import Image from "next/image";
import Truck from "../assets/videos/truck.gif";
import { FadeIn, FadeInStagger } from "../components/animations/fadeIn";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Not Found | Mixservlog',
  description: 'This page is about 404 error not found page',
}

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <FadeIn>
        <div className="mt-40 flex flex-col items-center justify-center">
          <Image
            src={Truck}
            alt="truck"
            width={100}
            height={120}
            className="transition duration-300 ease-in-out hover:opacity-80 md:hidden"
          />
          <Image
            src={Truck}
            alt="truck"
            width={150}
            height={100}
            className="hidden transition duration-300 ease-in-out hover:opacity-80 md:flex"
          />
          <h1 className="mb-4 text-4xl font-extrabold text-primary md:text-6xl">
            404{" "}
          </h1>
          <p className="font-extrabol mb-8 text-lg text-secondary md:text-4xl">
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
