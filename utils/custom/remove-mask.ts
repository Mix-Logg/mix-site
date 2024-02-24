export default function RemoveNonNumericCharacters (value: string) {
    return value.replace(/\D/g, "");
  };