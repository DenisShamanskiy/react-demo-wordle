import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ICustomLinkProps {
  children: ReactNode
  to: string
}

const CustomLink: FC<ICustomLinkProps> = ({ children, to }) => {
  return (
    <Link to={to} className='w-7 sm:w-8 lg:w-9'>
      {children}
    </Link>
  )
}

export default CustomLink
