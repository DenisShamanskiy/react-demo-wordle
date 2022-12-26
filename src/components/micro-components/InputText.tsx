import { IFormValues } from 'models/IFormValues'
import { FC } from 'react'
import {
  FieldError,
  Path,
  UseFormRegister,
  RegisterOptions,
} from 'react-hook-form'

type InputTextProps = {
  title: string
  label: Path<IFormValues>
  type: string
  id: string
  error?: FieldError | undefined
  value: string | undefined
  register: UseFormRegister<IFormValues>
  option: RegisterOptions
  fill?: boolean
}

const InputText: FC<InputTextProps> = ({
  label,
  title,
  type,
  id,
  error,
  value,
  register,
  option,
  fill,
}): JSX.Element => {
  return (
    <div className='relative w-full'>
      <input
        {...register(label, option)}
        id={id}
        type={type}
        className='peer relative z-10 mt-1.5 box-border h-10 w-full border-none bg-transparent p-2.5 text-base font-semibold tracking-wider text-w-black outline-none autofill:rounded autofill:border-2 autofill:border-solid autofill:border-w-green autofill:dark:border-none md:mt-2.5 md:h-12 md:text-lg'
      ></input>
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 px-0 pt-5 pb-2.5 font-semibold tracking-wider text-w-black transition-all duration-500 peer-focus:-translate-y-[34px] peer-focus:text-xs dark:text-w-white-dark md:peer-focus:text-sm ${
          value || error || fill
            ? '-translate-y-[34px] text-xs md:text-sm'
            : '-translate-y-[0] text-sm md:text-lg'
        }`}
      >
        {title}
      </label>
      <span
        className={`pointer-events-none absolute left-0 bottom-0 z-[9] w-full rounded bg-[#CBDFF8] transition-all duration-500 peer-focus:h-10 dark:bg-w-white-dark md:peer-focus:h-12 ${
          value || error || fill ? 'h-10 md:h-12' : 'h-0.5'
        }`}
      ></span>
      <span
        className={`absolute left-0 text-xs text-red-500 transition-all duration-500 md:text-sm ${
          error ? ' -bottom-5 opacity-100 md:-bottom-6' : 'bottom-0 opacity-0'
        }`}
      >
        {error?.message}
      </span>
    </div>
  )
}

export default InputText
