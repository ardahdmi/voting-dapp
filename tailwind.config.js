module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      spartan: ['"League Spartan"', "ui-sans-serif", "system-ui"],
    },

    extend: {
      colors: {
        background: "rgba(12, 10, 29, 1.0)",
        primary: {
          600: "#121419",
          700: "#0f1014",
          800: "#0A0A11",
          900: "#0C0C14",
        },
      },
      dropShadow: {
        glow: [
          "0 0 50px rgb(192, 219, 255, 0.55)",
          "0 0 16px rgb(65, 120, 255, 0.32)",
        ],
      },
      boxShadow: {
        "btn-glow": ["0px 0px 22px 12px rgba(249, 115, 22, 0.16)"],
        dashboard: [
          "0px 6px 12px -2px rgba(50, 50, 93, 0.25)",
          "0px 3px 10px -1px rgba(0, 0, 0, 0.3)",
        ],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/contactFormBg.jpg')",
      },
    },
  },
  plugins: [],
};
