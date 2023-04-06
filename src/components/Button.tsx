import { FC, ReactNode, useMemo } from 'react'
import LoaderBtn from './Loaders/LoaderBtn'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  color?: 'green' | 'red' | 'blue' | 'yellow'
  size?: 'xs' | 's' | 'm' | 'ml' | 'l' | 'full'
  isLoading?: boolean
  isRounded?: boolean
  children?: ReactNode
  customClass?: string
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
      return 'w-32 sm:w-36'
    case 'm':
      return 'w-40 sm:w-48'
    case 'l':
      return 'w-48 sm:w-56'
    case 'full':
      return 'w-full'
    default:
      return ''
  }
}

const getRoundedClasses = (isRounded: boolean | undefined): string =>
  isRounded ? 'rounded-full' : 'rounded'

const BASE_BUTTON_CLASSES =
  'inline-block h-10 text-sm font-medium uppercase sm:h-12 sm:text-base transition-all'

const Button: FC<IButtonProps> = ({
  type,
  text,
  color,
  disabled,
  size,
  onClick,
  isLoading,
  isRounded,
  children,
  customClass,
}) => {
  const computedClasses = useMemo(() => {
    const colorClass = getColorClasses(disabled)
    const sizeClass = getSizeClasses(size!)
    const roundedClass = getRoundedClasses(isRounded)
    return [colorClass, sizeClass, roundedClass].join(' ')
  }, [color, disabled, size])

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${BASE_BUTTON_CLASSES} ${computedClasses} ${customClass}`}
    >
      <>
        {isLoading ? <LoaderBtn /> : text}
        {children}
      </>
    </button>
  )
}
export default Button
