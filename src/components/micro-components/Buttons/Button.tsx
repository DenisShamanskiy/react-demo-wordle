import { FC } from 'react'

interface IButtonProps {
  type: 'button' | 'submit' | 'reset'
  text: string
  color: string
  disabled?: boolean
  onClick?: () => void
}

const Button: FC<IButtonProps> = ({ type, text, color, disabled, onClick }) => {
  const addClassColor = (color: string): string => {
    if (disabled) {
      return 'disabled:border-w-disabled dark:disabled:border-w-disabled-dark disabled:text-w-disabled dark:disabled:text-w-disabled-dark cursor-not-allowed disabled:active:scale-100'
    } else {
      switch (color) {
        case 'green':
          return 'hover:bg-w-green dark:hover:bg-w-green-dark hover:border-w-green dark:hover:border-w-green-dark hover:text-w-black dark:hover:text-w-black'
        case 'yellow':
          return 'hover:bg-w-yellow dark:hover:bg-w-yellow-dark hover:border-w-yellow dark:hover:border-w-yellow-dark hover:text-w-black dark:hover:text-w-black'
        case 'red':
          return 'hover:bg-w-red dark:hover:bg-w-red-dark hover:border-w-red dark:hover:border-w-red-dark hover:text-w-black dark:hover:text-w-black'
        case 'blue':
          return 'hover:bg-w-blue dark:hover:bg-w-blue-dark hover:border-w-blue dark:hover:border-w-blue-dark hover:text-w-black dark:hover:text-w-black'
        default:
          return ''
      }
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`min-w-full h-auto py-2.5 px-3 inline-block rounded border-2 border-w-quartz dark:border-w-white-dark bg-transparent text-sm md:text-lg font-bold uppercase text-w-quartz dark:text-w-white-dark transition-all duration-300 cursor-pointer active:scale-95 ${addClassColor(
        color,
      )}`}
    >
      {text}
    </button>
  )
}
export default Button
