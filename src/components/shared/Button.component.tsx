import clsx from "clsx";
import { ButtonProps } from "../../domain/interfaces";

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={clsx("btn-primary outline-none", className)}
    >
      <p className="text-xl font-semibold">{text}</p>
    </button>
  );
};
