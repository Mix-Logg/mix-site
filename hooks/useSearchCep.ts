import axios from "axios";
import { useState } from "react";

const [street, setStreet] = useState("");
const [numberStreet, setNumberStreet] = useState("");
const [zipCode, setZipCode] = useState("");
const [neighborhood, setNeighborhood] = useState("");
const [city, setCity] = useState("");
const [uf, setUf] = useState("");

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
