import { IFormValues } from 'models/IFormValues'
import { FC, useMemo } from 'react'
import {
  FieldError,
  Path,
  UseFormRegister,
  RegisterOptions,
} from 'react-hook-form'

interface IInputProps {
  name: Path<IFormValues>
  type: string
  id: string
  isLabel?: boolean
  error?: FieldError | undefined
  value?: string | undefined
  register: UseFormRegister<IFormValues>
  option?: RegisterOptions
  fill?: boolean
  autoComplete?: string
  maxLength?: number
  placeholder?: string
  isIconRight?: boolean
}

const Input: FC<IInputProps> = ({
  name,
  type,
  id,
  isLabel,
  error,
  value,
  register,
  option,
  fill,
  autoComplete,
  maxLength,
  placeholder,
  isIconRight,
}): JSX.Element => {
  const getPaddingClasses = (isIconRight: boolean | undefined): string =>
    isIconRight ? 'py-2.5 pr-12 pl-5' : 'py-2.5 px-5'

  const getLabelClasses = (): string => 'mt-1.5 sm:mt-3'
  const getPlaceholderClasses = (): string =>
    'placeholder-w-quartz placeholder-opacity-50 dark:placeholder-w-white-dark dark:placeholder-opacity-50'

  const computedClasses = useMemo(() => {
    const paddingClass = getPaddingClasses(isIconRight)
    const labelClass = isLabel && getLabelClasses()
    const placeholderClass = placeholder && getPlaceholderClasses()

    return [paddingClass, labelClass, placeholderClass]
      .filter((item) => !!item)
      .join(' ')
  }, [type, isLabel, placeholder])

  return (
    <>
      <input
        {...register(name, option)}
        id={id}
        type={type}
        autoComplete={autoComplete}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`peer relative z-10 box-border h-10 w-full border-none bg-transparent text-base font-semibold tracking-wider text-w-black outline-none autofill:rounded-full dark:text-w-white-dark autofill:dark:border-none dark:focus:text-w-white-dark sm:h-12 sm:text-lg ${computedClasses}`}
      ></input>
      <span
        className={`pointer-events-none absolute left-0 bottom-0 z-[9] w-full rounded-full bg-w-grey-tone-2 transition-all duration-500 peer-focus:h-10 dark:bg-w-grey-tone-3 sm:peer-focus:h-12 sm:peer-focus:w-full ${
          value || error || fill ? 'h-10 sm:h-12' : 'h-0.5'
        }`}
      ></span>
      <span
        className={`absolute left-0 text-xs text-red-500 transition-all duration-500 sm:text-sm ${
          error ? ' -bottom-5 opacity-100 sm:-bottom-6' : 'bottom-0 opacity-0'
        }`}
      >
        {error?.message}
      </span>
    </>
  )
}

export default Input
