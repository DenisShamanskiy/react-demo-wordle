import { CSSProperties } from 'react'

type ParagraphProps = {
  children: JSX.Element | JSX.Element[] | string
  style?: CSSProperties
}

const Paragraph = ({ children, style }: ParagraphProps) => {
  return (
    <p className='text-w-quartz dark:text-w-white-dark my-4 text-sm md:text-base' style={style}>
      {children}
    </p>
  )
}

export default Paragraph
