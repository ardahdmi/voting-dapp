import clsx from "clsx";
import React, { useEffect } from "react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { QuizStruct } from "../../../domain/interfaces";
import { formContent } from "../../../public/content/form.content";
import { TitleIcon } from "../../../public/icons/Title.icon";
import { SingleQuestionForm } from "../../forms/SingleQuestion.form";

export const PollRegistrationCard = () => {
  const methods = useForm({
    defaultValues: { title: "", qFields: [{ question: "", answers: "" }] },
  });
  const [pollQuestions, setPollQuestions] = useState<QuizStruct[]>([]);

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    console.log("poll Qs: ", pollQuestions);
  }, [pollQuestions]);

  return (
    <FormProvider {...methods}>
      <form
        className="in-section-wrapper relative mx-auto h-full w-full max-w-lg"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="group relative flex w-full items-center gap-x-1">
          <label className="absolute left-2 top-0 max-w-[40px] text-gray-500 transition-colors group-focus-within:text-orange-600">
            <TitleIcon />
          </label>
          <input
            {...methods.register("title", {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
            className="add-quiz-input !pl-[54px] placeholder:!text-base"
            placeholder={formContent.title.placeholder}
          />
          {methods.formState.errors.title && (
            <span
              className={clsx(
                "md:text-md absolute -bottom-5 text-xs text-red-400/80",
                methods.formState.errors.title ? "visible" : "invisible"
              )}
            >
              Please enter a title. (3-20 letters)
            </span>
          )}
        </div>

        <div className="question-disclosure-wrapper">
          {[...Array(pollQuestions.length + 1).keys()].map((question, id) => {
            return (
              <SingleQuestionForm
                key={id}
                index={id}
                {...{ setPollQuestions }}
              />
            );
          })}
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex flex-col items-center">
          <input
            type="submit"
            className="quiz-submit-btn flex self-center"
            value="Add quiz"
          />
        </div>
      </form>
    </FormProvider>
  );
};
