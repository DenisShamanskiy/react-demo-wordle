interface IInputSwitchProps {
  onChange: () => void
  isChecked: boolean
}

const InputSwitch = ({ onChange, isChecked }: IInputSwitchProps) => {
  return (
    <label className='relative inline-block w-8 h-5 sm:w-11 sm:h-7 transition-all duration-300'>
      <input
        type='checkbox'
        className='opacity-0 w-0 h-0'
        checked={isChecked}
        onChange={onChange}
      ></input>
      <span
        className={`absolute before:absolute top-0 bottom-0 before:bottom-[2px] right-0 left-0 before:left-[2px] rounded-full cursor-pointer transition-all duration-500    before:h-4 before:w-4 sm:before:h-6 sm:before:w-6 before:bg-wordleWhite before:rounded-full before:transition-all before:duration-300 ${
          isChecked
            ? 'bg-wordleGreen before:translate-x-[12px] sm:before:translate-x-[16px] before:bg-wordleWhite'
            : 'bg-wordleBorder'
        }`}
      ></span>
    </label>
  )
}

export default InputSwitch
