import clsx from "clsx";
import { useForm } from "react-hook-form";
import { InputErrorProps } from "../../domain/interfaces";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Please select a nickname."
        className={clsx(
          "input-field",
          errors.nickname ? "border-red-400" : "border-white/90"
        )}
        {...register("nickname", { required: true })}
      />
      <InputError className={errors.nickname ? "visible" : "invisible"} />
      <input className="submit-btn mb-6 self-center lg:mb-10" type="submit" />
    </form>
  );
};

const InputError: React.FC<InputErrorProps> = ({ className }) => (
  <span className={clsx("self-start text-white/75", className)}>
    Your nickname is required to proceed.
  </span>
);
