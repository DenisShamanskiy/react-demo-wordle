import { FC, useMemo } from 'react'
import { useAppSelector } from 'utils/hook'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { Tooltip } from 'react-tooltip'

interface IButtonIconProps {
  icon: string
  position?: 'header' | 'close' | 'password'
  size: 'header' | 'close' | 'xs' | 's' | 'm'
  disabled?: boolean
  tooltip?: string
  additionalStyles?: string
  onClick: () => void
}

const getPositionClasses = (position: string): string => {
  switch (position) {
    case 'header':
      return 'absolute left-4 md:left-5 lg:left-0'
    case 'close':
      return 'absolute -top-3 -right-3 md:-top-4 md:-right-4 hover:rotate-180'
    case 'password':
      return 'absolute right-3.5 bottom-2.5 md:bottom-3  z-10 inline-block'
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
    case 'xs':
      return 'w-5 md:w-6'
    case 's':
      return 'w-6'
    case 'm':
      return 'w-7 md:w-8'
    default:
      return ''
  }
}

const BASE_BUTTON_CLASSES =
  'inline-block rounded transition duration-500 ease-in-out disabled:pointer-events-none disabled:opacity-40'

const ButtonIcon: FC<IButtonIconProps> = ({
  icon,
  position,
  size,
  disabled,
  tooltip,
  additionalStyles,
  onClick,
}) => {
  const darkTheme = useAppSelector((state) => state.settings.darkMode)

  const computedClasses = useMemo(() => {
    const positionClass = getPositionClasses(position!)
    const sizeClass = getSizeClasses(size!)
    return [
      positionClass,
      sizeClass,
      additionalStyles && additionalStyles,
    ].join(' ')
  }, [position, size, additionalStyles])

  return (
    <>
      <button
        type='button'
        className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
        disabled={disabled}
        onClick={onClick}
        data-tooltip-id={icon}
        data-tooltip-content={tooltip}
        data-tooltip-delay-show={1000}
      >
        {globalSvgSelector(icon, darkTheme)}
      </button>
      <Tooltip
        id={icon}
        place='right'
        className={`${darkTheme ? 'custom-tooltip_dark' : 'custom-tooltip'}`}
      />
    </>
  )
}

export default ButtonIcon
