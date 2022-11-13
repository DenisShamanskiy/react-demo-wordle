interface IButtonProps {
  text: string
  color: string
  disabled?: boolean
  style?: React.CSSProperties
  addPropClass?: string
  onClick: () => void
}

const Buttonold = ({ text, color, disabled, style, onClick, addPropClass }: IButtonProps) => {
  // const darkMode = useAppSelector((state) => state.settings.darkMode)

  const getColorButton = (color: string) => {
    switch (color) {
      case 'red':
        return 'btnRed dark:btnRedDark'
      case 'blue':
        return 'btnBlue dark:btnBlueDark'
      // case 'green':
      //   return 'btnGreen btnDisabled dark:btnGreenDark dark:btnDisabledDark '
      case 'green':
        return 'border-btnDisabled hover:shadow-md hover:border-none active:shadow-inner transition duration-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
      case 'yellow':
        return 'btnYellow btnDisabled dark:btnYellowDark dark:btnDisabledDark '
      default:
        return ''
    }
  }

  return (
    <button
      type='button'
      className={`${getColorButton(
        color,
      )} text-base leading-5 py-2 px-4 w-full  rounded border-2 block text-center sm:text-base font-bold uppercase text-wordleWhite select-none transition duration-500 ${
        addPropClass ? addPropClass : ''
      }`}
      onPointerDown={(e) => console.log(e)}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  )
}
export default Buttonold
