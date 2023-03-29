/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        bitter: ['Bitter'],
      },
      keyframes: {
        appearDialog: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },
        disappearDialog: {
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
        appearDialog: 'appearDialog 500ms ease 1',
        disappearDialog: 'disappearDialog 500ms ease 1',
        newGameShow: 'newGameShow 500ms ease 1 forwards',
        newGameHide: 'newGameHide 500ms ease 1 forwards',
        errorShow: 'errorShow 500ms ease 1',
        errorHidden: 'errorHidden 500ms ease 1',
        loaderCircleScaleBefore: 'loaderCircleScale 1s linear 0s infinite',
        loaderCircleScaleAfter: 'loaderCircleScale 1s linear 0.5s infinite',
        loaderBtn: 'loaderBtn 1s infinite',
      },
      boxShadow: {
        modal: '0 4px 23px 0 rgba(169, 170, 170, 0.945)',
        modalDark: '0 4px 23px 0 rgba(0, 0, 0, 0.56)',
        glossWhite: '0 4px 30px rgba(169, 170, 170, 0.945)',
        glossBlack: '0 4px 30px rgba(0, 0, 0, 0.56)',
        popped:
          '-2px -2px 2px #ffffffb2, 2px 2px 2px rgba(169, 170, 170, 0.945), 0 0 0 #ffffffb2 inset, 0 0 0 rgba(169, 170, 170, 0.945) inset',
        pushed:
          '0 0 0 #ffffffb2, 0 0 0 rgba(169, 170, 170, 0.945), -2px -2px 2px #ffffffb2 inset, 2px 2px 2px rgba(169, 170, 170, 0.945) inset',
        hover:
          '-1px -1px 1px #ffffffb2, 1px 1px 1px rgba(169, 170, 170, 0.945), 0 0 0 #ffffffb2 inset, 0 0 0 rgba(169, 170, 170, 0.945) inset',
        disabled:
          '1px 1px 1px #ffffffb2, -1px -1px 1px rgba(169, 170, 170, 0.945), 1px 1px 1px #ffffffb2 inset, -1px -1px 1px rgba(169, 170, 170, 0.945) inset',
        poppedDark:
          '-2px -2px 2px rgba(255, 255, 255, 0.08), 2px 2px 2px rgba(0, 0, 0, 0.56), 0 0 0 rgba(255, 255, 255, 0.08) inset, 0 0 0 rgba(0, 0, 0, 0.56) inset',
        pushedDark:
          '0 0 0 rgba(255, 255, 255, 0.08), 0 0 0 rgba(0, 0, 0, 0.56), -2px -2px 2px rgba(255, 255, 255, 0.08) inset, 2px 2px 2px rgba(0, 0, 0, 0.56) inset',
        hoverDark:
          '-1px -1px 1px rgba(255, 255, 255, 0.08), 1px 1px 1px rgba(0, 0, 0, 0.56), 0 0 0 rgba(255, 255, 255, 0.08) inset, 0 0 0 rgba(0, 0, 0, 0.56) inset',
        disabledDark:
          '1px 1px 1px rgba(255, 255, 255, 0.08), -1px -1px 1px rgba(0, 0, 0, 0.56), 1px 1px 1px rgba(255, 255, 255, 0.08) inset, -1px -1px 1px rgba(0, 0, 0, 0.56) inset',
      },
      gridTemplateRows: {
        56: 'repeat(6, 56px)',
        64: 'repeat(6, 64px)',
      },
      gridTemplateColumns: {
        56: 'repeat(5, 56px)',
        64: 'repeat(5, 64px)',
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
