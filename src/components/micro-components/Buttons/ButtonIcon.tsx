import { useAppSelector } from 'utils/hook'
import { globalSvgSelector } from 'utils/globalSvgSelector'

interface IButtonIconProps {
  icon: string
  disabled?: boolean
  style?: React.CSSProperties
  onClick: () => void
}

const ButtonIcon = ({ onClick, disabled, icon, style }: IButtonIconProps) => {
  const darkTheme = useAppSelector((state) => state.settings.darkMode)

  return (
    <button
      type='button'
      className={`${
        icon === 'close'
          ? 'absolute top-0 right-0 min-w-[24px]'
          : 'min-w-[28px] md:min-w-[32px]'
      } block rounded transition duration-300 ease-in-out hover:scale-110 disabled:pointer-events-none disabled:opacity-40`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {globalSvgSelector(icon, darkTheme)}
    </button>
  )
}

export default ButtonIcon
