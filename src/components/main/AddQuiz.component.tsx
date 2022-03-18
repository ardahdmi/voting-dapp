import { Disclosure } from "@headlessui/react";
import React from "react";
import { ButtonProps } from "../../domain/interfaces";

export const AddQuizDisclosure: React.FC = ({ children }) => {
  return (
    <Disclosure>
      <DisclosureButton text="create new" />
      <Disclosure.Panel className="bg-primary-900 absolute inset-0 flex flex-col rounded-lg bg-opacity-50 text-gray-500 backdrop-blur-md">
        {children}
        <DisclosureButton text="cancel" />
      </Disclosure.Panel>
    </Disclosure>
  );
};

const DisclosureButton: React.FC<ButtonProps> = ({ text, className }) => (
  <Disclosure.Button>{text}</Disclosure.Button>
);
