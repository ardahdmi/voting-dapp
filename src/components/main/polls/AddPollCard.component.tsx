import React, { useEffect } from "react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { QuizStruct } from "../../../domain/interfaces";
import { SingleQuestionForm } from "../../forms/SingleQuestion.form";

export const PollRegistrationCard = () => {
  const methods = useForm({
    defaultValues: { title: "", qFields: [{ question: "" }] },
  });
  const [pollQuestions, setPollQuestions] = useState<QuizStruct[]>([]);

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    console.log("poll Qs: ", pollQuestions);
  }, [pollQuestions]);

  return (
    <FormProvider {...methods}>
      <form
        className="in-section-wrapper mx-auto w-full max-w-lg"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex justify-center gap-x-2">
          <label htmlFor="title">Please enter a title:</label>
          <input
            type="text"
            id="title"
            {...methods.register("title", {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
          />
        </div>
        {methods.formState.errors.title && <span>This field is required</span>}

        <div className="bg-primary-400 mx-auto mt-6 flex w-10/12 flex-col gap-y-2 rounded-lg p-2 md:mt-8">
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
      </form>
    </FormProvider>
  );
};
