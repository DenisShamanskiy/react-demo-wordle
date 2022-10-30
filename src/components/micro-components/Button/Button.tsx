import { useAppSelector } from 'utils/hook'

interface IButtonProps {
  text: string
  color: string
  disabled?: boolean
  style?: React.CSSProperties
  addPropClass?: string
  onClick: () => void
}

const Button = ({ text, color, disabled, style, onClick, addPropClass }: IButtonProps) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const getColorButton = (color: string) => {
    switch (color) {
      case 'red':
        return `${darkMode ? 'btnRedDark' : 'btnRed'}`
      case 'blue':
        return `${darkMode ? 'btnBlueDark' : 'btnBlue'}`
      case 'green':
        return `${darkMode ? 'btnGreenDark btnDisabledDark' : 'btnGreen btnDisabled'}`
      case 'yellow':
        return `${darkMode ? 'btnYellowDark btnDisabledDark' : 'btnYellow btnDisabled'}`
      default:
        return ''
    }
  }

  return (
    <button
      type='button'
      className={`${getColorButton(
        color,
      )} w-full h-9 sm:h-10 rounded border-2 block text-center text-sm sm:text-base font-bold uppercase text-wordleWhite select-none transition duration-300 ${
        addPropClass ? addPropClass : ''
      }`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  )
}
export default Button
