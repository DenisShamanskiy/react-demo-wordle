/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      keyframes: {
        modalOpen: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },
        modalClosed: {
          '0%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
        },
        notificationShow: {
          '0%': { transform: 'translate(-50%, 0px)' },
          '8%': { transform: 'translate(-50%, 36px)' },
          '12%': { transform: 'translate(-50%, 38px)' },
          '16%': { transform: 'translate(-50%, 36px)' },
          '80%': { transform: 'translate(-50%, 36px)' },
          '85%': { transform: 'translate(-50%, 41px)' },
          '100%': { transform: 'translate(-50%, 0px)' },
        },
      },
      animation: {
        modalOpen: 'modalOpen 500ms ease 1',
        modalClosed: 'modalClosed 500ms ease 1',
        notificationShow: 'notificationShow 5s ease 1',
      },
      boxShadow: {
        modal: '0 4px 23px 0 rgb(0 0 0 / 20%)',
      },
      gridTemplateRows: {
        board: 'repeat(6, 56px)',
        boardMD: 'repeat(6, 64px)',
      },
      gridTemplateColumns: {
        board: 'repeat(5, 58px)',
        boardMD: 'repeat(5, 64px)',
        keyBoardLastRow:
          'minmax(44.55px, 1fr) repeat(9, minmax(27.66px, 49.16px)) minmax(44.55px, 1fr)',
      },
      colors: {
        'w-black': '#121213',
        'w-white': '#F2F3F4',
        // text
        'w-white-dark': '#abaaa9',
        'w-quartz': '#49474E',
        //
        'w-green': '#6aaa64',
        'w-green-dark': '#538d4e',
        'w-yellow': '#c9b458',
        'w-yellow-dark': '#b59f3b',
        'w-blue': '#6475aa',
        'w-blue-dark': '#5a6999',
        'w-red': '#aa6464',
        'w-red-dark': '#995a5a',
        'w-grey': '#787c7e',
        'w-grey-dark': '#3a3a3c',
        'w-grey-tone-1': '#878a8c',
        'w-grey-tone-2': '#d3d6da',
        'w-grey-tone-3': '#3a3a3c',
        'w-grey-tone-4': '#565758',
        'w-grey-tone-5': '#818384',
        //
        'w-disabled': '#bdc0c4',
        'w-disabled-dark': '#3f4041',
        //
        'w-border-light': '#d3d6da',
        'w-border-dark': '#3a3a3c',
        //
        wordleGreen: '#6aaa64',
        wordleYellow: '#c9b458',
        wordleGrey: '#787c7e',
        wordleRed: '#aa6464',
        wordleBlue: '#6475aa',
        wordleQuartz: '#49474E',
        wordleBorder: '#878a8c',

        wordleBorderLight: '#d3d6da',
        wordleBorderDark: '#3a3a3c',

        wordleTone2Dark: '#818384',
        wordleTone3: '#878a8c',
        wordleTone3Dark: '#565758',
        wordleTone4: '#d3d6da',
        wordleTone4Dark: '#3a3a3c',

        wordleBlack: '#121213',
        wordleWhite: '#F2F3F4',

        wordleGreenDark: '#538d4e',
        wordleYellowDark: '#b59f3b',
        wordleGreyDark: '#3a3a3c',
        wordleRedDark: '#995a5a',
        wordleBlueDark: '#5a6999',
      },
    },
  },
  plugins: [],
}
