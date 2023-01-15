import { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  deleteNewGame,
  hideNewGame,
  showNewGame,
} from 'redux/features/newGameSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import CustomLink from './CustomLink'
import Loader from './Loader'
import IconSVG from './micro-components/IconSVG'
import Sidebar from './NewGame'

type LayoutProps = {
  isLoading: boolean
}

const Layout: FC<LayoutProps> = ({ isLoading }) => {
  const dispatch = useAppDispatch()

  const { roles } = useAppSelector((state) => state.user)
  const gameStatus = useAppSelector((state) => state.game.gameStatus)
  const board = useAppSelector((state) => state.game.board)

  const {
    darkMode: darkTheme,
    hardMode: { active },
  } = useAppSelector((state) => state.settings)

  const visible = useAppSelector((state) => state.newGame.visible)

  const hidden = () => {
    dispatch(hideNewGame())
    setTimeout(() => {
      dispatch(deleteNewGame())
    }, 500)
  }

  return (
    <>
      <header className='relative mx-auto flex min-h-[40px] w-full max-w-5xl select-none items-center gap-1 border-b border-w-grey-tone-2 bg-w-white px-4 text-w-quartz dark:border-w-grey-tone-3 dark:bg-w-black dark:text-w-white-dark md:min-h-[64px] md:justify-center  md:gap-2 md:px-5 lg:px-0'>
        <button
          type='button'
          disabled={board[0]?.every((item) => item.color === '')}
          onClick={() => (visible ? hidden() : dispatch(showNewGame()))}
          className='absolute left-4 cursor-pointer transition-all duration-300 hover:scale-110 disabled:scale-100 disabled:cursor-auto disabled:opacity-50 md:left-5 lg:left-0 '
        >
          <IconSVG icon='game' size='m' />
        </button>
        <div className='ml-11 md:ml-0'>
          <NavLink to='/'>
            <div className='flex justify-start md:justify-center '>
              <h1 className="font-['Bitter'] text-2xl font-black transition-all duration-300 hover:scale-110 md:text-4xl">
                {`${
                  gameStatus === 'WIN'
                    ? 'Winner'
                    : gameStatus === 'FAIL'
                    ? 'Loser'
                    : 'Wordle'
                }`}
                {active && (
                  <span className='ml-1 font-sans text-xs font-extrabold text-red-500 md:ml-2 md:text-base'>
                    hard mode
                  </span>
                )}
              </h1>
            </div>
          </NavLink>
        </div>

        <div className='absolute right-4 flex gap-x-1 md:right-5 md:gap-x-2 lg:right-0 '>
          {roles.includes('ADMIN') && (
            <CustomLink to='/admin'>
              {globalSvgSelector('hammer', darkTheme)}
            </CustomLink>
          )}

          <CustomLink to='/rules'>
            {globalSvgSelector('rules', darkTheme)}
          </CustomLink>

          <CustomLink to='/profile'>
            {globalSvgSelector('person', darkTheme)}
          </CustomLink>

          <CustomLink to='/settings'>
            {globalSvgSelector('settings', darkTheme)}
          </CustomLink>
        </div>
      </header>
      <main className='mx-auto flex h-[calc(100%-64px)] w-full max-w-5xl items-center'>
        {isLoading ? <Loader /> : <Outlet />}
        {visible && <Sidebar />}
      </main>
    </>
  )
}

export default Layout
