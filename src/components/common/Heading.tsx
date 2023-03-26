import { FC, ReactNode } from 'react'

interface IHeadingProps {
  children: ReactNode
}

const Heading: FC<IHeadingProps> = ({ children }) => {
  return (
    <h2 className='text-center text-base font-bold uppercase text-w-quartz transition-all dark:text-w-white-dark sm:text-xl'>
      {children}
    </h2>
  )
}

export default Heading
