import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { useEffect } from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { SingleQuestionFormProps } from "../../domain/interfaces";
import { ChevronUpIcon } from "../../public/icons/ChevronUp.icon";
import { MinusIcon } from "../../public/icons/Minus.icon";
import { PlusIcon } from "../../public/icons/Plus.icon";
import { SingleInputField } from "./SingleInputField";

export const SingleQuestionForm: React.FC<SingleQuestionFormProps> = ({
  setPollQuestions,
  index,
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "qFields",
  });
  const watchFields = useWatch({ name: "qFields", control });
  const addNewQuestion = (close: () => void) => {
    const newQuestion = {
      title: "title",
      questions: ["questions"],
      answers: [["answers"]],
      exists: true,
      isOpen: true,
    };
    setPollQuestions((arr) => [...arr, newQuestion]);
    append({ question: "" });
    close();
  };
  const deleteQuestion = (index: number) => {
    setPollQuestions((arr) => arr.filter((_, idx) => idx + 1 !== index));
    remove(index - 1);
  };

  const AddDeleteQuiz = () => {
    return (
      <div className="flex gap-x-2 self-end">
        <button
          className="font-spartan mt-4 self-end rounded-xl bg-green-300 px-1 py-1 text-xl text-white shadow transition-colors hover:bg-green-500"
          onClick={() => addNewQuestion(close)}
        >
          <PlusIcon />
        </button>
        {index > 0 ? (
          <button
            className="font-spartan mt-4 self-end rounded-xl bg-red-300 px-1 py-1 text-xl text-white shadow transition-colors hover:bg-red-500"
            onClick={() => deleteQuestion(index)}
          >
            <MinusIcon />
          </button>
        ) : null}
      </div>
    );
  };

  useEffect(() => {
    console.log(watchFields, "fields");
    console.log("errors burda", errors?.qFields?.[index]);
  }, [watchFields, errors]);

  return (
    <Disclosure defaultOpen>
      {({ open, close }) => (
        <>
          <Disclosure.Button className="question-disclosure-button">
            <span>
              {watchFields[index]?.question
                ? watchFields[index]?.question
                : `Question #${index + 1}`}
            </span>
            <ChevronUpIcon
              className={clsx(
                "h-5 w-5",
                errors?.qFields?.[index] ? " text-red-600" : "text-orange-500",
                open ? "rotate-180 transform" : ""
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="flex h-full flex-col px-4 py-2 text-sm text-gray-500">
            <ul>
              {fields.map((item, fieldIdx) => {
                return (
                  fieldIdx === index && (
                    <SingleInputField
                      key={fieldIdx}
                      index={index}
                      fieldName={`qFields.${fieldIdx}`}
                    />
                  )
                );
              })}
            </ul>
            <AddDeleteQuiz />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

// todo form validation
// todo form submit button
