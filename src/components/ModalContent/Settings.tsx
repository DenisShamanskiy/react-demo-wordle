import ButtonIcon from 'components/micro-components/Button/ButtonIcon'
import InputSwitch from 'components/micro-components/InputSwitch'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'
import { getFirstWord, toggleHardMode, toggleTheme } from 'store/persistSlice'
import Button from 'components/micro-components/Button/Button'

const Settings = () => {
  const dispatch = useAppDispatch()
  // const { window } = useAppSelector((state) => state.modal)
  const board = useAppSelector((state) => state.persist.game.board)
  const gameStatus = useAppSelector((state) => state.persist.game.gameStatus)
  const { window, title, description } = useAppSelector((state) => state.modal)
  const {
    darkMode,
    hardMode: { active },
  } = useAppSelector((state) => state.persist.settings)

  const reloadLocalStorage = () => {
    localStorage.clear()
    dispatch(getFirstWord())
  }

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
          window: 'ConfirmNewGame',
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
    <div className='relative w-[340px] select-none'>
      <h2
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } text-center text-base font-bold uppercase`}
      >
        Настройки
      </h2>
      <ButtonIcon
        icon={'close'}
        onClick={() => dispatch(openModal({ open: false, window: window }))}
      />
      <div className='my-6'>
        <div
          className={`pb-6 border-y ${
            darkMode ? 'border-wordleBorderDark' : 'border-wordleBorderLight'
          }`}
        >
          <Button
            text={'новая игра'}
            color={'green'}
            onClick={() => newGame()}
            style={{ margin: '0 auto 0.5rem' }}
          />
          <Button
            text={'сдаться'}
            color={'yellow'}
            onClick={() => leaveGame()}
            disabled={
              board[0]?.every((item) => item.color === '') || ['WIN', 'DEFEAT'].includes(gameStatus)
            }
            // style={{ margin: '0 auto 1.5rem' }}
          />
        </div>

        <div className='relative mb-1 p-2 flex justify-between items-center'>
          <div className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} flex flex-col`}>
            <p className='text-lg font-bold'>Hard Mode</p>
            <p className='text-xs'>Необходимо использовать все подсказки</p>
          </div>
          <InputSwitch onChange={() => dispatch(toggleHardMode())} isChecked={active} />
        </div>
        <div className='relative p-2 h-[60px] flex justify-between items-center'>
          <p className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} text-lg font-bold`}>
            Dark Theme
          </p>
          <InputSwitch onChange={() => dispatch(toggleTheme())} isChecked={darkMode} />
        </div>
        <div className='relative p-2 h-[60px] flex justify-between items-center'>
          <div className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} flex flex-col`}>
            <p className='text-lg font-bold'>LocalStorage</p>
            <p className='text-xs'>Перезагрузить</p>
          </div>
          <ButtonIcon icon={'trash'} onClick={() => reloadLocalStorage()} />
        </div>
      </div>
      <p className='text-xs text-[#787c7e]'>© 2022 Денис Шаманский</p>
    </div>
  )
}

export default Settings
