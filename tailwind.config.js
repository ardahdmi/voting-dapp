module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      spartan: ['"League Spartan"', "ui-sans-serif", "system-ui"],
    },
    extend: {
      dropShadow: {
        glow: [
          "0 0 50px rgb(192, 219, 255, 0.55)",
          "0 0 16px rgb(65, 120, 255, 0.32)",
        ],
      },
      boxShadow: {
        "btn-glow": ["0px 0px 22px 12px rgba(249, 115, 22, 0.16)"],
      },
    },
  },
  plugins: [],
};
