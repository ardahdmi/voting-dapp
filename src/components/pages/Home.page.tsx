import { useState } from "react";
import { RegistrationForm } from "../forms/Registration.form";
import { Button } from "../shared/Button.component";

export const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen((open) => !open);
  return (
    <section className="wrapper flex w-screen flex-col items-center justify-start text-center">
      <h1 className="drop-shadow-glow max-w-sm text-5xl font-semibold text-white/90 lg:text-6xl">
        Straightforward <span className="gradient-text">voting</span> dApp.
      </h1>

      <div className="mx-auto mt-4 w-full max-w-xl">
        <Button
          onClick={toggleOpen}
          text="Register"
          className={open ? "invisible" : "visible"}
        />
        {open && (
          <div>
            <RegistrationForm />
            <button onClick={toggleOpen} className="font-bold text-orange-500">
              Cancel
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
