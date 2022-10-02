import { useAppSelector } from 'utils/hook'

interface IButtonProps {
  text: string
  color: string
  disabled?: boolean
  style?: React.CSSProperties
  onClick: () => void
}

const Button = ({ text, color, disabled, style, onClick }: IButtonProps) => {
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  const getColorButton = (color: string) => {
    switch (color) {
      case 'red':
        return `w-4/12 h-9 text-wordleWhite ${
          darkMode
            ? 'border-2 border-wordleRedDark hover:border-wordleRedDark bg-wordleBlack hover:bg-wordleRedDark text-wordleWhite'
            : 'border-2 border-wordleRed bg-wordleRed hover:bg-wordleWhite text-wordleWhite hover:text-wordleRed'
        }`
      case 'blue':
        return `w-4/12 h-9 text-wordleWhite ${
          darkMode
            ? 'border-2 border-wordleBlueDark bg-wordleBlack hover:bg-wordleBlueDark text-wordleWhite'
            : 'border-2 border-wordleBlue bg-wordleBlue hover:bg-wordleWhite text-wordleWhite hover:text-wordleBlue'
        }`
      case 'green':
        return `w-full h-11 text-wordleWhite ${
          darkMode
            ? 'border-2 border-wordleGreenDark bg-wordleBlack hover:bg-wordleGreenDark text-wordleGreenDark hover:text-wordleWhite disabled:bg-wordleBlack disabled:border-wordleTone4Dark disabled:text-wordleTone4Dark'
            : 'border-2 border-wordleGreen bg-wordleGreen hover:bg-wordleWhite text-wordleWhite hover:text-wordleGreen disabled:bg-wordleWhite disabled:border-wordleTone4 disabled:text-wordleTone4'
        }`
      case 'yellow':
        return `w-full h-11 text-wordleWhite ${
          darkMode
            ? 'border-2 border-wordleYellowDark bg-wordleBlack hover:bg-wordleYellowDark text-wordleYellowDark hover:text-wordleWhite disabled:bg-wordleBlack disabled:border-wordleTone4Dark disabled:text-wordleTone4Dark'
            : 'border-2 border-wordleYellow bg-wordleYellow hover:bg-wordleWhite text-wordleWhite hover:text-wordleYellow disabled:bg-wordleWhite disabled:border-wordleTone4 disabled:text-wordleTone4'
        }`
      default:
        return ''
    }
  }

  return (
    <button
      type='button'
      className={`${getColorButton(
        color,
      )} mx-auto rounded block text-center font-bold uppercase select-none transition duration-300`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  )
}

export default Button
