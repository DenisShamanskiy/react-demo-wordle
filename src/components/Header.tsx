import { NavLink, Outlet } from 'react-router-dom'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'
import CustomLink from './CustomLink'
import Notification from './Notification'

const Header = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
  const gameStatus = useAppSelector((state) => state.game.gameStatus)
  const notification = useAppSelector((state) => state.notification.visible)

  const {
    darkMode: darkTheme,
    hardMode: { active },
  } = useAppSelector((state) => state.settings)

  return (
    <>
      <header className='relative w-full max-w-5xl min-h-[40px] md:min-h-[64px] mx-auto px-4 md:px-5 lg:px-0 border-b border-w-grey-tone-2 dark:border-w-grey-tone-3 flex items-center bg-w-white dark:bg-w-black text-w-quartz dark:text-w-white-dark select-none'>
        <div className='w-max md:mx-auto'>
          <NavLink to='/'>
            <div className='flex'>
              <h1 className="text-2xl md:text-4xl font-['Bitter'] font-black hover:scale-110 transition-all duration-300">
                {`${gameStatus === 'WIN' ? 'Winner' : gameStatus === 'FAIL' ? 'Loser' : 'Wordle'}`}
                {active && (
                  <span className='ml-2 text-xs md:text-base font-extrabold font-sans text-red-500'>
                    hard mode
                  </span>
                )}
              </h1>
            </div>
          </NavLink>
        </div>
        <div className='absolute right-4 sm:right-5 lg:right-0 flex gap-x-1 md:gap-x-2'>
          <CustomLink to={isLoggedIn ? '/user' : '/auth'}>
            {globalSvgSelector(isLoggedIn ? 'person' : 'person-add', darkTheme)}
          </CustomLink>
          <CustomLink to='/rules'>{globalSvgSelector('rules', darkTheme)}</CustomLink>
          <CustomLink to='/statistics'>{globalSvgSelector('statistics', darkTheme)}</CustomLink>
          <CustomLink to='/settings'>{globalSvgSelector('settings', darkTheme)}</CustomLink>
        </div>
        {notification && <Notification />}
      </header>

      <Outlet />
    </>
  )
}

export default Header
