"use client";
import React, { useEffect, useState } from "react";
import Exclamation from "../ExclamationsIcons";
import Button from "../Button";
import { Puff } from "react-loader-spinner";
import Modal from "../../components/Modal";

export default function Warnings({
  type,
  title,
  paragraph,
  buttonText,
  show,
}: WarningsProps) {
  const [isOpen, setIsOpen] = useState(show);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  let modal;
  switch (type) {
    case "FAILED":
      modal = (
        <Modal show={isOpen}>
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
                  onClick={closeModal}
                />
              </div>
            </div>
          </div>
        </Modal>
      );
      break;
    case "WARNING":
      modal = (
        <Modal show={isOpen}>
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
                  onClick={closeModal}
                />
              </div>
            </div>
          </div>
        </Modal>
      );
      break;
    case "AWAIT":
      modal = (
        <Modal show={show}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-complement1 px-6 py-3">
              <Exclamation type={type} />
              <h1 className="w-full  text-center text-lg font-semibold text-blue-600 md:text-xl">
                aguarde
              </h1>
              <div className="flex items-center rounded-md bg-neutral-100 text-justify text-secondary">
                <p className="w-56 p-3 text-sm md:text-base">
                  Por favor, Aguarde estamos processando seus dados!
                </p>
              </div>
              <div className="flex w-full items-center  justify-center">
                <Puff
                  visible={true}
                  height="40"
                  width="40"
                  color="#2563eb"
                  ariaLabel="puff-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            </div>
          </div>
        </Modal>
      );
      break;
    case "SUCCESSFUL":
      modal = (
        <Modal show={isOpen}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-complement1 px-6 py-3">
              <Exclamation type={type} />
              <h1 className="w-full  text-center text-lg font-semibold text-green-600 md:text-xl">
                {title}
              </h1>
              <div className="flex items-center rounded-md bg-neutral-100 text-justify text-secondary">
                <p className="w-56 p-3 text-sm md:text-base">{paragraph}</p>
              </div>
              <div className="flex w-full items-center justify-center">
                <Button
                  text={buttonText}
                  className="rounded-lg border-none bg-green-400 text-white hover:bg-green-600 hover:bg-none"
                  onClick={closeModal}
                />
              </div>
            </div>
          </div>
        </Modal>
      );
      break;
      
    default:
      modal = (
        <Modal show={show}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-lg bg-complement1 p-3 ">
              <Exclamation type={type} />
              <h1>DIGITE UM TIPO DE MODAL VÁLIDO!</h1>
            </div>
            <Button
              text="fechar"
              className="rounded-lg border-none bg-neutral-400 text-white hover:bg-neutral-600 hover:bg-none"
              onClick={closeModal}
            />
          </div>
        </Modal>
      );
      break;
  }

  return <>{modal}</>;
}
