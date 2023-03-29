import { FC, HTMLAttributes, ReactNode } from 'react'

interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

const Heading: FC<IHeadingProps> = ({ children, ...props }) => {
  return (
    <h2
      className='text-center text-base font-bold uppercase text-w-quartz transition-all dark:text-w-white-dark sm:text-xl'
      {...props}
    >
      {children}
    </h2>
  )
}

export default Heading
