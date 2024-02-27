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
    try {
      setLoader(true);

      let resGet = await handleFindOneCadasterCompany(companyTelephone);

      if (resGet === 409) {
        setLoaderFailed(true);
        return;
      } else {
        resposta = await axios.post(
          process.env.NEXT_PUBLIC_API_MIXSERVLOG + "company",
          {
            corporateName,
            email,
            companyTelephone,
          }
        );
        setLoaderSuccessful(true);
        return 200;
      }
      setLoaderSuccessful(true);
    } catch (erro) {
      console.error("Erro na requisição:", erro);
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
