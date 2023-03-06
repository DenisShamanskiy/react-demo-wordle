import { FC, useMemo } from 'react'
import { useAppSelector } from 'utils/hook'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { PlacesType, Tooltip } from 'react-tooltip'
import { disabledClasses, shadowClasses } from 'utils/constants'

interface IButtonIconProps {
  icon: string
  position?: 'header' | 'close' | 'password'
  size?: 'close' | 'xs' | 's' | 'm' | 'l' | 'full'
  disabled?: boolean
  tooltip?: string
  additionalStyles?: string
  customClass?: string
  onClick: () => void
  place?: PlacesType
  children?: React.ReactNode
  isShadow?: boolean
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
    case 'close':
      return 'w-6 md:w-7'
    case 'xs':
      return 'w-5 md:w-6'
    case 's':
      return 'w-6'
    case 'm':
      return 'w-7 md:w-8'
    case 'l':
      return 'w-10 md:w-12'
    case 'full':
      return 'w-full'
    default:
      return ''
  }
}

const ButtonIcon: FC<IButtonIconProps> = ({
  icon,
  position,
  size,
  disabled,
  tooltip,
  additionalStyles,
  onClick,
  place,
  children,
  customClass,
  isShadow,
}) => {
  const darkTheme = useAppSelector((state) => state.settings.darkMode)

  const computedClasses = useMemo(() => {
    const positionClass = getPositionClasses(position!)
    const sizeClass = getSizeClasses(size!)
    return [
      positionClass,
      sizeClass,
      additionalStyles && additionalStyles,
      isShadow && shadowClasses,
      disabled && disabledClasses,
    ].join(' ')
  }, [position, size, additionalStyles, disabledClasses])

  return (
    <>
      <button
        type='button'
        className={`flex items-center justify-center rounded-full transition-all ${computedClasses} ${customClass}`}
        disabled={disabled}
        onClick={onClick}
        data-tooltip-id={tooltip ? icon : undefined}
        data-tooltip-content={tooltip ? tooltip : undefined}
        data-tooltip-delay-show={tooltip ? 1000 : undefined}
      >
        <span className='w-full'>
          {globalSvgSelector(icon, darkTheme)}
          {children}
        </span>
      </button>

      {tooltip && (
        <Tooltip
          id={icon}
          place={place}
          className={`${darkTheme ? 'custom-tooltip_dark' : 'custom-tooltip'}`}
        />
      )}
    </>
  )
}

export default ButtonIcon
