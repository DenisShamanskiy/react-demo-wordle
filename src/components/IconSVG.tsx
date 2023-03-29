import { FC, useMemo } from 'react'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'

type IconSVGProps = {
  icon: string
  size?: 's' | 'm'
  interactive?: boolean
  position?: 'left' | 'right'
}

const getSizeClasses = (size: IconSVGProps['size']): string => {
  switch (size) {
    case 's':
      return 'w-4 md:w-6'
    case 'm':
      return 'w-5 md:w-6'
    // case 'l':
    //   return 'w-7 md:w-9'
    // case 'full':
    //   return 'w-full'
    default:
      return ''
  }
}

const getPositionClasses = (position: IconSVGProps['position']): string => {
  switch (position) {
    case 'left':
      return 'left-2.5 mr-2.5 md:left-3 md:mr-3'
    case 'right':
      return 'right-2.5 ml-2.5 md:right-3 md:ml-3'
    default:
      return ''
  }
}

const BASE_ICON_SVG_CLASSES = 'absolute block'

const IconSVG: FC<IconSVGProps> = ({ icon, size, position }) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size)
    const positionClass = getPositionClasses(position)
    return [sizeClass, positionClass].join(' ')
  }, [size, position])

  return (
    <span className={`${BASE_ICON_SVG_CLASSES} ${computedClasses}`}>
      {globalSvgSelector(icon, darkMode)}
    </span>
  )
}

export default IconSVG
