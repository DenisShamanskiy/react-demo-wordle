import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ICustomLinkProps {
  children: ReactNode
  to: string
}

const CustomLink: FC<ICustomLinkProps> = ({ children, to }) => {
  return (
    <Link to={to} className='w-7 md:w-9 hover:scale-110 transition-all duration-300'>
      {children}
    </Link>
  )
}

export default CustomLink
