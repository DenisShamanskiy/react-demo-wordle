import { FC, HTMLAttributes, ReactNode } from 'react'

interface IMainProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

const Main: FC<IMainProps> = ({ children, ...props }) => {
  return (
    <main
      className='m-auto flex h-full w-full max-w-5xl items-center justify-center'
      {...props}
    >
      {children}
    </main>
  )
}

export default Main
