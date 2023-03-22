import { FC } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import '../styles/tooltip.css'
import ButtonIcon from 'components/ButtonIcon'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { toggleHardMode, toggleTheme } from 'redux/features/settingsSlice'
import useCurrentWidth from 'hook/useCurrentWidth'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import IconTooltip from 'components/IconTooltip'
import SettingsItem from 'components/SettingsItem'
import { Switch } from 'components/Input'
import { Heading, Section } from 'components/common'

const Settings: FC = () => {
  const dispatch = useAppDispatch()
  const styleWidth = useCurrentWidth()
  const {
    darkMode,
    hardMode: { active },
  } = useAppSelector((state) => state.settings)

  return (
    <Section width='m'>
      <div className='flex w-full flex-col items-center justify-center'>
        <Heading>Настройки</Heading>
        <div className='mt-8 w-full md:mt-10'>
          <SettingsItem text='Повысить сложность'>
            <IconTooltip tooltip='Необходимо использовать все подсказки' />
            <Switch
              onChange={() => dispatch(toggleHardMode())}
              isChecked={active}
            />
          </SettingsItem>
          <SettingsItem text={darkMode ? 'Светлая тема' : 'Тёмная тема'}>
            <DarkModeSwitch
              checked={darkMode}
              sunColor={'#49474E'}
              onChange={() => dispatch(toggleTheme())}
              size={styleWidth > 768 ? 35 : 28}
            />
          </SettingsItem>
          <SettingsItem text='LocalStorage'>
            <IconTooltip tooltip='Очистить LocalStorage' />
            <ButtonIcon
              icon={'trash'}
              size='m'
              onClick={() => localStorage.clear()}
            />
          </SettingsItem>
        </div>
      </div>
      <p className='mt-8 text-xs text-[#787c7e] md:mt-10 md:text-sm'>
        © 2023 Денис Шаманский
      </p>
    </Section>
  )
}

export default Settings
