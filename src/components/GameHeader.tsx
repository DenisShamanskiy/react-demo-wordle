import '../styles/header-animation.css'
import {
  deleteNewGame,
  hideNewGame,
  showNewGame,
} from 'redux/features/newGameSlice'
import ButtonIcon from './ButtonIcon'
import CustomLink from './CustomLink'
import HeaderTitle from './HeaderTitle'
import { useAppDispatch, useAppSelector } from 'hook'

const GameHeader = () => {
  const dispatch = useAppDispatch()

  const { roles } = useAppSelector((state) => state.user)
  const board = useAppSelector((state) => state.game.board)

  const visible = useAppSelector((state) => state.newGame.visible)

  const hidden = () => {
    dispatch(hideNewGame())
    setTimeout(() => {
      dispatch(deleteNewGame())
    }, 500)
  }

  return (
    <>
      <header className='relative mx-auto flex min-h-[64px] w-full max-w-5xl select-none items-center gap-1 border-b border-w-grey-tone-2 bg-transparent px-4 text-w-quartz dark:border-w-grey-tone-3 dark:text-w-white-dark sm:justify-center sm:gap-2 sm:px-5'>
        <ButtonIcon
          icon='leave'
          position='header'
          disabled={board[0]?.every((item) => !item.color)}
          place='right'
          customClass='p-2 sm:p-2.5 w-10 sm:w-12'
          onClick={() => (visible ? hidden() : dispatch(showNewGame()))}
          isShadow
        />
        <HeaderTitle />
        <div className='absolute right-4 flex gap-x-1 sm:right-5 sm:gap-x-2'>
          {roles.includes('ADMIN') && (
            <CustomLink to='/admin' icon='hammer' tooltip='Администратор' />
          )}
          <CustomLink to='/rules' icon='rules' tooltip='Правила игры' />
          <CustomLink to='/profile' icon='person' tooltip='Профиль' />
          <CustomLink to='/settings' icon='settings' tooltip='Настройки' />
        </div>
      </header>
    </>
  )
}

export default GameHeader
