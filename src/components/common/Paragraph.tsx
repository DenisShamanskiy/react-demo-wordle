import { FC, HTMLProps, useMemo } from 'react'

interface IParagraphProps extends HTMLProps<HTMLParagraphElement> {
  fontSize: 'xs' | 'sm' | 'base'
  fontWeight?: 'medium' | 'semibold'
  textAlign?: 'center'
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

const Paragraph: FC<IParagraphProps> = ({
  children,
  fontSize,
  fontWeight,
  textAlign,
  customClass,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(fontSize)
    const weightClass = fontWeight && getWeightClasses(fontWeight)
    const alignClass = textAlign && getAlignClasses(textAlign)
    return [sizeClass, weightClass, alignClass, customClass]
      .filter((item) => !!item)
      .join(' ')
  }, [fontSize, fontWeight, textAlign, customClass])
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
