/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
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
        newGameShow: {
          '0%': {
            transform: 'scale(0.2)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        newGameHide: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0.2)',
            opacity: '0',
          },
        },
        notifyShow: {
          '0%': { transform: 'translate(-50%, 0%)' },
          '12%': { transform: 'translate(-50%, 90%)' },
          '16%': { transform: 'translate(-50%, 80%)' },
          '100%': { transform: 'translate(-50%, 80%)' },
        },
        notifyHide: {
          '0%': { transform: 'translate(-50%, 80%)' },
          '25%': { transform: 'translate(-50%, 90%)' },
          '100%': { transform: 'translate(-50%, -40%)' },
        },
        notifyShowMD: {
          '0%': { transform: 'translate(-50%, 0%)' },
          '12%': { transform: 'translate(-50%, 130%)' },
          '16%': { transform: 'translate(-50%, 120%)' },
          '100%': { transform: 'translate(-50%, 120%)' },
        },
        notifyHideMD: {
          '0%': { transform: 'translate(-50%, 120%)' },
          '25%': { transform: 'translate(-50%, 130%)' },
          '100%': { transform: 'translate(-50%, -120%)' },
        },
        errorShow: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: '-translateY(120px)',
          },
        },
        errorHidden: {
          '0%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        loaderCircleScale: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(0.7)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0',
          },
        },
        loaderBtn: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.3',
            transform: 'scale(2)',
          },
          '100%': {
            transform: 'scale(1)',
            background: '#787c7e',
          },
        },
      },
      animation: {
        modalOpen: 'modalOpen 500ms ease 1',
        modalClosed: 'modalClosed 500ms ease 1',
        newGameShow: 'newGameShow 500ms ease 1 forwards',
        newGameHide: 'newGameHide 500ms ease 1 forwards',
        errorShow: 'errorShow 500ms ease 1',
        errorHidden: 'errorHidden 500ms ease 1',
        notifyShow: 'notifyShow 4s ease 1 forwards',
        notifyHide: 'notifyHide 1s ease 1 forwards',
        notifyShowMD: 'notifyShowMD 4s ease 1 forwards',
        notifyHideMD: ' notifyHideMD 1s ease 1 forwards',
        loaderCircleScaleBefore: 'loaderCircleScale 1s linear 0s infinite',
        loaderCircleScaleAfter: 'loaderCircleScale 1s linear 0.5s infinite',
        loaderBtn: 'loaderBtn 1s infinite',
      },
      boxShadow: {
        modal: '0 4px 23px 0 #c1d9f0',
        modalDark: '0 4px 23px 0 rgba(0, 0, 0, 0.8)',
        glossWhite: '0 4px 30px #c1d9f0',
        glossBlack: '0 4px 30px rgba(0, 0, 0, 0.8)',
        active:
          'inset 0.2rem 0.2rem 0.4rem #d5e0f3, inset -0.3rem -0.3rem 0.4rem #ffffff',
        inactive:
          '0.3rem 0.3rem 0.6rem #c1d9f0, -0.2rem -0.2rem 0.5rem #ffffff',
        activeDark:
          'inset 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.8), inset -0.2rem -0.2rem 0.3rem rgba(255, 255, 255, 0.1)',
        inactiveDark:
          '0.3rem 0.3rem 0.6rem rgba(0, 0, 0, 0.8), -0.2rem -0.2rem 0.5rem rgba(255, 255, 255, 0.1)',
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
