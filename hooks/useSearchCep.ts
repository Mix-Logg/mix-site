import axios from "axios";

export default async function searchCep(zipCode: string) {
  try {
    const resposta = await axios.get(
      process.env.NEXT_PUBLIC_SEARCH_CEP + `${zipCode}/json`
    );
    // console.log("Resposta da requisição:", resposta.data);
    return resposta.data;
  } catch (erro) {
    console.error("Erro na requisição:", erro);
    throw erro;
  }
}

