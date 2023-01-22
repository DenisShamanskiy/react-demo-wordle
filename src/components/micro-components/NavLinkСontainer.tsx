import { FC } from 'react'
import IconSVG from './IconSVG'

type NavLinkСontainerProps = {
  title: string
}

const NavLinkСontainer: FC<NavLinkСontainerProps> = ({ title }) => {
  return (
    <div className='relative flex h-10 w-full items-center justify-center rounded-lg border-2 border-w-grey-tone-2 text-sm font-semibold tracking-wider text-w-quartz transition-all duration-300 hover:scale-105 dark:border-w-grey-tone-3 dark:text-w-white-dark md:h-12 md:text-base'>
      <div className='absolute right-0 mr-2.5 block w-4 md:mx-3 md:w-6'>
        <IconSVG icon='arrow-forward' size='m' />
      </div>
      {title}
    </div>
  )
}

export default NavLinkСontainer
