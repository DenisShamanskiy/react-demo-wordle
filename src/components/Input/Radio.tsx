import { FC } from 'react'

interface IRadioProps {
  checked: boolean
  onChange: () => void
  id: string
  title: string
  peer?: boolean
  customClass?: string
}

const Radio: FC<IRadioProps> = ({
  checked,
  onChange,
  id,
  title,
  peer,
  customClass,
}): JSX.Element => {
  const labelClassName = `flex h-full w-1/2 cursor-pointer items-center justify-center rounded-full text-sm font-medium uppercase sm:text-base ${customClass}`
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
      <label htmlFor={id} className={`${labelClassName}`}>
        {title}
      </label>
    </>
  )
}

export default Radio
