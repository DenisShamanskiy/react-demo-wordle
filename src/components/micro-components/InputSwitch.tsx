interface IInputSwitchProps {
  onChange: () => void
  isChecked: boolean
}

const InputSwitch = ({ onChange, isChecked }: IInputSwitchProps) => {
  return (
    <label className='relative inline-block w-8 md:w-11 h-5 md:h-7 transition-all duration-300'>
      <input
        type='checkbox'
        className='opacity-0 w-0 h-0'
        checked={isChecked}
        onChange={onChange}
      ></input>
      <span
        className={`absolute before:absolute top-0 bottom-0 before:bottom-[2px] right-0 left-0 before:left-[2px] rounded-full cursor-pointer transition-all duration-500    before:h-4 before:w-4 md:before:h-6 md:before:w-6 before:bg-w-white before:rounded-full before:transition-all before:duration-300 ${
          isChecked
            ? 'bg-w-green before:translate-x-[12px] md:before:translate-x-[16px] before:bg-w-white'
            : 'bg-w-grey-tone-1'
        }`}
      ></span>
    </label>
  )
}

export default InputSwitch
