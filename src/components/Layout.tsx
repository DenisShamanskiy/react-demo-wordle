import { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  deleteNewGame,
  hideNewGame,
  showNewGame,
} from 'redux/features/newGameSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import ButtonIcon from './ButtonIcon'
import CustomLink from './CustomLink'
import Loader from './Loaders/Loader'
import NewGame from './NewGame'

type LayoutProps = {
  isLoading: boolean
}

const Layout: FC<LayoutProps> = ({ isLoading }) => {
  const dispatch = useAppDispatch()

  const { roles } = useAppSelector((state) => state.user)
  const gameStatus = useAppSelector((state) => state.game.gameStatus)
  const board = useAppSelector((state) => state.game.board)

  const {
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
        <ButtonIcon
          icon='game'
          position='header'
          size='header'
          disabled={board[0]?.every((item) => item.color === '')}
          onClick={() => (visible ? hidden() : dispatch(showNewGame()))}
        />

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
          {roles.includes('ADMIN') && <CustomLink to='/admin' icon='hammer' />}
          <CustomLink to='/rules' icon='rules' />
          <CustomLink to='/profile' icon='person' />
          <CustomLink to='/settings' icon='settings' />
        </div>
      </header>
      <main className='relative mx-auto flex h-[calc(100%-40px)] w-full max-w-5xl items-center md:h-[calc(100%-64px)]'>
        {isLoading ? <Loader /> : <Outlet />}
        {visible && <NewGame />}
      </main>
    </>
  )
}

export default Layout
