import { Arda } from "../../public/icons/Arda.icon";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-700/50 py-6 md:py-10">
      <div className="wrapper flex items-center justify-center gap-x-2">
        <p className="text-lg font-light text-white/60 md:text-lg">
          © 2022 | <span className="inline text-current sm:hidden">Built</span>
          <span className="hidden text-current sm:inline">
            Designed and developed
          </span>{" "}
          with
          <span className="mx-[6px]">🧡</span>
          by
        </p>
        <Arda />
      </div>
    </footer>
  );
};
