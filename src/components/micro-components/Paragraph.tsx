import { CSSProperties } from 'react'

type ParagraphProps = {
  children: JSX.Element | JSX.Element[] | string
  style?: CSSProperties
}

const Paragraph = ({ children, style }: ParagraphProps) => {
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
