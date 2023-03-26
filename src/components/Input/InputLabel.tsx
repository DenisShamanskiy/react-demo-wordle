import { FC } from 'react'
import { FieldError } from 'react-hook-form'

interface IInputLabel {
  id: string
  title: string
  value: string | undefined
  error: FieldError | undefined
  fill?: boolean
}

const InputLabel: FC<IInputLabel> = ({
  id,
  value,
  error,
  fill,
  title,
}): JSX.Element => {
  return (
    <label
      htmlFor={id}
      className={`pointer-events-none absolute left-0 px-0 pt-5 pb-2.5 font-semibold tracking-wider text-w-black transition-all duration-500 peer-focus:-translate-y-[34px] peer-focus:translate-x-5 peer-focus:text-xs dark:text-w-white-dark sm:peer-focus:text-sm ${
        value || error || fill
          ? '-translate-y-[34px] text-xs sm:text-sm'
          : '-translate-y-[0] text-sm sm:text-lg'
      }`}
    >
      {title}
    </label>
  )
}

export default InputLabel
