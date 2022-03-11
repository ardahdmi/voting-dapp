import clsx from "clsx";
import { InputErrorProps } from "../../domain/interfaces";

export const InputError: React.FC<InputErrorProps> = ({ className }) => {
  return (
    <span className={clsx("self-start text-red-400/80", className)}>
      A valid nickname is required.
    </span>
  );
};
