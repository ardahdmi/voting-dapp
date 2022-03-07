module.exports = {
  content: ["./src/pages/*.{js,ts,jsx,tsx}"],
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
    },
  },
  plugins: [],
};
