import { FC, useMemo } from 'react'
import { useAppSelector } from '../hook'
import { globalSvgSelector } from '../utils/globalSvgSelector'

interface IIconSVGProps {
  icon: string
  size?: 's' | 'm'
  interactive?: boolean
  position?: 'left' | 'right'
}

const getSizeClasses = (size: IIconSVGProps['size']): string => {
  switch (size) {
    case 's':
      return 'w-4 md:w-6'
    case 'm':
      return 'w-5 md:w-6'
    default:
      return ''
  }
}

const getPositionClasses = (position: IIconSVGProps['position']): string => {
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

const IconSVG: FC<IIconSVGProps> = ({ icon, size, position }) => {
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
