import { FC } from 'react'
import { Tooltip } from 'react-tooltip'
import { globalSvgSelector } from '../utils/globalSvgSelector'
import { useAppSelector } from '../hook'

interface IIconTooltipProps {
  tooltip: string
}

const IconTooltip: FC<IIconTooltipProps> = ({ tooltip }) => {
  const darkTheme = useAppSelector((state) => state.settings.darkMode)
  return (
    <>
      <span
        className='m-auto ml-1 w-4 hover:cursor-help md:ml-1.5 md:w-5'
        data-tooltip-id='id'
        data-tooltip-html={tooltip}
      >
        {globalSvgSelector('tooltip', darkTheme)}
      </span>
      <Tooltip
        id='id'
        place='top'
        className={`${darkTheme ? 'custom-tooltip_dark' : 'custom-tooltip'}`}
        classNameArrow='noArrow'
      />
    </>
  )
}

export default IconTooltip
