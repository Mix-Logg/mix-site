import axios from "axios";
import { useLoaderStates } from "../utils/loaderState";

function useFindOneCompany() {
  const {
    loader,
    setLoader,
    loaderSuccessful,
    setLoaderSuccessful,
    loaderWarning,
    setLoaderWarning,
    setLoaderFailed,
  } = useLoaderStates();

  async function handleFindOneCadasterCompany(
    companyTelephone: string,
    email: string
  ): Promise<number | void> {
    let resposta;
    try {
      setLoader(true);
      resposta = await axios.get(
        process.env.NEXT_PUBLIC_API_MIXSERVLOG +
          "company/" +
          companyTelephone +
          "/" +
          email
      );
      if (resposta.data.status === 409) {
        setLoaderFailed(true);
        return 409;
      }
      return 200;
    } catch (erro) {
      console.error("Erro na requisição:", erro);
      throw erro;
    } finally {
      setLoader(false);
      if (resposta && resposta.data.status === 200) {
        setLoaderSuccessful(true);
      }
      setLoaderFailed(true);
    }
  }

  return {
    loader,
    setLoader,
    loaderSuccessful,
    setLoaderSuccessful,
    handleFindOneCadasterCompany,
  };
}

export default useFindOneCompany;