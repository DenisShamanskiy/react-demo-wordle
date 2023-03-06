import { FC } from 'react'
import { Link, NavLink, To } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'
import IconSVG from './micro-components/IconSVG'

type CustomLinkProps = {
  to: To
  icon: string
  children?: string
  tooltip?: string
}

const CustomLink: FC<CustomLinkProps> = ({ to, icon, children, tooltip }) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  return children ? (
    <NavLink to={to}>
      <div className='relative flex h-11 items-center justify-center rounded-2xl text-sm font-semibold tracking-wider text-w-quartz shadow-popped transition-all duration-300 hover:translate-x-1 active:shadow-pushed dark:text-w-white-dark dark:shadow-poppedDark dark:active:shadow-pushedDark md:h-12 md:text-base'>
        <IconSVG icon={icon} size='m' position='left' />
        {children}
        <IconSVG icon={'chevron-forward'} size='m' position='right' />
      </div>
    </NavLink>
  ) : (
    <>
      <Link
        to={to}
        className='w-7 transition-all duration-300 hover:scale-105 md:w-9'
        data-tooltip-id={icon}
        data-tooltip-content={tooltip}
        data-tooltip-delay-show={1000}
      >
        {globalSvgSelector(icon, darkMode)}
      </Link>
      {!('ontouchstart' in window) && (
        <Tooltip
          id={icon}
          place='top'
          className={`${
            darkMode ? 'custom-tooltip_dark' : 'custom-tooltip'
          } z-20 translate-x-1`}
        />
      )}
    </>
  )
}

export default CustomLink
