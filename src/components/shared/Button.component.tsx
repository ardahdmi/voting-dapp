import { ButtonProps } from "../../domain/interfaces";

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn-primary mt-8">
      <p className="text-xl font-bold">{text}</p>
    </button>
  );
};
