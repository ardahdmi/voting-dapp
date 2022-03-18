export const ContactForm = () => {
  return (
    <div className="contact-form-wrapper">
      <div className="flex gap-x-8 pt-12">
        <MockFormInput />
        <MockFormInput />
      </div>
      <MockFormInput />
      <MockFormInput />
      <button
        disabled={true}
        className="self-end rounded-lg bg-orange-400 bg-opacity-50 px-3 py-2 text-white/70"
      >
        Contact
      </button>
    </div>
  );
};

const MockFormInput = () => (
  <div className="h-[2px] w-full rounded-xl bg-gray-300/70" />
);
