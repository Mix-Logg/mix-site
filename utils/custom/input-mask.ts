export default function Mask(type: string) {
  switch (type) {
    case "PHONE":
      return "(99) 99999-9999";
    default:
      return undefined;
  }
}