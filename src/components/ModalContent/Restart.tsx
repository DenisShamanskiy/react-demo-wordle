import Button from 'components/micro-components/Button/Button'
import ButtonIcon from 'components/micro-components/Button/ButtonIcon'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'

const Restart = () => {
  const dispatch = useAppDispatch()
  const { window, title, description } = useAppSelector((state) => state.modal)
  const board = useAppSelector((state) => state.persist.game.board)
  const gameStatus = useAppSelector((state) => state.persist.game.gameStatus)

  const newGame = () => {
    dispatch(
      openModal({
        open: false,
        window: window,
        title: title,
        description: description,
      }),
    )
    setTimeout(() => {
      dispatch(
        openModal({
          open: true,
          window: 'Confirmation',
          title: 'Новая игра?',
        }),
      )
    }, 700)
  }
  const leaveGame = () => {
    dispatch(
      openModal({
        open: false,
        window: window,
        title: title,
        description: description,
      }),
    )
    setTimeout(() => {
      dispatch(
        openModal({
          open: true,
          window: 'Confirmation',
          title: 'Сдаёшься?',
          description: ['Узнаешь загаданное слово'],
        }),
      )
    }, 700)
  }
  return (
    <section className='relative w-[340px]'>
      <ButtonIcon
        icon={'close'}
        onClick={() => dispatch(openModal({ open: false, window: window }))}
      />
      <div className='w-48 py-10 mx-auto p-2 rounded'>
        {/* <ButtonNewGame /> */}
        <Button
          text={'новая игра'}
          color={'green'}
          onClick={() => newGame()}
          style={{ margin: '0 auto 1rem' }}
        />
        <Button
          text={'сдаться'}
          color={'yellow'}
          onClick={() => leaveGame()}
          disabled={
            board[0]?.every((item) => item.color === '') || ['WIN', 'DEFEAT'].includes(gameStatus)
          }
        />
      </div>
    </section>
  )
}

export default Restart
