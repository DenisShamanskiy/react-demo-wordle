import { FC, useMemo } from 'react'

interface IButtonProps {
  type: 'button' | 'submit' | 'reset'
  text: string
  color?: 'green' | 'red' | 'blue' | 'yellow'
  disabled?: boolean
  size: 's' | 'm' | 'l' | 'full' | 'icon'
  onClick?: () => void
}

const getColorClasses = (color: string, disabled?: boolean): string => {
  if (disabled) {
    return 'disabled:border-w-disabled dark:disabled:border-w-disabled-dark disabled:text-w-disabled dark:disabled:text-w-disabled-dark'
  } else {
    switch (color) {
      case 'green':
        return 'border-w-green bg-w-green hover:border-w-green dark:border-w-green-dark dark:bg-w-green-dark dark:hover:border-w-green-dark'
      case 'yellow':
        return 'border-w-yellow bg-w-yellow hover:border-w-yellow dark:border-w-yellow-dark dark:bg-w-yellow-dark dark:hover:border-w-yellow-dark'
      case 'red':
        return 'border-w-red bg-w-red hover:border-w-red dark:border-w-red-dark dark:bg-w-red-dark dark:hover:border-w-red-dark'
      case 'blue':
        return 'border-w-blue bg-w-blue hover:border-w-blue dark:border-w-blue-dark dark:bg-w-blue-dark dark:hover:border-w-blue-dark'
      default:
        return ''
    }
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

const BASE_BUTTON_CLASSES =
  'inline-block h-10 rounded border-2 text-sm font-medium text-w-white transition-all duration-300 hover:bg-transparent hover:text-w-quartz dark:text-w-black dark:hover:bg-transparent dark:hover:text-w-white-dark md:h-12 md:text-lg'

const Button: FC<IButtonProps> = ({
  type,
  text,
  color,
  disabled,
  size,
  onClick,
}) => {
  const computedClasses = useMemo(() => {
    const colorClass = getColorClasses(color!, disabled)
    const sizeClass = getSizeClasses(size)
    return [colorClass, sizeClass].join(' ')
  }, [color, disabled, size])

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
    >
      {text}
    </button>
  )
}
export default Button
