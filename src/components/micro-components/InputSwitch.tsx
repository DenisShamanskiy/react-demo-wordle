interface IInputSwitchProps {
  onChange: () => void;
  isChecked: boolean
}

const InputSwitch = ({ onChange, isChecked }: IInputSwitchProps) => {

  return (
    <label className="relative inline-block w-[32px] h-[20px]">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={isChecked}
        onChange={onChange}
      ></input>
      <span
        className={`absolute before:absolute top-0 bottom-0 before:bottom-[2px] right-0 left-0 before:left-[2px] rounded-full cursor-pointer transition-all duration-500    before:h-[16px] before:w-[16px] before:bg-white before:rounded-full before:transition-all before:duration-300 ${
          isChecked
            ? "bg-wordleGreen before:translate-x-[12px] before:bg-white"
            : "bg-wordleBorder"
        }`}
      ></span>
    </label>
  );
};

export default InputSwitch;
