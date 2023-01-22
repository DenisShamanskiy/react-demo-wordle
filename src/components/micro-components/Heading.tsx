import { FC, ReactNode } from 'react'

type HeadingProps = {
  children: string | ReactNode
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className='text-center text-base font-bold uppercase text-w-quartz dark:text-w-white-dark md:text-xl'>
      <>{children}</>
    </h2>
  )
}

export default Heading
