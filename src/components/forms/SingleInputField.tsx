import { Controller, useFormContext } from "react-hook-form";
import { SingleInputFieldProps } from "../../domain/interfaces";
import { formContent } from "../../public/content/form.content";
import { AnswersIcon } from "../../public/icons/Answers.icon";
import { QuestionFormIcon } from "../../public/icons/QuestionForm.icon";
import React, { useRef } from "react";

export const SingleInputField: React.FC<SingleInputFieldProps> = ({
  fieldName,
}) => {
  const { control, register } = useFormContext();
  return (
    <li className="flex flex-col items-center gap-y-4 ">
      <div className="group relative flex w-full items-center gap-x-1">
        <label className="absolute left-1 transition-colors group-focus-within:text-orange-600">
          <QuestionFormIcon />
        </label>
        <input
          {...register(`${fieldName}.question` as const)}
          placeholder={formContent[0].placeholder}
          className="add-quiz-input"
        />
      </div>
      <div className="w-full">
        <Controller
          render={({ field }) => (
            <div className="group relative flex w-full items-center gap-x-1">
              <label className="absolute left-0 transition-colors group-focus-within:text-orange-600">
                <AnswersIcon />
              </label>
              <input
                {...field}
                placeholder={formContent[1].placeholder}
                className="add-quiz-input"
              />
            </div>
          )}
          name={`${fieldName}.answers` as const}
          control={control}
        />
        <span className="self-start text-xs font-normal text-gray-600">
          form content
        </span>
      </div>
    </li>
  );
};
