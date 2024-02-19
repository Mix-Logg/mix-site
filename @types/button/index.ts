interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  className?: string; 
}