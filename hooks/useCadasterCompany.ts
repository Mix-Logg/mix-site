import axios from "axios";
import { useLoaderStates } from "../utils/loaderState";
import useFindOneCompany from "../hooks/useFindOneCompany";

function useCadasterCompany() {
  const {
    loader,
    setLoader,
    setLoaderSuccessful,
    setLoaderFailed,
    loaderFailed,
    loaderSuccessful,
    loaderWarning,
  } = useLoaderStates();
  const { handleFindOneCadasterCompany } = useFindOneCompany();

  async function handleCadasterCompany(
    corporateName: string,
    email: string,
    companyTelephone: string
  ) {
    let resposta;
    try {
      setLoader(true);

      let resGet = await handleFindOneCadasterCompany(companyTelephone, email);

      if (resGet === 200) {
        setLoaderFailed(true);
        return;
      } else {
        resposta = await axios.post(
          `${process.env.NEXT_PUBLIC_API_MIXSERVLOG}company`,
          {
            corporateName,
            email,
            companyTelephone,
          }
        );
        setLoaderSuccessful(true);
        if (resposta.data === 200) {
          setLoader(false);
          setLoaderSuccessful(true);
          return;
        }
      }
    } catch (erro) {
      console.error("Erro na requisição:", erro);

      setLoaderFailed(true);
    } finally {
      setLoader(false);
    }
  }

  return {
    loader,
    setLoader,
    loaderSuccessful,
    setLoaderSuccessful,
    loaderFailed,
    setLoaderFailed,
    handleCadasterCompany,
  };
}

export default useCadasterCompany;
