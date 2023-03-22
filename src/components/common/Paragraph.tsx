import { CSSProperties, FC, ReactNode } from 'react'

interface IParagraphProps {
  children: ReactNode
  style?: CSSProperties
}

const Paragraph: FC<IParagraphProps> = ({ children, style }) => {
  return (
    <p
      className='my-2 text-sm text-w-quartz dark:text-w-white-dark md:my-4 md:text-base'
      style={style}
    >
      {children}
    </p>
  )
}

export default Paragraph
