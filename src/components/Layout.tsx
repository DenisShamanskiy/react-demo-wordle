import { FC, useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/header-animation.css'
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
import { CSSTransition } from 'react-transition-group'

type LayoutProps = {
  isLoading: boolean
}

const Layout: FC<LayoutProps> = ({ isLoading }) => {
  const dispatch = useAppDispatch()
  const nodeRef = useRef(null)
  const hmRef = useRef(null)

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
      <header className='relative mx-auto flex min-h-[64px] w-full max-w-5xl select-none items-center gap-1 border-b border-w-grey-tone-2 bg-transparent px-4 text-w-quartz dark:border-w-grey-tone-3 dark:text-w-white-dark md:justify-center md:gap-2 md:px-5 lg:px-0'>
        <ButtonIcon
          icon='leave'
          position='header'
          disabled={board[0]?.every((item) => item.color === '')}
          place='right'
          customClass='p-2 md:p-2.5 w-10 md:w-12'
          onClick={() => (visible ? hidden() : dispatch(showNewGame()))}
          isShadow
        />
        <CSSTransition
          nodeRef={nodeRef}
          in={active}
          timeout={500}
          classNames='wordle'
        >
          <div className='ml-14 md:ml-0'>
            <NavLink to='/'>
              <div
                className='wordle relative flex min-h-[32px] flex-col justify-center transition-all duration-300 hover:scale-105 md:min-h-[40px] md:flex-row md:justify-center'
                ref={nodeRef}
              >
                <h1 className="absolute left-0 top-0 bottom-0 inline-block font-['Bitter'] text-2xl font-black md:text-4xl">
                  {`${
                    gameStatus === 'WIN'
                      ? 'Winner'
                      : gameStatus === 'FAIL'
                      ? 'Loser'
                      : 'Wordle'
                  }`}
                </h1>
                <CSSTransition
                  in={active}
                  nodeRef={hmRef}
                  timeout={500}
                  classNames='hard-mode-animation'
                  unmountOnExit
                >
                  <span
                    className='hard-mode-animation absolute bottom-1 -right-3 w-full text-right font-sans text-xs font-bold text-red-500 md:right-auto md:bottom-auto md:text-base md:leading-10'
                    ref={hmRef}
                  >
                    hard mode
                  </span>
                </CSSTransition>
              </div>
            </NavLink>
          </div>
        </CSSTransition>

        <div className='absolute right-4 flex gap-x-1 md:right-5 md:gap-x-2 lg:right-0 '>
          {roles.includes('ADMIN') && (
            <CustomLink to='/admin' icon='hammer' tooltip='Администратор' />
          )}
          <CustomLink to='/rules' icon='rules' tooltip='Правила игры' />
          <CustomLink to='/profile' icon='person' tooltip='Профиль' />
          <CustomLink to='/settings' icon='settings' tooltip='Настройки' />
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
