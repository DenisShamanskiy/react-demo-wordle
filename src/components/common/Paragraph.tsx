import { FC, HTMLProps, useMemo } from 'react'

interface IParagraphProps extends HTMLProps<HTMLParagraphElement> {
  fontSize: 'xs' | 'sm' | 'base'
  fontWeight?: 'medium' | 'semibold' | 'bold'
  textAlign?: 'center'
  textTransform?: 'uppercase'
  customClass?: string
}

const getSizeClasses = (fontSize: string) => {
  switch (fontSize) {
    case 'xs':
      return 'text-xs sm:text-sm'
    case 'sm':
      return 'text-sm sm:text-base'
    case 'base':
      return 'text-base sm:text-lg'
    default:
      return ''
  }
}

const getWeightClasses = (fontWeight?: string) => {
  switch (fontWeight) {
    case 'medium':
      return 'font-medium'
    case 'semibold':
      return 'font-semibold'
    case 'bold':
      return 'font-bold'
    default:
      return ''
  }
}

const getAlignClasses = (textAlign?: string) => {
  switch (textAlign) {
    case 'center':
      return 'text-center'
    default:
      return ''
  }
}

const getTextTransformClasses = (textTransform?: string) => {
  switch (textTransform) {
    case 'uppercase':
      return 'uppercase'
    default:
      return ''
  }
}

const Paragraph: FC<IParagraphProps> = ({
  children,
  fontSize,
  fontWeight,
  textAlign,
  textTransform,
  customClass,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(fontSize)
    const weightClass = fontWeight && getWeightClasses(fontWeight)
    const alignClass = textAlign && getAlignClasses(textAlign)
    const textTransformClass =
      textTransform && getTextTransformClasses(textTransform)
    return [sizeClass, weightClass, alignClass, textTransformClass, customClass]
      .filter((item) => !!item)
      .join(' ')
  }, [fontSize, fontWeight, textAlign, textTransform, customClass])
  return (
    <p
      className={`text-w-quartz dark:text-w-white-dark ${computedClasses}`}
      {...props}
    >
      {children}
    </p>
  )
}

export default Paragraph
