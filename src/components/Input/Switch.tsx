import { FC } from 'react'

interface ISwitchProps {
  isChecked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Switch: FC<ISwitchProps> = ({ onChange, isChecked }) => {
  return (
    <label
      htmlFor='switch'
      className='relative inline-block h-5 w-8 transition-all duration-300 sm:h-7 sm:w-11'
    >
      <input
        id='switch'
        type='checkbox'
        className='h-0 w-0 opacity-0'
        checked={isChecked}
        onChange={onChange}
      ></input>
      <span
        className={`absolute top-0 bottom-0 right-0 left-0 cursor-pointer rounded-full transition-all duration-500 before:absolute before:bottom-[2px] before:left-[2px] before:h-4 before:w-4 before:rounded-full before:bg-w-white before:transition-all before:duration-300 sm:before:h-6 sm:before:w-6 ${
          isChecked
            ? 'bg-w-green before:translate-x-[12px] before:bg-w-white sm:before:translate-x-[16px]'
            : 'bg-w-grey-tone-1'
        }`}
      ></span>
    </label>
  )
}

export default Switch
