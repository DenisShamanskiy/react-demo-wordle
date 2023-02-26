import { FC, ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
}

const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className='mx-auto flex h-5/6 w-11/12 max-w-sm select-none flex-col items-center md:max-w-md'>
      {children}
    </section>
  )
}

export default Section
