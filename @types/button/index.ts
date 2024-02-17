interface ButtonProps {
  text: string;
  borderColorHover: string;
  style: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}
