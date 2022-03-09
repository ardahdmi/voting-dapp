import { InputCheckboxProps } from "../../domain/interfaces";

export const InputCheckbox = ({
  register,
  name,
  label,
}: InputCheckboxProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-x-8 text-left lg:mx-auto lg:max-w-[90%]">
      <label htmlFor="isVoter">
        <p className="text-base font-semibold md:text-xl">{label}</p>
      </label>
      <input
        name="isVoter"
        type="checkbox"
        className="input-checkbox"
        {...register(name)}
      />
    </div>
  );
};
