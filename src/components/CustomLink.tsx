import { FC } from 'react'
import { Link, NavLink, To } from 'react-router-dom'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'
import IconSVG from './micro-components/IconSVG'

type CustomLinkProps = {
  to: To
  icon: string
  children?: string
}

const CustomLink: FC<CustomLinkProps> = ({ to, icon, children }) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  return children ? (
    <NavLink to={to}>
      <div className='relative flex h-10 w-full items-center justify-center rounded-lg border-2 border-w-grey-tone-2 text-sm font-semibold tracking-wider text-w-quartz transition-all duration-300 hover:scale-105 dark:border-w-grey-tone-3 dark:text-w-white-dark md:h-12 md:text-base'>
        <IconSVG icon={icon} size='m' position='left' />
        {children}
        <IconSVG icon={'chevron-forward'} size='m' position='right' />
      </div>
    </NavLink>
  ) : (
    <Link
      to={to}
      className='w-7 transition-all duration-300 hover:scale-110 md:w-9'
    >
      {globalSvgSelector(icon, darkMode)}
    </Link>
  )
}

export default CustomLink
