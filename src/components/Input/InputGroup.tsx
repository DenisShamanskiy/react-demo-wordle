import { FC } from 'react'

interface IInputGroupProps {
  children: JSX.Element | JSX.Element[]
}

const InputGroup: FC<IInputGroupProps> = ({ children }): JSX.Element => {
  return <div className='relative w-full'>{children}</div>
}

export default InputGroup
