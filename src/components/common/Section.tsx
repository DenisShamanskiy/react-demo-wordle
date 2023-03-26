import { FC, ReactNode, useMemo } from 'react'

interface ISectionProps {
  children: ReactNode
  width?: 's' | 'm' | '2xl' | 'full'
  height?: 'full'
  customClass?: string
}

const getWidthClasses = (width?: ISectionProps['width']) => {
  if (!width) {
    return ''
  }
  switch (width) {
    case 's':
      return 'w-10/12 max-w-xs sm:w-full sm:max-w-sm'
    case 'm':
      return 'w-10/12 sm:w-full max-w-sm sm:max-w-md'
    case '2xl':
      return 'w-10/12 sm:w-full sm:max-w-2xl'
    case 'full':
      return 'w-full'
    default:
      return ''
  }
}

const getHeightClasses = (height?: ISectionProps['height']) => {
  switch (height) {
    case 'full':
      return 'h-full'
    case undefined:
      return 'h-5/6'
    default:
      return ''
  }
}

const BASE_SECTION_CLASSES = 'flex select-none flex-col items-center'

const Section: FC<ISectionProps> = ({
  children,
  width,
  height,
  customClass,
}) => {
  const computedClasses = useMemo(() => {
    const widthClass = getWidthClasses(width)
    const heightClass = getHeightClasses(height)
    return [widthClass, heightClass, customClass]
      .filter((item) => !!item)
      .join(' ')
  }, [width, height, customClass])

  return (
    <section className={`${BASE_SECTION_CLASSES} ${computedClasses}`}>
      {children}
    </section>
  )
}

export default Section
