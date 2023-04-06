import 'react-tooltip/dist/react-tooltip.css'
import '../styles/tooltip.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { toggleHardMode, toggleTheme } from 'redux/features/settingsSlice'
import IconTooltip from 'components/IconTooltip'
import SettingsOption from 'components/SettingsOption'
import { Switch } from 'components/Input'
import ButtonIcon from 'components/ButtonIcon'
import { Heading, Section } from 'components/common'
import { useAppDispatch, useAppSelector, useCurrentWidth } from 'hook'

const Settings = () => {
  const dispatch = useAppDispatch()
  const styleWidth = useCurrentWidth()
  const {
    darkMode,
    hardMode: { active },
  } = useAppSelector((state) => state.settings)

  return (
    <Section width='m'>
      <div className='mb-auto flex h-full w-full flex-col items-center'>
        <Heading>Настройки</Heading>
        <ul className='mt-8 flex w-11/12 flex-col gap-5 sm:mt-10 sm:gap-6'>
          <SettingsOption text='Повысить сложность'>
            <IconTooltip tooltip='Необходимо использовать все подсказки' />
            <Switch
              onChange={() => dispatch(toggleHardMode())}
              isChecked={active}
            />
          </SettingsOption>
          <SettingsOption text={darkMode ? 'Светлая тема' : 'Тёмная тема'}>
            <button className='flex h-9 w-9 items-center justify-center rounded-full shadow-popped transition-all hover:shadow-hover active:shadow-pushed dark:shadow-poppedDark dark:hover:shadow-hoverDark dark:active:shadow-pushedDark sm:h-11 sm:w-11'>
              <DarkModeSwitch
                checked={darkMode}
                sunColor='#49474E'
                moonColor='#abaaa9'
                onChange={() => dispatch(toggleTheme())}
                size={styleWidth <= 640 ? 28 : 32}
              />
            </button>
          </SettingsOption>
          <SettingsOption text='LocalStorage'>
            <IconTooltip tooltip='Здесь хранятся локальные данные приложения.<br />Это поможет их удалить.' />
            <ButtonIcon
              icon='trash'
              size='ml'
              isShadow
              customClass='p-1 sm:p-1.5'
              onClick={() => localStorage.clear()}
            />
          </SettingsOption>
        </ul>
      </div>
      <p className='s mt-8 text-xs text-[#787c7e] md:mt-10 md:text-sm'>
        2023 © Денис Шаманский
      </p>
    </Section>
  )
}

export default Settings
