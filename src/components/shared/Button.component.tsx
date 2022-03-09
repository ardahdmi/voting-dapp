import clsx from "clsx";
import { ButtonProps } from "../../domain/interfaces";

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={clsx("btn-primary", className)}>
      <p className="text-xl font-bold">{text}</p>
    </button>
  );
};
