import { FC } from 'react'

interface ISettingsItemProps {
  text: string
  children: JSX.Element | JSX.Element[]
}

const SettingsItem: FC<ISettingsItemProps> = ({ text, children }) => {
  return (
    <div className='flex h-14 w-full items-center justify-between p-2 transition-all duration-300 md:h-16'>
      <p className='text-base font-bold text-w-quartz dark:text-w-white-dark md:text-lg '>
        {text}
      </p>
      {children}
    </div>
  )
}

export default SettingsItem
