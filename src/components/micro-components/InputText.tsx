import { IFormValues } from 'models/IFormValues'
import { FC } from 'react'
import {
  FieldError,
  Path,
  UseFormRegister,
  RegisterOptions,
} from 'react-hook-form'

type InputTextProps = {
  title?: string
  label: Path<IFormValues>
  type: string
  id: string
  error?: FieldError | undefined
  value?: string | undefined
  register: UseFormRegister<IFormValues>
  option?: RegisterOptions
  fill?: boolean
  autoComplete?: string
  maxLength?: number
  placeholder?: string
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
  autoComplete,
  maxLength,
  placeholder,
}): JSX.Element => {
  return (
    <div className='relative w-full'>
      <input
        {...register(label, option)}
        id={id}
        type={type}
        autoComplete={autoComplete}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`peer relative z-10 box-border h-10 w-full border-none bg-transparent p-2.5 text-base font-semibold tracking-wider text-w-black outline-none autofill:rounded autofill:border-2 autofill:border-solid autofill:border-w-green dark:text-w-white-dark autofill:dark:border-none dark:focus:text-w-black md:h-12 md:text-lg ${
          title
            ? 'mt-1.5 md:mt-2.5'
            : `placeholder-w-quartz placeholder-opacity-50 dark:placeholder-w-white-dark dark:placeholder-opacity-50 ${
                error
                  ? 'dark:placeholder-w-black dark:placeholder-opacity-50'
                  : 'dark:focus:placeholder-w-black dark:focus:placeholder-opacity-50'
              }`
        }`}
      ></input>
      {title ? (
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
      ) : null}
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
