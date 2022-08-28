/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      smModal: "500px",
    },
    extend: {
      keyframes: {
        modalOpen: {
          "0%": {
            transform: "translateY(30px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        modalClosed: {
          "0%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(30px)",
            opacity: "0",
          },
        },
      },
      animation: {
        modalOpen: "modalOpen 500ms ease 1",
        modalClosed: "modalClosed 500ms ease 1",
      },
      boxShadow: {
        modal: "0 4px 23px 0 rgb(0 0 0 / 20%)",
      },
      content: {
        link: `url("icon/redo-circle-outline-icon.svg")`,
      },
    },
  },
  plugins: [],
};
