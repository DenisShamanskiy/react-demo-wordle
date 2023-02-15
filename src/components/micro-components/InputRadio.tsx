import { FC } from 'react'

type InputRadioProps = {
  checked: boolean
  onChange: () => void
  id: string
  title: string
  peer?: boolean
  customClass?: string
}

const InputRadio: FC<InputRadioProps> = ({
  checked,
  onChange,
  id,
  title,
  peer,
  customClass,
}): JSX.Element => {
  const labelClassName = `ml-2.5 mr-2.5 inline cursor-pointer border-b-2 pb-1 text-left text-sm font-medium uppercase text-w-quartz transition-all duration-500 ease-in-out dark:text-w-white-dark md:pb-2 md:text-lg ${customClass}`

  return (
    <>
      <input
        type='radio'
        id={id}
        name={id}
        checked={checked}
        onChange={onChange}
        className={`${peer ? 'peer hidden' : 'hidden'}`}
      />
      <label htmlFor={id} className={labelClassName}>
        {title}
      </label>
    </>
  )
}

export default InputRadio
