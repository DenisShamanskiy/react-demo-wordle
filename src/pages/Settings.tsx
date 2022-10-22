import ButtonIcon from 'components/micro-components/Button/ButtonIcon'
import InputSwitch from 'components/micro-components/InputSwitch'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'
import { getFirstWord, toggleHardMode, toggleTheme } from 'store/persistSlice'
import Button from 'components/micro-components/Button/Button'
import Section from 'components/micro-components/Section'
import Heading2 from 'components/micro-components/Heading2'
import SettingsRow from 'components/micro-components/SettingsRow'

const Settings = () => {
  const dispatch = useAppDispatch()
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
    <Section style={'w-11/12 max-w-xl'}>
      <>
        <Heading2>Настройки</Heading2>
        <div className='my-8 sm:my-10'>
          <div
            className={`pb-8 sm:pb-10
            `}
          >
            <Button
              text={'новая игра'}
              color={'green'}
              onClick={() => newGame()}
              style={{ margin: '0 auto 0.5rem', width: '200px' }}
            />
            <Button
              text={'сдаться'}
              color={'yellow'}
              onClick={() => leaveGame()}
              disabled={
                board[0]?.every((item) => item.color === '') ||
                ['WIN', 'DEFEAT'].includes(gameStatus)
              }
              style={{ width: '200px' }}
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
              <p className='text-xs sm:text-sm'>Перезагрузить</p>
            </div>
            <ButtonIcon icon={'trash'} onClick={() => reloadLocalStorage()} />
          </SettingsRow>
        </div>
        <p className='text-xs sm:text-sm text-[#787c7e]'>© 2022 Денис Шаманский</p>
      </>
    </Section>
  )
}

export default Settings
