import { Arda } from "../../public/icons/Arda.icon";

export const Footer = () => {
  return (
    <footer className="footer-border pb-4 pt-6">
      <div className="wrapper flex items-center justify-center gap-x-2">
        <FooterText />
        <Arda />
      </div>
    </footer>
  );
};

const FooterText = () => (
  <p className="text-sm font-light text-white/40">
    <span className="mr-[6px] text-current">© 2022</span>
    <span className="lets-get-crazy" />
    <span className="inline text-current sm:hidden">Built</span>
    <span className="hidden text-current sm:inline">
      Designed and developed
    </span>{" "}
    with
    <span className="mx-[6px]">🧡</span>
    by
  </p>
);
