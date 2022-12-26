// interface IInputSwitchProps {
//   onChange: () => void
//   isChecked: boolean
// }

import { FC } from 'react'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'

type IconSVGProps = {
  icon: string
}

const IconSVG: FC<IconSVGProps> = ({ icon }) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  return (
    <div className='h-7 w-7 md:h-9 md:w-9'>
      {globalSvgSelector(icon, darkMode)}
    </div>
  )
}

export default IconSVG
