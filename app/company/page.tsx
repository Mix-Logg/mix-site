"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Header from "../../layouts/header";
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footer";
import Image from "next/image";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Cars from "../../assets/svg/cars.svg";
import handleSetState from "../../utils/handleSetState";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../components/Button";
import RemoveNonNumericCharacters from "../../utils/custom/remove-mask";
import Modal from "../../components/Modal";
import Warnings from "../../components/Modal/warnings";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";
import cadasterCompany from "../../hooks/useCadasterCompany";
import useCadasterCompany from "../../hooks/useCadasterCompany";

export default function Company() {
  const [email, setEmail] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [companyTelephone, setCompanyTelephone] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const {
    loader,
    setLoader,
    loaderFailed,
    setLoaderFailed,
    loaderSuccessful,
    setLoaderSuccessful,
    handleCadasterCompany,
  } = useCadasterCompany();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);
    setLoaderSuccessful(false);
    await handleCadasterCompany(corporateName, email, companyTelephone);
  };

  function onRecaptchaChange(value: string | null) {
    setRecaptchaValue(value);
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Warnings buttonText="none" type="AWAIT" show={loader} />
        <Warnings
          buttonText="Fechar"
          title="Sucesso!"
          paragraph="Empresa cadastrada com sucesso, por favor espere até nossa equipe entrar em contato!"
          type="SUCCESSFUL"
          show={loaderSuccessful}
        />
        <Warnings
          buttonText="Ok, aguardar"
          title="Ops, tivemos um problema!"
          paragraph="Sua empresa já foi cadastrada, por favor espere o contato de nossa equipe!"
          type="FAILED"
          show={loaderFailed}
        />
        <div className=" items-center justify-center gap-4  md:flex md:flex-row-reverse">
          <FadeIn>
            <form
              action="#"
              method="POST"
              className="flex max-w-md flex-col space-y-4 rounded-xl border border-neutral-200 bg-complement1 p-3"
              onSubmit={handleSubmit}
            >
              <Title title="Cadastre sua empresa" subtitle="" className="" />

              <Input
                label="Razão Social"
                idInput="corporateName"
                placeholder="Mix Serviços Logísticos"
                maskType="NONE"
                required
                type="text"
                value={corporateName}
                handleOnChange={handleSetState(setCorporateName)}
              />

              <div className="flex gap-4">
                <Input
                  label="E-mail"
                  idInput="email"
                  placeholder="seuemail@email.com"
                  required
                  maskType="NONE"
                  type="email"
                  value={email}
                  handleOnChange={handleSetState(setEmail)}
                />
                <Input
                  label="Número contato"
                  idInput="CompanyTelephone"
                  placeholder="(11) 97050-2006"
                  required
                  maskType="PHONE"
                  type="text"
                  value={companyTelephone}
                  handleOnChange={(value: string) =>
                    setCompanyTelephone(RemoveNonNumericCharacters(value))
                  }
                />
              </div>

              {/* <ReCAPTCHA
              sitekey="6LeKqH0pAAAAABsZQJuO57__cr3b1OlOoIMF5M6v"
              onChange={onRecaptchaChange}
            /> */}

              <Button
                type="submit"
                text="Cadastrar agora"
                className="w-full rounded-lg border-none bg-primary text-lg text-white"
              />
            </form>
          </FadeIn>
          <FadeIn>
            <Image
              src={Cars}
              alt="Carros MIX"
              className=""
              width={400}
              height={400}
            />
          </FadeIn>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
