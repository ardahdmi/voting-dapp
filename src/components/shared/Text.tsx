import clsx from "clsx";
import { ISectionTitle } from "../../domain/interfaces";
import { CardTagProps } from "../../domain/interfaces";

export const SectionTitle: React.FC<ISectionTitle> = ({ text, className }) => {
  return (
    <h2
      className={clsx(
        "text-center text-2xl font-semibold leading-none tracking-wider md:text-left md:text-3xl",
        className
      )}
    >
      {text}
    </h2>
  );
};

export const CardTag: React.FC<CardTagProps> = ({ icon, text, className }) => {
  return (
    <div className={clsx("card-tag", className)}>
      {icon}
      <span className="select-none text-xs leading-5 tracking-widest text-current">
        {text}
      </span>
    </div>
  );
};
