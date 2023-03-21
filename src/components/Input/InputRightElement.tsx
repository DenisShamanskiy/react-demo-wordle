import { FC } from 'react'

interface IInputRightElementProps {
  children: JSX.Element | JSX.Element[] | null
}

const InputRightElement: FC<IInputRightElementProps> = ({
  children,
}): JSX.Element => {
  return <>{children}</>
}

export default InputRightElement
