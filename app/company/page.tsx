"use client";
import React, { useEffect, useState } from "react";
import Header from "../../layouts/header";
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footer";
import Image from "next/image";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Cars from "../../assets/svg/cars.svg";
import handleSetState from "../../utils/handleSetState";
import Button from "../../components/Button";
import searchCep from "../../hooks/useSearchCep";
import { error } from "console";

export default function Company() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [areaActivity, setAreaActivity] = useState("");
  const [street, setStreet] = useState("");
  const [numberStreet, setNumberStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [companyTelephone, setCompanyTelephone] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Dados do formulário:", {
      fullName,
      email,
      corporateName,
      areaActivity,
      street,
      numberStreet,
      zipCode,
      city,
      uf,
      companyTelephone,
    });
  };

  const changeSearchCep = async (zipcode: string) => {
    if (zipcode.length === 8) {
      const result = await searchCep(zipcode);
      setZipCode(zipcode);
      setStreet(result.logradouro);
      setNeighborhood(result.bairro);
      setCity(result.localidade);
      setUf(result.uf);
      console.log(result);
      return;
    }
    setZipCode(zipcode);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div className="items-center justify-center gap-4  md:flex md:flex-row-reverse">
          <form
            action="#"
            method="POST"
            className="flex max-w-md flex-col space-y-4 rounded-xl border border-neutral-200 bg-complement1 p-3"
            onSubmit={handleSubmit}
          >
            <Title title="Cadastre sua empresa" subtitle="" className="" />
            <div className="">
              <Input
                label="Nome Completo"
                idInput="fullName"
                placeholder="Alberto Silva"
                type="text"
                value={fullName}
                handleOnChange={handleSetState(setFullName)}
              />
            </div>
            <div className="flex gap-4">
              <Input
                label="E-mail"
                idInput="email"
                placeholder="seuemail@gmail.com"
                required
                type="email"
                value={email}
                handleOnChange={handleSetState(setEmail)}
              />
              <Input
                label="Número contato"  
                idInput="CompanyTelephone"
                placeholder="(11) 97050-2006"
                required
                type="text"
                value={companyTelephone}
                handleOnChange={handleSetState(setCompanyTelephone)}
              />
            </div>
              <Input
                label="Razão Social"
                idInput="corporateName"
                placeholder="Mixservlog"
                required
                type="text"
                value={corporateName}
                handleOnChange={handleSetState(setCorporateName)}
              />
            <div className="flex gap-4">
              <Input
                label="Ramo de atuação"
                idInput="AreaActivity"
                placeholder="Transportes"
                required
                type="text"
                value={areaActivity}
                handleOnChange={handleSetState(setAreaActivity)}
              />
              <Input
                label="CNPJ"
                idInput="AreaActivity"
                placeholder="12.345.678/0001-09"
                required
                type="text"
                value={areaActivity}
                handleOnChange={handleSetState(setAreaActivity)}
              />
            </div>
            <div className="flex gap-4">
              <Input
                label="CEP"
                idInput="zipCode"
                placeholder="10206-456"
                required
                type="text"
                value={zipCode}
                handleOnChange={(txt: string) => changeSearchCep(txt)}
              />
              <Input
                label="Endereço"
                idInput="street"
                placeholder="Rua Mix"
                required
                type="text"
                value={street}
                handleOnChange={handleSetState(setStreet)}
              />
            </div>
            <div className="flex gap-4">
              <Input
                label="Bairro"
                idInput="neighborhood"
                placeholder="São Mix"
                required
                type="text"
                value={neighborhood}
                handleOnChange={handleSetState(setNeighborhood)}
              />
              <Input
                label="Número"
                idInput="numberStreet"
                placeholder="102"
                required
                type="text"
                value={numberStreet}
                handleOnChange={handleSetState(setNumberStreet)}
              />
            </div>
            <div className="flex gap-4">
              <Input
                label="Cidade"
                idInput="city"
                placeholder="São Paulo"
                required
                type="text"
                value={city}
                handleOnChange={handleSetState(setCity)}
              />
              <Input
                label="UF"
                idInput="uf"
                placeholder="SP"
                required
                type="text"
                value={uf}
                handleOnChange={handleSetState(setUf)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-m-w-blue-400 hover:bg-m-blue-600 focus-visible:outline-m-blue-600 bg-w-blue-400 flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Entrar
              </button>
            </div>
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
