import clsx from "clsx";
import { InputErrorProps } from "../../domain/interfaces";

export const InputError: React.FC<InputErrorProps> = ({ className }) => {
  return (
    <span className={clsx("self-start text-white/75", className)}>
      Your nickname is required to proceed.
    </span>
  );
};
