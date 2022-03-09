import { FieldValues, UseFormRegister } from "react-hook-form";

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
  className?: any;
}

export interface InputErrorProps {
  className?: any;
}

export interface InputCheckboxProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
}
