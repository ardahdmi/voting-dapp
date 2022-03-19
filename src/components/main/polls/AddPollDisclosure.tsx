import { Disclosure, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { ButtonProps } from "../../../domain/interfaces";

export const AddPollDisclosure: React.FC = ({ children }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton text="create new" />
          <Transition
            as={Fragment}
            show={open}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 "
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="bg-primary-900 absolute inset-0 flex flex-col rounded-lg bg-opacity-80 text-gray-500 backdrop-blur-md">
              {children}
              <DisclosureButton text="cancel" />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const DisclosureButton: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  disabled,
}) => (
  <Disclosure.Button
    disabled={disabled}
    onClick={onClick}
    className="text-white"
  >
    {text}
  </Disclosure.Button>
);
