import { NavLink, Outlet } from 'react-router-dom'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'
import Notification from './Notification'
import CustomLink from './CustomLink'

const Layout = () => {
  const isLoggedIn = useAppSelector((state) => state.persist.user.isLoggedIn)

  const gameStatus = useAppSelector((state) => state.persist.game.gameStatus)
  const notification = useAppSelector((state) => state.notification.visible)

  const {
    darkMode: darkTheme,
    hardMode: { active },
  } = useAppSelector((state) => state.persist.settings)

  return (
    <>
      <header
        className={`${
          darkTheme
            ? 'border-wordleTone4Dark text-wordleWhite bg-wordleBlack'
            : 'border-wordleTone4 text-wordleQuartz bg-wordleWhite'
        } relative w-full max-w-5xl h-10 sm:h-14 lg:h-16 mx-auto px-4 md:px-5 lg:px-0 border-b flex items-center select-none`}
      >
        <div className='w-max md:mx-auto'>
          <NavLink to='/'>
            <div className='flex'>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-['Bitter'] font-black">
                {`${
                  gameStatus === 'WIN' ? 'Winner' : gameStatus === 'DEFEAT' ? 'Loser' : 'Wordle'
                }`}
                {active && (
                  <span className='ml-2 text-xs sm:text-sm lg:text-base align-middle font-extrabold font-sans text-red-500'>
                    hard mode
                  </span>
                )}
              </h1>
            </div>
          </NavLink>
        </div>
        <div className='absolute right-4 sm:right-5 lg:right-0 grid gap-x-1 sm:gap-x-2 lg:gap-x-3 grid-cols-4'>
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

export default Layout
