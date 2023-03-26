import { FC, ReactNode } from 'react'

interface IMainProps {
  children?: ReactNode
  style?: string | string[]
}

const Main: FC<IMainProps> = ({ children, style }) => {
  return (
    <main
      className={`m-auto flex h-[calc(100%-40px)] w-full max-w-5xl select-none items-center justify-center md:h-[calc(100%-64px)] ${style}`}
    >
      {children}
    </main>
  )
}

export default Main
