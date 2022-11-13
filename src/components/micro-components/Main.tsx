import { FC } from 'react'

type MainProps = {
  children?: JSX.Element
  style?: string | string[]
}

const Main: FC<MainProps> = ({ children, style }) => {
  return <main className={`m-auto p-5 sm:p-7 select-none ${style}`}>{children}</main>
}

export default Main
