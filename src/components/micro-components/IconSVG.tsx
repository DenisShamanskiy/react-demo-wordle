import { FC } from 'react'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'

type IconSVGProps = {
  icon: string
  size: string
}

const IconSVG: FC<IconSVGProps> = ({ icon, size }) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const addSize = (size: string): string => {
    switch (size) {
      case 's':
        return 'w-4 md:w-6'
      case 'm':
        return 'w-7 md:w-9'
      case 'full':
        return 'w-full'
      default:
        return ''
    }
  }

  return (
    <div className={`${addSize(size)} w-`}>
      {globalSvgSelector(icon, darkMode)}
    </div>
  )
}

export default IconSVG
