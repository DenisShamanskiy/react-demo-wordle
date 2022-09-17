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
        btnGame: "1px 1px 2px #000, -1px -1px 2px #515254",
        btnGameClick: "inset 1px 1px 2px #000, inset -1px -1px 2px #515254",
        keyClickGreen: "inset 1px 1px 3px #2a4428, inset -1px -1px 3px #aaffa0",
      },
      colors: {
        wordleGreen: "#6aaa64",
        wordleYellow: "#c9b458",
        wordleGray: "#787c7e",
        wordleRed: "#aa6464",
        wordleBlue: "#6475aa",
        wordleBorder: "#878a8c",
        wordleBorderLight: "#d3d6da",
        wordleBorderDark: "#515254",
      },
    },
  },
  plugins: [],
};
