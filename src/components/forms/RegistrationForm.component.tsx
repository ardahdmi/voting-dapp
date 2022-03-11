import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputError } from "../shared/InputError.component";
import { InputCheckbox } from "../shared/InputCheckbox.component";
import { UserFormFieldProps } from "../../domain/interfaces";
import { usePollContract } from "../../hooks/usePollContract";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormFieldProps>();
  const { addUser, allUsers } = usePollContract();

  const onSubmit: SubmitHandler<UserFormFieldProps> = ({
    nickname,
    isVoter,
    isQuestioner,
  }) => {
    addUser({ nickname, isVoter, isQuestioner });
    console.log(allUsers);
  };

  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
      <h1>there are {allUsers.length}</h1>
      <input
        placeholder="Please select a nickname."
        className={clsx(
          "input-field",
          errors.nickname ? "border-red-400" : "border-white/90"
        )}
        {...register("nickname", { required: true })}
      />
      <InputError className={errors.nickname ? "visible" : "invisible"} />
      <div className="mt-4 flex flex-col items-start gap-y-6 lg:mt-6">
        <InputCheckbox
          {...{
            register,
            name: "isVoter",
            label: "First of all, would you like vote?",
          }}
        />
        <InputCheckbox
          {...{
            register,
            name: "isQuestioner",
            label: "Also, would like to ask questions to others?",
          }}
        />
      </div>

      <input
        className="submit-btn my-6 self-center lg:my-10"
        type="submit"
        value="Let's go!"
      />
    </form>
  );
};
