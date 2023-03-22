import { FC, ReactNode } from 'react'

interface IHeadingProps {
  children: ReactNode
}

const Heading: FC<IHeadingProps> = ({ children }) => {
  return (
    <h2 className='text-center text-base font-bold uppercase text-w-quartz dark:text-w-white-dark md:text-xl'>
      <>{children}</>
    </h2>
  )
}

export default Heading
