"use client";
import Exclamation from "../ExclamationsIcons";
import Button from "../Button";

export default function Warnings({
  type,
  title,
  paragraph,
  buttonText,
}: WarningsProps) {
  let modal;
  switch (type) {
    case "FAILED":
      modal = (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-complement1 px-6 py-3">
            <Exclamation type={type} />
            <h1 className="w-full  text-center text-lg font-semibold text-red-600 md:text-xl">
              {title}
            </h1>
            <div className="flex items-center rounded-md bg-neutral-100 text-justify text-secondary">
              <p className="w-56 p-3 text-sm md:text-base">{paragraph}</p>
            </div>
            <div className="flex w-full items-center  justify-center">
              <Button
                text={buttonText}
                className="rounded-lg border-none bg-red-400 text-white hover:bg-red-600 hover:bg-none"
              />
            </div>
          </div>
        </div>
      );
      break;
    case "WARNING":
      modal = (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-complement1 px-6 py-3">
            <Exclamation type={type} />
            <h1 className="w-full  text-center text-lg font-semibold text-amber-600 md:text-xl">
              {title}
            </h1>
            <div className="flex items-center rounded-md bg-neutral-100 text-justify text-secondary">
              <p className="w-56 p-3 text-sm md:text-base">{paragraph}</p>
            </div>
            <div className="flex w-full items-center  justify-center">
              <Button
                text={buttonText}
                className="rounded-lg border-none bg-amber-400 text-white hover:bg-amber-600 hover:bg-none"
              />
            </div>
          </div>
        </div>
      );
      break;

    default:
      modal = (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-lg bg-complement1 p-3 ">
            <Exclamation type={type} />
            <h1>DIGITE UM TIPO DE MODAL VÁLIDO!</h1>
          </div>
        </div>
      );
      break;
  }

  return <>{modal}</>;
}
