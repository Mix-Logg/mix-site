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

export default function Company() {
  const [email, setEmail] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [areaActivity, setAreaActivity] = useState("");
  const [companyTelephone, setCompanyTelephone] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Dados do formulário:", {
      email,
      corporateName,
      areaActivity,
      companyTelephone,
    });
  };

  function onRecaptchaChange(value: string | null) {
    setRecaptchaValue(value);
  }

  return (
    <>
      <Header />
      <Wrapper>
        <div className=" items-center justify-center gap-4  md:flex md:flex-row-reverse">
          <form
            action="#"
            method="POST"
            className="flex max-w-md flex-col space-y-4 rounded-xl border border-neutral-200 bg-complement1 p-3"
            onSubmit={handleSubmit}
          >
            <Title title="Cadastre sua empresa" subtitle="" className="" />
            <div className="flex gap-4">
              <Input
                label="Razão Social"
                idInput="corporateName"
                placeholder="Mixservlog"
                maskType="NONE"
                required
                type="text"
                value={corporateName}
                handleOnChange={handleSetState(setCorporateName)}
              />
              <Input
                label="Ramo de atuação"
                idInput="AreaActivity"
                placeholder="Transportes"
                required
                type="text"
                maskType="NONE"
                value={areaActivity}
                handleOnChange={handleSetState(setAreaActivity)}
              />
            </div>
            <div className="flex gap-4">
              <Input
                label="E-mail"
                idInput="email"
                placeholder="seuemail@gmail.com"
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
              text="Cadastrar"
              className="w-full rounded-lg"
            />
          </form>

          <Image
            src={Cars}
            alt="Carros MIX"
            className=""
            width={400}
            height={400}
          />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
