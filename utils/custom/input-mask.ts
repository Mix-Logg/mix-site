export default function Mask(exception: string) {
  switch (exception) {
    case "PHONE":
      return "(99) 9999-9999";
    case "CPF":
      return "999.999.999-99";
    case "CNPJ":
      return "99.999.999/9999-99";
    case "ZIPCODE":
      return "99999-999";
    default:
      return "";
  }
}