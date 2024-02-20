// hooks/useMessageWhatsApp.ts
import useIsMobile from '../useIsMobile';

const useMessageWhatsApp = () => {
  const isMobile = useIsMobile();

  const enviarMensagemWhatsApp = () => {
    const numeroWhatsApp = process.env.NEXT_PUBLIC_NUMBER_MIX;
    const mensagem = `Olá, gostaria de saber mais sobre a Mix!`;

    let linkWhatsApp;

    if (isMobile) {
      linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    } else {
      linkWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    }

    window.location.href = linkWhatsApp;
  };

  return { isMobile, enviarMensagemWhatsApp };
};

export default useMessageWhatsApp;
