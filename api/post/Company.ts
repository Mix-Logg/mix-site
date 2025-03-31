import axios from "axios";

interface PropsCreateCompany {
    corporateName: string;
    email: string;
    companyTelephone: string;
    cnpj: string;
    branchActivity?: string;
};

export default async function CreateCompany(propsCreateCompany:PropsCreateCompany) {
    try {
        const response = await axios.post(`https://seashell-app-inyzf.ondigitalocean.app/company`, propsCreateCompany)   
        // const response = await axios.post(`http://localhost:8080/company`, propsCreateCompany)   
        return response.data; // Retorna a resposta do servidor
    } catch (e) {
        console.error("Erro ao enviar o arquivo:", e);
        throw e; // Opcional: repassa o erro para ser tratado externamente
    }
}

