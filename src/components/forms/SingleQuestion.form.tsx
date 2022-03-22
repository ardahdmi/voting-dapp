import { Disclosure } from "@headlessui/react";
import { useEffect } from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { SingleQuestionFormProps } from "../../domain/interfaces";
import { ChevronUpIcon } from "../../public/icons/ChevronUp.icon";
import { PlusIcon } from "../../public/icons/Plus.icon";
import { SingleInputField } from "./SingleInputField";

export const SingleQuestionForm: React.FC<SingleQuestionFormProps> = ({
  setPollQuestions,
  index,
}) => {
  const { register, control } = useFormContext();
  const { fields, append } = useFieldArray({
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

  useEffect(() => {
    console.log(watchFields, "fields");
  }, [watchFields]);

  return (
    <Disclosure defaultOpen>
      {({ open, close }) => (
        <>
          <Disclosure.Button className="bg-primary-300 flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span>
              {watchFields[index]?.question
                ? watchFields[index]?.question
                : `Question #${index + 1}`}
            </span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="flex flex-col px-4 pt-4 pb-2 text-sm text-gray-500">
            <ul>
              {fields.map((item, fieldIdx) => {
                return (
                  fieldIdx === index && (
                    <SingleInputField
                      key={fieldIdx}
                      fieldName={`qFields.${fieldIdx}`}
                    />
                  )
                );
              })}
            </ul>

            <button
              className="font-spartan mt-4 self-end rounded-xl bg-indigo-300 px-1 py-1 text-xl text-white shadow transition-colors hover:bg-indigo-500"
              onClick={() => addNewQuestion(close)}
            >
              <PlusIcon />
            </button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

// todo form delete
// todo form buttonlar
// todo form title
// todo form submit button
// todo duruma gore grid 2
// todo form swiper
