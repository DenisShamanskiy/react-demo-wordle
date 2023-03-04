import { FC, useMemo } from 'react'
import LoaderBtn from './Loaders/LoaderBtn'

interface IButtonProps {
  type: 'button' | 'submit' | 'reset'
  text: string
  color?: 'green' | 'red' | 'blue' | 'yellow'
  disabled?: boolean
  size: 's' | 'm' | 'l' | 'full' | 'icon'
  onClick?: () => void
  isLoading?: boolean
  isRounded?: boolean
}

const getColorClasses = (disabled?: boolean): string => {
  if (disabled) {
    return 'disabled:shadow-disabled dark:disabled:shadow-disabledDark disabled:text-w-disabled dark:disabled:text-w-disabled-dark'
  } else {
    return 'text-w-quartz shadow-popped active:shadow-pushed hover:shadow-hover dark:hover:shadow-hoverDark hover:text-w-blue-dark dark:text-w-white-dark dark:shadow-poppedDark dark:hover:text-w-yellow-dark dark:active:shadow-pushedDark'
  }
}

const getSizeClasses = (size: string): string => {
  switch (size) {
    case 's':
      return 'w-32 md:w-36'
    case 'm':
      return 'w-40 md:w-48'
    case 'l':
      return 'w-48 md:w-56'
    case 'full':
      return 'w-full'
    default:
      return ''
  }
}

const getRoundedClasses = (isRounded: boolean | undefined): string =>
  isRounded ? 'rounded-full' : 'rounded'

const BASE_BUTTON_CLASSES =
  'inline-block h-10 text-sm font-medium uppercase md:h-12 md:w-56 md:text-base transition-all'

const Button: FC<IButtonProps> = ({
  type,
  text,
  color,
  disabled,
  size,
  onClick,
  isLoading,
  isRounded,
}) => {
  const computedClasses = useMemo(() => {
    const colorClass = getColorClasses(disabled)
    const sizeClass = getSizeClasses(size)
    const roundedClass = getRoundedClasses(isRounded)
    return [colorClass, sizeClass, roundedClass].join(' ')
  }, [color, disabled, size])

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
    >
      {isLoading ? <LoaderBtn /> : text}
    </button>
  )
}
export default Button
