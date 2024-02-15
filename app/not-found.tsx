import Link from "next/link";
import Header from "../layouts/header";
import Image from "next/image";
import Truck from "../assets/image/truck.gif";
import { FadeIn, FadeInStagger } from "../components/animations/fadeIn";

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
