import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment } from "react";
import { DisclosureButtonProps } from "../../../domain/interfaces";

export const AddPollDisclosure: React.FC = ({ children }) => {
  return (
    <Disclosure as="div" className="">
      {({ open }) => (
        <>
          <span className="font-spartan flex gap-x-1 text-lg font-normal">
            <p>Ready to ask questions?</p>
            <DisclosureButton text="create new" type="on" />
          </span>
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
            <Disclosure.Panel className="disclosure-panel bg-red-300">
              {children}
              <span className="font-spartan mx-auto flex gap-x-1 text-lg font-normal">
                <p>Still not sure?</p>
                <DisclosureButton text="cancel quiz" type="off" />
              </span>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const DisclosureButton: React.FC<DisclosureButtonProps> = ({
  text,
  type = "off",
}) => {
  return (
    <Disclosure.Button
      className={clsx(
        "font-medium text-orange-400 underline underline-offset-1 transition-colors",
        type === "off" ? "hover:text-red-400" : "hover:text-[#C3E5AE]"
      )}
    >
      {text}
    </Disclosure.Button>
  );
};

// some button
// mx-4 mb-4 rounded-lg bg-indigo-500 bg-opacity-50 px-12 py-2 text-white transition-opacity duration-200 hover:bg-opacity-70 sm:mb-6 sm:self-center lg:mb-8
