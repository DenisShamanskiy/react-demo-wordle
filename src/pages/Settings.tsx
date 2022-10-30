import ButtonIcon from 'components/micro-components/Button/ButtonIcon'
import InputSwitch from 'components/micro-components/InputSwitch'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'
import Button from 'components/micro-components/Button/Button'
import Main from 'components/micro-components/Main'
import Heading2 from 'components/micro-components/Heading2'
import SettingsRow from 'components/micro-components/SettingsRow'
import { toggleHardMode, toggleTheme } from 'store/settingsSlice'

const Settings = () => {
  const dispatch = useAppDispatch()
  const { board, gameStatus } = useAppSelector((state) => state.game)
  const {
    darkMode,
    hardMode: { active },
  } = useAppSelector((state) => state.settings)

  const reloadLocalStorage = () => {
    localStorage.clear()
  }

  const newGame = () => {
    dispatch(
      openModal({
        window: 'ConfirmNewGame',
        title: 'Новая игра?',
      }),
    )
  }
  const leaveGame = () => {
    dispatch(
      openModal({
        window: 'ConfirmLeave',
        title: 'Сдаёшься?',
      }),
    )
  }

  return (
    <Main style={'w-11/12 max-w-xl'}>
      <section>
        <Heading2>Настройки</Heading2>
        <div className='my-8 sm:my-10 flex flex-col justify-center items-center'>
          <div className='w-48 sm:w-52 pb-8 sm:pb-10 grid grid-rows-2 gap-y-2 sm:gap-y-3'>
            <Button text={'новая игра'} color={'green'} onClick={() => newGame()} />
            <Button
              text={'сдаться'}
              color={'yellow'}
              onClick={() => leaveGame()}
              disabled={
                board[0]?.every((item) => item.color === '') ||
                ['WIN', 'FAIL', 'LEAVE'].includes(gameStatus)
              }
            />
          </div>

          <SettingsRow>
            <div className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} flex flex-col`}>
              <p className='text-lg sm:text-xl font-bold'>Hard Mode</p>
              <p className='text-xs sm:text-sm'>Необходимо использовать все подсказки</p>
            </div>
            <InputSwitch onChange={() => dispatch(toggleHardMode())} isChecked={active} />
          </SettingsRow>
          <SettingsRow>
            <p
              className={`${
                darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
              } text-lg sm:text-xl font-bold`}
            >
              Dark Theme
            </p>
            <InputSwitch onChange={() => dispatch(toggleTheme())} isChecked={darkMode} />
          </SettingsRow>
          <SettingsRow>
            <div className={`${darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'} flex flex-col`}>
              <p className='text-lg sm:text-xl font-bold'>LocalStorage</p>
              <p className='text-xs sm:text-sm'>Очистить</p>
            </div>
            <ButtonIcon icon={'trash'} onClick={() => reloadLocalStorage()} />
          </SettingsRow>
        </div>
        <p className='text-xs sm:text-sm text-[#787c7e]'>© 2022 Денис Шаманский</p>
      </section>
    </Main>
  )
}

export default Settings
