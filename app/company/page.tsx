"use client";
import React, {  useEffect, useState } from "react";
import Header from "../../layouts/header";
import Wrapper from "../../layouts/wrapper";
import Footer from "../../layouts/footer";
import Image from "next/image";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Cars from "../../assets/svg/cars.svg";
import Word from "../../assets/svg/mixCompany.svg";
import CompanyHelp from "../../assets/svg/companyhelp.svg";
import handleSetState from "../../utils/handleSetState";
import Button from "../../components/Button";
import RemoveNonNumericCharacters from "../../utils/custom/remove-mask";
import Modal from "../../components/Modal";
import Warnings from "../../components/Modal/warnings";
import { FadeIn, FadeInStagger } from "../../components/Animations/FadeIn";
import cadasterCompany from "../../hooks/useCadasterCompany";
import useCadasterCompany from "../../hooks/useCadasterCompany";
import ContactMix from "../../layouts/contactMix";
import useMessageWhatsAppCompany from "../../utils/useMessageWhatsAppCompany";
import findCNPJ from "../../api/get/CNPJ";
import CreateCompany from "../../api/post/Company";
import { HiBadgeCheck } from "react-icons/hi";

export default function Company() {
  const [email, setEmail] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [companyTelephone, setCompanyTelephone] = useState("");
  const [finished, setFinished] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
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
    const cnpjNoMask = cnpj.replace(/[^\d]/g, "");
    const props = {
      corporateName: corporateName,
      email: email,
      companyTelephone: companyTelephone,
      cnpj: cnpjNoMask,
    }

    if(corporateName && email && companyTelephone && cnpj){
      const response = await CreateCompany(props);
      if(response.status === 201){
        // alert('Empresa cadastrada com sucesso');
        setFinished(true);
      }else{
        alert('Erro ao cadastrar empresa');
      }
    }else{
      alert('Preencha todos os campos');
    }
  };

  function onRecaptchaChange(value: string | null) {
    setRecaptchaValue(value);
  }

  const handleTeste = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleCadasterCompany(corporateName, email, companyTelephone);

    const mensagem = `Olá, somos a ${corporateName} e gostaríamos de saber mais sobre a Mix! \n\n🔸 Dados:\n☎️ ${companyTelephone}\n📧 ${email}`;

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      let linkWhatsApp = `https://wa.me/${
        process.env.NEXT_PUBLIC_NUMBER_MIXSERVLOG_COMPANY
      }?text=${encodeURIComponent(mensagem)}`;
      window.open(linkWhatsApp, "_blank");
    } else {
      let linkWhatsAppWeb = `https://web.whatsapp.com/send?phone=${
        process.env.NEXT_PUBLIC_NUMBER_MIXSERVLOG_COMPANY
      }&text=${encodeURIComponent(mensagem)}`;
      window.open(linkWhatsAppWeb, "_blank");
    }
  };

  useEffect(() => {
    const fetchCnpj = async () => {
      if (cnpj.length === 14 || cnpj.length === 18) {
        const cnpjNoMask = cnpj.replace(/[^\d]/g, "");
        const response = await findCNPJ(cnpjNoMask);
        setCompanyName(response.company.name);
      }else{
        console.log("CNPJ inválido");
      }
    };
    fetchCnpj();
  }, [cnpj]);

  return (
    <>
      <head>
        <title>Empresas | Mixservlog</title>
      </head>
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
        <div className={`items-center justify-center ${finished ? 'gap-4' : 'gap-14'}   md:flex md:flex-row-reverse`}>
          <FadeIn>
            { !finished ?
              <form
              action="#"
              method="POST"
              className="flex max-w-md flex-col space-y-4 rounded-xl border border-neutral-200 bg-complement1 p-3"
              onSubmit={handleSubmit}
            >
              <Title title="Cadastre sua empresa" subtitle="" className="" />

              <Input
                label="CNPJ"
                idInput="cnpj"
                placeholder="12.345.678/0001-90"
                maskType="CNPJ"
                required
                type="text"
                value={cnpj}
                handleOnChange={handleSetState(setCnpj)}
              />
              <div className="flex gap-4">
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

              <Input
                  label="Empresa"
                  idInput="companyName"
                  placeholder="Mix Serviços Logísticos"
                  maskType="NONE"
                  required
                  type="text"
                  value={companyName}
                  handleOnChange={handleSetState(setCompanyName)}
                />

              </div>

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
              :
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className={`text-xs md:text-sm font-extralight uppercase tracking-widest text-secondary`}>
                  Empresa cadastrada com sucesso!
                </h2>
                <HiBadgeCheck className="text-primary" size={100} />
              </div>
            }
          </FadeIn>

          <FadeIn>
            <Image
              src={Word}
              alt="mix Companys"
              className=""
              width={500}
              height={500}
            />
          </FadeIn>
        </div>
        <section
          id="company-community"
          className="mt-2 gap-40 rounded-xl p-10 md:flex"
        >
          <div>
            <Title
              title="Comunidade de empresas"
              subtitle="Como fazer parte da nossa "
              className="items-start"
            />
            <p className="text-justify text-sm font-normal text-secondary  md:text-base">
              Venha desfrutar da nossa Comunidade, oferecemos um serviço de
              entregas com segurança e integridade da carga, monitoramento em
              tempo real, opções de pagamento flexíveis e acessíveis. Soluções
              que visam fortalecer o nosso compromisso em desenvolver uma
              conexão de confiança através de atitudes éticas, ações de servir,
              fazer organizado e entregar com qualidade.
            </p>
          </div>
          <Image
            src={CompanyHelp}
            alt="Carros MIX"
            className=""
            width={500}
            height={500}
          />
        </section>
      </Wrapper>
      <ContactMix
        title="E aí, bora decolar 
              as entregas da sua empresa?"
        subtitle="Venha fazer parte desse céu de oportunidades e inovações com a
              gente!"
      />
      <Footer />
    </>
  );
}
