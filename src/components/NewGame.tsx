import { useEffect, useRef } from 'react'
import { openModal } from 'redux/features/modalSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import Button from './Button'
import { useOutsideClick } from '../hook/useOutsideClick'
import { hideNewGame, deleteNewGame } from 'redux/features/newGameSlice'

export const NewGame = () => {
  const squareBoxRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const { board, gameStatus } = useAppSelector((state) => state.game)
  const show = useAppSelector((state) => state.newGame.show)
  const open = useAppSelector((state) => state.modal.open)

  useOutsideClick(squareBoxRef, () => dispatch(hideNewGame()), open)

  useEffect(() => {
    if (!show) {
      const timeout = setTimeout(() => {
        dispatch(deleteNewGame())
      }, 500)
      return () => clearTimeout(timeout)
    }
    return
  }, [show])

  return (
    <div
      ref={squareBoxRef}
      className={`absolute left-2 top-2 z-50 h-fit origin-top-left rounded-xl  bg-white/10 p-4 shadow-glossWhite backdrop-blur-xl transition-all duration-500  dark:bg-black/10 dark:shadow-glossBlack md:p-6 ${
        show ? 'animate-newGameShow' : 'animate-newGameHide'
      } `}
    >
      <section className='mx-auto w-11/12 max-w-[448px] select-none'>
        <div className=' mx-auto  grid w-full grid-rows-2 justify-center gap-y-2 md:gap-y-3 '>
          <Button
            type='button'
            text={'Новая игра'}
            size='m'
            isRounded
            onClick={() =>
              dispatch(
                openModal({
                  window: 'Confirm',
                  title: 'Новая игра?',
                  type: 'NewGame',
                }),
              )
            }
            disabled={board[0]?.every((item) => item.color === '')}
          />
          <Button
            type='button'
            text={'Сдаться'}
            size='m'
            isRounded
            onClick={() =>
              dispatch(
                openModal({
                  window: 'Confirm',
                  title: 'Сдаёшься?',
                  type: 'Leave',
                  description:
                    'Узнаешь загаданное слово, но cдача засчитается в статистике',
                }),
              )
            }
            disabled={
              board[0]?.every((item) => item.color === '') ||
              ['WIN', 'FAIL', 'LEAVE'].includes(gameStatus)
            }
          />
        </div>
      </section>
    </div>
  )
}
export default NewGame
