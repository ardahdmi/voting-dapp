import { useState } from "react";
import { Button } from "./shared/Button.component";

export const Hero = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen((open) => !open);
  return (
    <section className="wrapper mt-24 flex h-screen w-screen flex-col items-center justify-start text-center">
      <h1 className="drop-shadow-glow max-w-sm text-5xl font-semibold text-white/90 lg:text-6xl">
        Straightforward <span className="gradient-text">voting</span> dApp.
      </h1>
      <Button onClick={toggleOpen} text="Register" />
      {open && <p className="">arda</p>}
    </section>
  );
};
