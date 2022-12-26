import { FC } from 'react'

interface IButtonProps {
  type: 'button' | 'submit' | 'reset'
  text: string
  color: string
  disabled?: boolean
  size: string
  onClick?: () => void
}

const Button: FC<IButtonProps> = ({
  type,
  text,
  color,
  disabled,
  size,
  onClick,
}) => {
  const addClassColor = (color: string): string => {
    if (disabled) {
      return 'disabled:border-w-disabled dark:disabled:border-w-disabled-dark disabled:text-w-disabled dark:disabled:text-w-disabled-dark'
    } else {
      switch (color) {
        case 'green':
          return 'hover:bg-w-green dark:hover:bg-w-green-dark hover:border-w-green dark:hover:border-w-green-dark hover:text-w-white dark:hover:text-w-black'
        case 'yellow':
          return 'hover:bg-w-yellow dark:hover:bg-w-yellow-dark hover:border-w-yellow dark:hover:border-w-yellow-dark hover:text-w-white dark:hover:text-w-black'
        case 'red':
          return 'hover:bg-w-red dark:hover:bg-w-red-dark hover:border-w-red dark:hover:border-w-red-dark hover:text-w-white dark:hover:text-w-black'
        case 'blue':
          return 'hover:bg-w-blue dark:hover:bg-w-blue-dark hover:border-w-blue dark:hover:border-w-blue-dark hover:text-w-white dark:hover:text-w-black'
        default:
          return ''
      }
    }
  }

  const addSize = (size: string): string => {
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

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${addSize(
        size,
      )} inline-block h-10 rounded border-2 border-w-quartz bg-transparent text-sm font-bold uppercase text-w-quartz transition-all duration-300 dark:border-w-white-dark dark:text-w-white-dark md:h-12 md:text-lg ${
        disabled
          ? 'disabled:cursor-not-allowed'
          : 'cursor-pointer active:scale-95'
      }  ${addClassColor(color)}`}
    >
      {text}
    </button>
  )
}
export default Button
