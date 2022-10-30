import { CSSProperties } from 'react'
import { useAppSelector } from 'utils/hook'

type ParagraphProps = {
  children?: JSX.Element | string | JSX.Element[]
  style?: CSSProperties
}

const Paragraph = ({ children, style }: ParagraphProps) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  return (
    <p
      className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} my-4 text-sm lg:text-base`}
      style={style}
    >
      {children}
    </p>
  )
}

export default Paragraph
