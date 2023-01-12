import { FC } from 'react'

type MainProps = {
  children?: JSX.Element
  style?: string | string[]
}

const Main: FC<MainProps> = ({ children, style }) => {
  return (
    <main className={`m-auto select-none p-5 sm:p-7 ${style}`}>{children}</main>
  )
}

export default Main
