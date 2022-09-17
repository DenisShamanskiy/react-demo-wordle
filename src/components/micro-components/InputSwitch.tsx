import { useState } from "react";


const InputSwitch = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="relative inline-block w-[32px] h-[20px]">
            <input type="checkbox" className="opacity-0 w-0 h-0" checked={isChecked} onChange={handleOnChange}></input>
            <span className={`absolute top-0 bottom-0 right-0 left-0 rounded-full cursor-pointer transition-all duration-500 before:absolute before:left-[2px] before:bottom-[2px] before:h-[16px] before:w-[16px] before:bg-[#dedede] before:rounded-full before:transition-all before:duration-500 ${isChecked ? "bg-myGreen before:translate-x-[12px] before:bg-[#dedede]" : "bg-[color:var(--color-tone-3)]"}`}></span>
        </label>
    );
}

export default InputSwitch;