import { FC } from 'react'

type Heading2Props = {
  children: string | JSX.Element
}

const Heading2: FC<Heading2Props> = ({ children }) => {
  return (
    <h2 className='text-w-quartz dark:text-w-white-dark text-center text-base md:text-xl font-bold uppercase'>
      {children}
    </h2>
  )
}

export default Heading2
