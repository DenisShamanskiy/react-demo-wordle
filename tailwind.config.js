/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "415px",
      md: "768px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
