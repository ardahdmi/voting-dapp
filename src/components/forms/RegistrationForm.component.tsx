import clsx from "clsx";
import { InputError } from "../shared/InputError.component";
import { InputCheckbox } from "../shared/InputCheckbox.component";
import { CustomErrorTypes, UserFormFieldProps } from "../../domain/interfaces";
import { usePollContract } from "../../hooks/usePollContract";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormFieldProps>();
  const { addUser, isNewUser } = usePollContract();
  const [customError, setCustomError] = useState<CustomErrorTypes>();
  let navigate = useNavigate();

  const onSubmit: SubmitHandler<UserFormFieldProps> = async ({
    nickname,
    isVoter,
    isQuestioner,
  }) => {
    const newUser = await isNewUser();
    console.log("existingUser", newUser);

    if (newUser) {
      addUser({ nickname, isVoter, isQuestioner });
      // wait metamask confirm
      // navigate("../dashboard", { replace: true });
    } else {
      console.log("user already exists");
      setCustomError("registered");
      setTimeout(() => setCustomError("none"), 3000);
    }
  };

  return (
    <form
      className="relative flex flex-col gap-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        placeholder="Please select a nickname."
        className={clsx(
          "input-field",
          errors.nickname ? "border-red-400" : "border-white/90"
        )}
        {...register("nickname", {
          required: true,
          maxLength: 15,
          minLength: 3,
        })}
      />

      <InputError customError={customError} type={errors.nickname?.type} />
      <div className="mt-10 flex flex-col items-start gap-y-6">
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
        className="submit-btn my-6 self-center "
        type="submit"
        value="Let's go!"
      />
    </form>
  );
};
