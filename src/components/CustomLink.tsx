import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ICustomLinkProps {
  children: ReactNode
  to: string
}

const CustomLink: FC<ICustomLinkProps> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className='w-7 transition-all duration-300 hover:scale-110 md:w-9'
    >
      {children}
    </Link>
  )
}

export default CustomLink
