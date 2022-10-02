/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      smModal: '500px',
    },
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
        moveOpen: {
          '0%': { transform: 'translate(-50%, -100px)' },
          '10%': { transform: 'translate(-50%, 40px)' },
          '12%': { transform: 'translate(-50%, 42px)' },
          '16%': { transform: 'translate(-50%, 40px)' },
          '80%': { transform: 'translate(-50%, 40px)' },
          '85%': { transform: 'translate(-50%, 45px)' },
          '100%': { transform: 'translate(-50%, -100px)' },
        },
        SMmoveOpen: {
          '0%': { transform: 'translate(-50%, -100px)' },
          '10%': { transform: 'translate(-50%, 64px)' },
          '12%': { transform: 'translate(-50%, 66px)' },
          '16%': { transform: 'translate(-50%, 64px)' },
          '80%': { transform: 'translate(-50%, 64px)' },
          '85%': { transform: 'translate(-50%, 69px)' },
          '100%': { transform: 'translate(-50%, -100px)' },
        },
        shake: {
          '0%': { transform: 'translate(-1px, -2px)' },
          '33%': { transform: 'translate(-2px, -2px)' },
          '66%': { transform: 'translate(-2px, -3px)' },
          '100%': { transform: 'translate(-1px, -3px)' },
        },
      },
      animation: {
        modalOpen: 'modalOpen 500ms ease 1',
        modalClosed: 'modalClosed 500ms ease 1',
        moveOpen: 'moveOpen 6s infinite',
        SMmoveOpen: 'SMmoveOpen 6s infinite',
        shake: 'shake .1s infinite alternate',
      },
      boxShadow: {
        modal: '0 4px 23px 0 rgb(0 0 0 / 20%)',
      },
      colors: {
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
