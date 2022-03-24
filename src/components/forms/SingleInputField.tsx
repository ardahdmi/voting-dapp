import { Controller, useFormContext } from "react-hook-form";
import { SingleInputFieldProps } from "../../domain/interfaces";
import { formContent } from "../../public/content/form.content";
import { AnswersIcon } from "../../public/icons/Answers.icon";
import { QuestionFormIcon } from "../../public/icons/QuestionForm.icon";
import React from "react";
import clsx from "clsx";

export const SingleInputField: React.FC<SingleInputFieldProps> = ({
  fieldName,
  index,
}) => {
  const {
    control,
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  console.log(errors, "errors");

  return (
    <li className="flex flex-col items-center gap-y-4 ">
      <div className="group relative flex w-full items-center gap-x-1">
        <label className="absolute left-1 transition-colors group-focus-within:text-orange-600">
          <QuestionFormIcon />
        </label>
        <input
          {...register(`${fieldName}.question` as const, {
            required: true,
            maxLength: 50,
            minLength: 3,
          })}
          placeholder={formContent.questions[0].placeholder}
          className="add-quiz-input"
        />
        {errors?.qFields?.[0]?.question && (
          <span
            className={clsx(
              "md:text-md absolute -bottom-5 text-xs text-red-400/80",
              errors?.qFields?.[index]?.question ? "visible" : "invisible"
            )}
          >
            Please enter a question. (3-50 letters)
          </span>
        )}
      </div>

      <div className="mt-3 w-full">
        <Controller
          rules={{
            required: true,
            maxLength: 50,
            minLength: 3,
          }}
          render={({ field, formState: { errors } }) => (
            <div className="group relative flex w-full items-center gap-x-1">
              <label className="absolute left-0 transition-colors group-focus-within:text-orange-600">
                <AnswersIcon />
              </label>
              <input
                {...field}
                placeholder={formContent.questions[1].placeholder}
                className="add-quiz-input"
              />
              {errors?.qFields?.[index]?.answers && (
                <span
                  className={clsx(
                    "md:text-md absolute -bottom-5 text-xs text-red-400/80",
                    errors?.qFields?.[0]?.answers ? "visible" : "invisible"
                  )}
                >
                  Please provide answers. (3-50 letters)
                </span>
              )}
            </div>
          )}
          name={`${fieldName}.answers` as const}
          control={control}
        />

        <span
          className={clsx(
            "self-start whitespace-pre-wrap text-xs font-normal leading-[8px] text-gray-600",
            errors?.qFields?.[0]?.answers ? "invisible" : "visible"
          )}
        >
          {formContent.description}
        </span>
      </div>
    </li>
  );
};
