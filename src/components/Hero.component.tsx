import clsx from "clsx";
import { useState } from "react";
import { RegistrationForm } from "./forms/RegistrationForm.component";
import { Button } from "./shared/Button.component";

export const Hero = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen((open) => !open);
  return (
    <section className="wrapper flex h-screen w-screen flex-col items-center justify-start text-center">
      <h1 className="drop-shadow-glow mt-24 max-w-sm text-5xl font-semibold text-white/90 lg:text-6xl">
        Straightforward <span className="gradient-text">voting</span> dApp.
      </h1>

      <div className="mx-auto mt-8 w-full max-w-xl">
        <Button
          onClick={toggleOpen}
          text="Register"
          className={open ? "invisible" : "visible"}
        />
        {open && (
          <>
            <RegistrationForm />
            <button onClick={toggleOpen} className="font-bold text-orange-500">
              Cancel
            </button>
          </>
        )}
      </div>
    </section>
  );
};
