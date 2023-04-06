import { FC, InputHTMLAttributes } from 'react'

export interface ISwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Switch: FC<ISwitchProps> = ({ isChecked, onChange }) => {
  return (
    <label
      htmlFor='switch'
      className='relative inline-block h-5 w-9 rounded-full shadow-popped transition-all duration-300 hover:shadow-hover dark:shadow-poppedDark sm:h-6 sm:w-11'
    >
      <input
        id='switch'
        type='checkbox'
        className='h-0 w-0 opacity-0'
        checked={isChecked}
        onChange={onChange}
      ></input>
      <span
        className={`absolute top-0 bottom-0 right-0 left-0 cursor-pointer rounded-full transition-all duration-500 before:absolute before:bottom-[3px] before:left-[3px] before:h-3.5 before:w-3.5 before:rounded-full before:transition-all before:duration-500 sm:before:h-[18px] sm:before:w-[18px] ${
          isChecked
            ? 'bg-w-green before:translate-x-[16px] before:bg-w-white sm:before:translate-x-[20px]'
            : 'bg-w-white before:bg-[#bdc0c4] dark:bg-[#222]'
        }`}
      ></span>
    </label>
  )
}

export default Switch
