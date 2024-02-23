declare module "react-input-mask" {
    import * as React from "react";
  
    interface InputMaskProps {
      id?: any;
      name?: any;
      autoComplete?: any;
      required?: any;
      value?: string;
      mask: string;
      className?: string;
      onChange(e: any): void;
      disabled?: boolean
    }
  
    const InputMask: React.FC<InputMaskProps>;
    export default InputMask;
  }