import { useAppSelector } from 'hook'
import { FC, HTMLProps, useMemo } from 'react'
import { Tooltip } from 'react-tooltip'

interface IParagraphProps extends HTMLProps<HTMLParagraphElement> {
  fontSize: 'xs' | 'sm' | 'base'
  fontWeight?: 'medium' | 'semibold' | 'bold'
  textAlign?: 'center'
  textTransform?: 'uppercase'
  tooltip?: string
  tooltipId?: string
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
  dangerouslySetInnerHTML,
  fontSize,
  fontWeight,
  textAlign,
  textTransform,
  customClass,
  tooltip,
  tooltipId,
  ...props
}) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)
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
    <>
      <p
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltip}
        data-tooltip-delay-show={1000}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        className={`text-w-quartz dark:text-w-white-dark ${computedClasses}`}
        {...props}
      >
        {children}
      </p>
      {tooltip && (
        <Tooltip
          id={tooltipId}
          place='top'
          className={`${
            darkMode ? 'custom-tooltip_dark' : 'custom-tooltip'
          } z-50 translate-x-1`}
          classNameArrow='noArrow'
        />
      )}
    </>
  )
}

export default Paragraph
