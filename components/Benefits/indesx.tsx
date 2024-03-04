"use client";
import { HiOutlineExclamation } from "react-icons/hi";
import {
  MdOutlineLocalGasStation,
  MdOutlineCheck,
  MdOutlineOilBarrel,
} from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { BsPersonGear } from "react-icons/bs";
import { TbHearts } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { GiTowTruck } from "react-icons/gi";
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
          <p className="inline-flex rounded-lg bg-orange-50 p-2 text-5xl text-primary ">
            <MdOutlineLocalGasStation />
          </p>
          <p className="absolute -ml-4 mt-10 inline-flex rounded-full bg-orange-400 p-1 text-lg text-orange-100 shadow-md">
            <MdOutlineCheck />
          </p>
          <p className="mt-1 w-36 font-semibold text-complement1">{type}</p>
        </>
      );
      break;
    case "Troca de Óleo":
      icon = (
        <>
          <p className="inline-flex rounded-lg bg-orange-50 p-2 text-5xl text-primary ">
            <MdOutlineOilBarrel />
          </p>
          <p className="absolute -ml-4 mt-10 inline-flex rounded-full bg-orange-400 p-1 text-lg text-orange-100 shadow-md">
            <MdOutlineCheck />
          </p>
          <p className="mt-1 w-36 font-semibold text-complement1">{type}</p>
        </>
      );
      break;
    case "Compra de peças":
      icon = (
        <>
          <p className="inline-flex rounded-lg bg-orange-50 p-2 text-5xl text-primary ">
            <BsPersonGear />
          </p>
          <p className="absolute -ml-4 mt-10 inline-flex rounded-full bg-orange-400 p-1 text-lg text-orange-100 shadow-md">
            <MdOutlineCheck />
          </p>
          <p className="mt-1 w-36 font-semibold text-complement1">{type}</p>
        </>
      );
      break;
    case "Seguro de veículo":
      icon = (
        <>
          <p className="inline-flex rounded-lg bg-orange-50 p-2 text-5xl text-primary ">
            <AiOutlineSafety />
          </p>
          <p className="absolute -ml-4 mt-10 inline-flex rounded-full bg-orange-400 p-1 text-lg text-orange-100 shadow-md">
            <MdOutlineCheck />
          </p>
          <p className="mt-1 w-36 font-semibold text-complement1">{type}</p>
        </>
      );
      break;

    case "Seguro de vida":
      icon = (
        <>
          <p className="inline-flex rounded-lg bg-orange-50 p-2 text-5xl text-primary ">
            <TbHearts />
          </p>
          <p className="absolute -ml-4 mt-10 inline-flex rounded-full bg-orange-400 p-1 text-lg text-orange-100 shadow-md">
            <MdOutlineCheck />
          </p>
          <p className="mt-1 w-36 font-semibold text-complement1">{type}</p>
        </>
      );
      break;
      case "Cooperativa de crédito":
        icon = (
          <>
            <p className="inline-flex rounded-lg bg-orange-50 p-2 text-5xl text-primary ">
              <LiaPiggyBankSolid />
            </p>
            <p className="absolute -ml-4 mt-10 inline-flex rounded-full bg-orange-400 p-1 text-lg text-orange-100 shadow-md">
              <MdOutlineCheck />
            </p>
            <p className="mt-1 w-36 font-semibold text-complement1">{type}</p>
          </>
        );
        break;
        case "Guincho":
            icon = (
              <>
                <p className="inline-flex rounded-lg bg-orange-50 p-2 text-5xl text-primary ">
                  <GiTowTruck />
                </p>
                <p className="absolute -ml-4 mt-10 inline-flex rounded-full bg-orange-400 p-1 text-lg text-orange-100 shadow-md">
                  <MdOutlineCheck />
                </p>
                <p className="mt-1 w-36 font-semibold text-complement1">{type}</p>
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
      <div className="inline-flex">
        <div className="">{icon}</div>
      </div>
    </>
  );
}
