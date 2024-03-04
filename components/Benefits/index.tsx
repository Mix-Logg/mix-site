"use client";
import { HiOutlineExclamation } from "react-icons/hi";
import {
  MdOutlineLocalGasStation,
  MdOutlineCheck,
  MdOutlineOilBarrel,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { BsPersonGear } from "react-icons/bs";
import { TbHearts } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { GiTowTruck } from "react-icons/gi";
import { FadeIn, FadeInStagger } from "../Animations/FadeIn";

interface ExclamationProps {
  type: string;
  className?: string;
}

export default function Benefits({ type, className }: ExclamationProps) {
  let icon;
  switch (type) {
    case "Abastecimento":
      icon = (
        <>
          <MdOutlineLocalGasStation />
        </>
      );
      break;
    case "Troca de Óleo":
      icon = (
        <>
          <MdOutlineOilBarrel />
        </>
      );
      break;
    case "Compra de peças":
      icon = (
        <>
          <BsPersonGear />
        </>
      );
      break;
    case "Seguro de veículo":
      icon = (
        <>
          <AiOutlineSafety />
        </>
      );
      break;

    case "Seguro de vida":
      icon = (
        <>
          <TbHearts />
        </>
      );
      break;
    case "Cooperativa de crédito":
      icon = (
        <>
          <LiaPiggyBankSolid />
        </>
      );
      break;
    case "Guincho":
      icon = (
        <>
          <GiTowTruck />
        </>
      );
      break;
    case "Atendimento":
      icon = (
        <>
          <MdOutlineSupportAgent />
        </>
      );
      break;
    default:
      icon = (
        <div className="inline-flex items-center rounded-lg bg-neutral-100 p-1 text-neutral-600">
          <HiOutlineExclamation className="h-10 w-10 text-neutral-600" />
          <p>passe nome de icone válido</p>
        </div>
      );
      break;
  }

  return (
    <>
    <FadeIn>
      <div className="inline-flex">
        <div className="">
          <p className="inline-flex rounded-lg bg-orange-50 p-2 text-3xl text-primary md:text-4xl ">
            {icon}
          </p>
          <p className="absolute -ml-2 mt-7 inline-flex rounded-full bg-orange-400 p-1  text-orange-100 shadow-md md:-ml-4 md:mt-10 text-sm">
            <MdOutlineCheck />
          </p>
          <p className="mt-3 w-36 text-base font-semibold text-complement1 md:text-base">
            {type}
          </p>
        </div>
      </div>
      </FadeIn>
    </>
  );
}
