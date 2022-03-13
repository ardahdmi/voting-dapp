import clsx from "clsx";
import { InputErrorProps } from "../../domain/interfaces";

export const InputError: React.FC<InputErrorProps> = ({
  className,
  type,
  customError,
}) => {
  const getErrorText = () => {
    if (customError === "registered") {
      return "You aldready registered. Please check the dashboard.";
    }
    if (type === "required") {
      return "A valid nickname is required.";
    }
    if (type === "maxLength" || type === "minLength") {
      return "Please provide 3-15 characters.";
    }
  };

  return (
    <span
      className={clsx(
        "absolute top-12 self-start text-left leading-5 text-red-400/80",
        type || customError ? "visible" : "invisible",
        className
      )}
    >
      {getErrorText()}
    </span>
  );
};
