import Button from 'components/micro-components/Buttons/Button'
import ButtonIcon from 'components/micro-components/Buttons/ButtonIcon'
import Heading2 from 'components/micro-components/Heading2'
import InputSwitch from 'components/micro-components/InputSwitch'
import SettingsRow from 'components/micro-components/SettingsRow'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { openModal } from 'store/modalSlice'
import { toggleHardMode, toggleTheme } from 'store/settingsSlice'
import useCurrentWidth from 'utils/getWidth'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const Settings = () => {
  const dispatch = useAppDispatch()
  const { board, gameStatus } = useAppSelector((state) => state.game)
  const {
    darkMode,
    hardMode: { active },
  } = useAppSelector((state) => state.settings)

  const styleWidth = useCurrentWidth()

  return (
    <main className='my-auto'>
     <section className='w-full max-w-sm md:max-w-md mx-auto select-none'>
        <Heading2>Настройки</Heading2>
        <div className='mt-8 md:mt-10 flex flex-col justify-center items-center'>
          <div className='grid grid-rows-2 gap-y-2 md:gap-y-3'>
            <Button
              type='button'
              text={'новая игра'}
              color='green'
              size='m'
              onClick={() =>
                dispatch(
                  openModal({
                    window: 'Confirm',
                    title: 'Новая игра?',
                    type: 'NewGame'
                  }),
                )
              }
              disabled={board[0]?.every((item) => item.color === '')}
            />
            <Button
              type='button'
              text={'сдаться'}
              color='yellow'
              size='m'
              onClick={() =>
                dispatch(
                  openModal({
                    window: 'Confirm',
                    title: 'Сдаёшься?',
                    type: 'Leave',
                    description: 'Узнаешь загаданное слово, но cдача засчитается в статистике'
                  }),
                )
              }
              disabled={
                board[0]?.every((item) => item.color === '') ||
                ['WIN', 'FAIL', 'LEAVE'].includes(gameStatus)
              }
            />
          </div>
          <div className='w-full mt-8 md:mt-10'>
            <SettingsRow>
              <div className='flex flex-col text-w-quartz dark:text-w-white-dark'>
                <p className='text-lg md:text-xl font-bold'>Повысить сложность</p>
                <p className='text-xs md:text-sm'>Необходимо использовать все подсказки</p>
              </div>
              <InputSwitch onChange={() => dispatch(toggleHardMode())} isChecked={active} />
            </SettingsRow>
            <SettingsRow>
              <p className='text-lg md:text-xl font-bold text-w-quartz dark:text-w-white-dark'>
                {darkMode ? 'Светлая тема' : 'Тёмная тема'}
              </p>
              <DarkModeSwitch
                checked={darkMode}
                sunColor={'#49474E'}
                onChange={() => dispatch(toggleTheme())}
                size={styleWidth > 768 ? 35 : 28}
              />
            </SettingsRow>
            <SettingsRow>
              <div className='flex flex-col text-w-quartz dark:text-w-white-dark'>
                <p className='text-lg md:text-xl font-bold'>LocalStorage</p>
                <p className='text-xs md:text-sm'>Очистить</p>
              </div>
              <ButtonIcon icon={'trash'} onClick={() => localStorage.clear()} />
            </SettingsRow>
          </div>
        </div>
        <p className='mt-8 md:mt-10 text-xs md:text-sm text-[#787c7e]'>© 2022 Денис Шаманский</p>
      </section>
    </main>
  )
}

export default Settings
