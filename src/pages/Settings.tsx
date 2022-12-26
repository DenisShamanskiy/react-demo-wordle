// import Button from 'components/micro-components/Buttons/Button'
import ButtonIcon from 'components/micro-components/Buttons/ButtonIcon'
import Heading2 from 'components/micro-components/Heading'
import InputSwitch from 'components/micro-components/InputSwitch'
import SettingsRow from 'components/micro-components/SettingsRow'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
// import { openModal } from 'store/modalSlice'
import { toggleHardMode, toggleTheme } from 'store/settingsSlice'
import useCurrentWidth from 'utils/getWidth'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const Settings = () => {
  const dispatch = useAppDispatch()
  // const { board, gameStatus } = useAppSelector((state) => state.game)
  const {
    darkMode,
    hardMode: { active },
  } = useAppSelector((state) => state.settings)

  const styleWidth = useCurrentWidth()

  return (
    <section className='mx-auto w-full max-w-sm select-none md:max-w-md'>
      <div className='flex flex-col items-center justify-center'>
        {/* <Heading2>Игра</Heading2>
        <div className='my-4 mx-auto grid w-full grid-rows-2 justify-center gap-y-2 border-y border-w-grey-tone-2 py-4 dark:border-w-grey-tone-3 md:my-5 md:gap-y-3 md:py-5'>
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
                  type: 'NewGame',
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
        </div> */}
        <Heading2>Настройки</Heading2>
        <div className='mt-8 w-full md:mt-10'>
          <SettingsRow>
            <div className='flex flex-col text-w-quartz dark:text-w-white-dark'>
              <p className='text-lg font-bold md:text-xl'>Повысить сложность</p>
              <p className='text-xs md:text-sm'>
                Необходимо использовать все подсказки
              </p>
            </div>
            <InputSwitch
              onChange={() => dispatch(toggleHardMode())}
              isChecked={active}
            />
          </SettingsRow>
          <SettingsRow>
            <p className='text-lg font-bold text-w-quartz dark:text-w-white-dark md:text-xl'>
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
              <p className='text-lg font-bold md:text-xl'>LocalStorage</p>
              <p className='text-xs md:text-sm'>Очистить</p>
            </div>
            <ButtonIcon icon={'trash'} onClick={() => localStorage.clear()} />
          </SettingsRow>
        </div>
      </div>
      <p className='mt-8 text-xs text-[#787c7e] md:mt-10 md:text-sm'>
        © 2022 Денис Шаманский
      </p>
    </section>
  )
}

export default Settings
