"use client";
import Image from "next/image";
import Link from "next/link";
import BrandSvg from "../../assets/svg/logoSecondary.svg";
import SocialMedia from "../../components/SocialMedia";
export default function Footer() {
  return (
    <>
      <div className="mt-10 flex items-center justify-center  md:p-3 ">
        <Link href={`/`}>
          <Image
            src={BrandSvg}
            alt="Logo Mixservlog"
            className="mr-4 hidden h-20 transition duration-300 ease-in-out hover:opacity-80 md:flex"
          />
        </Link>
        <div className="gap-2  md:flex">
          <div className="  flex md:flex ">
            <div className="p-4">
              <p className="mb-3 w-40 text-center font-semibold text-terciary">
                Políticas
              </p>
              <ul className="flex flex-col items-center justify-center gap-2">
                <Link
                  href={`/about-us#cultura-mix`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Cultura Mix
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
              </ul>
            </div>
            <div className="p-4">
              <p className="mb-3 w-40 text-center font-semibold text-terciary">
                Comunidade
              </p>
              <ul className="flex flex-col items-center justify-center gap-2">
                <Link
                  href={`/common-questions`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Perguntas Frequentes
                </Link>
                <Link
                  href={`/delivery#delivery-community`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Entregadores
                </Link>
                <Link
                  href={`/delivery#delivery-community`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex">
            <div className="p-4">
              <p className="mb-3 w-40 text-center font-semibold text-terciary">
                Company
              </p>
              <ul className="flex flex-col items-center justify-center gap-2">
                <Link
                  href={`/about-us`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Sobre nós
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label{" "}
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
                <Link
                  href={`/`}
                  className="w-40 text-center font-normal text-secondary transition duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  Label
                </Link>
              </ul>
            </div>
            <div className="p-4">
              <p className="mb-3 w-40 text-left font-semibold text-terciary">
                Redes sociais
              </p>
              <SocialMedia type="footer" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-primary p-2 text-xs font-normal text-complement1 md:text-sm">
        © 2024 Mixservlog. Todos os direitos reservados.
      </div>
    </>
  );
}
