import { useState } from 'react';
import useIsMobile from './useIsMobile';

const useMessageWhatsApp = () => {
  const isMobile = useIsMobile();
  const [nome, setNome] = useState("");
  const [nomeErro, setNomeErro] = useState("");
  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
    setNomeErro("");
  };
  
  const enviarMensagemWhatsApp = () => {
    const numeroWhatsApp = process.env.NEXT_PUBLIC_NUMBER_MIXSERVLOG;
    const mensagem = `Olá, gostaria de saber mais sobre a Mix!`;
    const mensagemComNome = `Olá, meu nome é ${nome} e gostaria de saber mais sobre a Mix!`;
    
  
    let linkWhatsApp;
    if (!nome.trim()) {
      setNomeErro("Por favor, preencha o campo com seu nome!");
      return;
    }
  
    if (nome.trim().length > 0 && /^[a-zA-Z]+$/.test(nome)) {
      linkWhatsApp = isMobile
        ? `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemComNome)}`
        : `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemComNome)}`;
    } else {
      linkWhatsApp = isMobile
        ? `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`
        : `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    }
  
    if (linkWhatsApp) {
      window.location.href = linkWhatsApp;
    } else {
      setNomeErro("Erro ao gerar o link do WhatsApp");
    }
  };
  
  return { isMobile, nome, nomeErro, handleNomeChange, enviarMensagemWhatsApp };
};

export default useMessageWhatsApp;