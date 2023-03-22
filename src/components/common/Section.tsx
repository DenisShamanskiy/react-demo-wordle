import { FC, ReactNode, useMemo } from 'react'

interface ISectionProps {
  children: ReactNode
  width?: 's' | 'm' | '2xl'
  height?: 'full'
  customClass?: string
}

const getWidthClasses = (width?: ISectionProps['width']) => {
  if (!width) {
    return ''
  }
  switch (width) {
    case 's':
      return 'w-11/12 md:w-full max-w-sm'
    case 'm':
      return 'w-11/12 md:w-full md:max-w-md'
    case '2xl':
      return 'w-11/12 md:w-full md:max-w-2xl'
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

const BASE_SECTION_CLASSES =
  'mx-auto flex select-none flex-col items-center px-2 md:px-0'

const Section: FC<ISectionProps> = ({
  children,
  width,
  height,
  customClass,
}) => {
  const computedClasses = useMemo(() => {
    const widthClass = getWidthClasses(width)
    const heightClass = getHeightClasses(height)
    return [widthClass, heightClass].join(' ')
  }, [width, height])

  return (
    <section
      className={`${BASE_SECTION_CLASSES} ${computedClasses} ${customClass}`}
    >
      {children}
    </section>
  )
}

export default Section
