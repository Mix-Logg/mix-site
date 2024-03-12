// useMessageWhatsAppCompany.ts

import { useState } from "react";
import useIsMobile from "./useIsMobile";

const useMessageWhatsAppCompany = () => {
  const [nameMessge, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [telephoneMessage, setTelephoneMessage] = useState("");

  const enviarMensagemWhatsAppCompany = () => {
    const numeroWhatsApp = process.env.NEXT_PUBLIC_NUMBER_MIX;
    const mensagem = `Olá, somos a ${nameMessge} e gostaríamos de saber mais sobre a Mix! \n\n🔸 Dados:\n☎️ ${telephoneMessage}\n📧 ${emailMessage}`;


     let linkWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
     window.location.href = linkWhatsApp;

  };

  return { enviarMensagemWhatsAppCompany, setNameMessage, setEmailMessage, setTelephoneMessage };
};

export default useMessageWhatsAppCompany;
