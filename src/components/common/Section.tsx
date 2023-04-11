import { FC, HTMLProps, useMemo } from 'react'

interface ISectionProps extends HTMLProps<HTMLElement> {
  width?: 's' | 'm' | '2xl' | 'full' | 'modal'
  height?: 'full'
  customClass?: string
}

const getWidthClasses = (width?: string) => {
  if (!width) {
    return ''
  }
  switch (width) {
    case 's':
      return 'w-10/12 max-w-xs sm:w-full sm:max-w-sm'
    case 'm':
      return 'w-10/12 sm:w-full max-w-sm sm:max-w-md'
    case '2xl':
      return 'w-11/12 sm:max-w-2xl'
    case 'full':
      return 'w-full'
    case 'modal':
      return 'w-full max-w-sm sm:w-96 sm:max-w-md'
    default:
      return ''
  }
}

const getHeightClasses = (height?: string) => {
  switch (height) {
    case 'full':
      return 'h-full'
    case undefined:
      return 'h-5/6'
    default:
      return ''
  }
}

const Section: FC<ISectionProps> = ({
  children,
  width,
  height,
  customClass,
  ...restProps
}) => {
  const computedClasses = useMemo(() => {
    const widthClass = getWidthClasses(width)
    const heightClass = getHeightClasses(height)
    return [widthClass, heightClass, customClass]
      .filter((item) => !!item)
      .join(' ')
  }, [width, height, customClass])

  return (
    <section
      className={`flex select-none flex-col items-center ${computedClasses}`}
      {...restProps}
    >
      {children}
    </section>
  )
}

export default Section
