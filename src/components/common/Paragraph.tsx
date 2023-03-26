import { CSSProperties, FC, ReactNode } from 'react'

interface IParagraphProps {
  children: ReactNode
  style?: CSSProperties
}

const Paragraph: FC<IParagraphProps> = ({ children, style }) => {
  return (
    <p
      className='my-2 text-sm text-w-quartz dark:text-w-white-dark sm:my-4 sm:text-base'
      style={style}
    >
      {children}
    </p>
  )
}

export default Paragraph
