import { FC, useMemo } from 'react'
import { useAppSelector } from 'utils/hook'
import { globalSvgSelector } from 'utils/globalSvgSelector'

interface IButtonIconProps {
  icon: string
  position?: 'header' | 'close'
  size: 'header' | 'close' | 's' | 'm'
  disabled?: boolean
  onClick: () => void
}

const getPositionClasses = (position: string): string => {
  switch (position) {
    case 'header':
      return 'absolute left-4 md:left-5 lg:left-0'
    case 'close':
      return 'absolute -top-3 -right-3 md:-top-4 md:-right-4 hover:rotate-180'
    default:
      return ''
  }
}

const getSizeClasses = (size: string): string => {
  switch (size) {
    case 'header':
      return 'w-7 md:w-9'
    case 'close':
      return 'w-6 md:w-7'
    case 's':
      return 'w-6'
    case 'm':
      return 'w-7 md:w-8'
    default:
      return ''
  }
}

const BASE_BUTTON_CLASSES =
  'inline-block rounded transition duration-300 ease-in-out hover:scale-110 disabled:pointer-events-none disabled:opacity-40'

const ButtonIcon: FC<IButtonIconProps> = ({
  icon,
  position,
  size,
  disabled,
  onClick,
}) => {
  const darkTheme = useAppSelector((state) => state.settings.darkMode)

  const computedClasses = useMemo(() => {
    const positionClass = getPositionClasses(position!)
    const sizeClass = getSizeClasses(size!)
    return [positionClass, sizeClass].join(' ')
  }, [position, size])

  return (
    <button
      type='button'
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {globalSvgSelector(icon, darkTheme)}
    </button>
  )
}

export default ButtonIcon
