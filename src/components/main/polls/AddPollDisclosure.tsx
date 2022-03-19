import { Disclosure, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { DisclosureButtonProps } from "../../../domain/interfaces";

export const AddPollDisclosure: React.FC = ({ children }) => {
  return (
    <Disclosure as="div" className="">
      {({ open }) => (
        <>
          <DisclosureButton text="create new" type="on" />
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

const DisclosureButton: React.FC<DisclosureButtonProps> = ({
  text,
  className,
  onClick,
  type = "off",
}) => {
  return (
    <Disclosure.Button
      onClick={onClick}
      className="font-spartan text-lg font-medium text-orange-400 transition-colors hover:text-red-400"
    >
      {text}
    </Disclosure.Button>
  );
};

// some button
// mx-4 mb-4 rounded-lg bg-indigo-500 bg-opacity-50 px-12 py-2 text-white transition-opacity duration-200 hover:bg-opacity-70 sm:mb-6 sm:self-center lg:mb-8
