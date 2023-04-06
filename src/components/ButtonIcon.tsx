import { FC, useMemo } from 'react'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { PlacesType, Tooltip } from 'react-tooltip'
import { disabledClasses, shadowClasses } from 'utils/constants'
import { IButtonProps } from './Button'
import { useAppSelector } from 'hook'

interface IButtonIconProps extends IButtonProps {
  icon: string
  position?: 'header' | 'close' | 'password'
  tooltip?: string
  additionalStyles?: string
  customClass?: string
  place?: PlacesType
  isShadow?: boolean
}

const getPositionClasses = (position: string): string => {
  switch (position) {
    case 'header':
      return 'absolute left-4 sm:left-5'
    case 'close':
      return 'absolute -top-3 -right-3 sm:-top-4 sm:-right-4 hover:rotate-180'
    case 'password':
      return 'absolute right-3.5 bottom-2.5 sm:bottom-3 z-10 inline-block'
    default:
      return ''
  }
}

const getSizeClasses = (size: string): string => {
  switch (size) {
    case 'close':
      return 'w-6 sm:w-7'
    case 'xs':
      return 'w-5 sm:w-6'
    case 's':
      return 'w-6'
    case 'm':
      return 'w-7 sm:w-8'
    case 'ml':
      return 'w-9 sm:w-11'
    case 'l':
      return 'w-10 sm:w-12'
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
