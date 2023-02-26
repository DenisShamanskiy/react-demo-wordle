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
    return 'disabled:border-w-disabled dark:disabled:border-w-disabled-dark disabled:text-w-disabled dark:disabled:text-w-disabled-dark'
  } else {
    return 'border-transparent text-w-quartz shadow-inactive hover:text-w-blue-dark active:shadow-active dark:text-w-white-dark dark:shadow-inactiveDark dark:hover:text-w-yellow-dark dark:active:shadow-activeDark'
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
  'inline-block h-10 border text-sm font-medium uppercase transition-all duration-500 md:h-12 md:w-56 md:text-base'

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
