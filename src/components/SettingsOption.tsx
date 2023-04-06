import { FC, HTMLAttributes, ReactNode } from 'react'
import { Paragraph } from './common'

interface ISettingsOptionProps extends HTMLAttributes<HTMLLIElement> {
  text: string
  children: ReactNode
}

const SettingsOption: FC<ISettingsOptionProps> = ({ text, children }) => {
  return (
    <li className='flex h-11 w-full items-center justify-between transition-all duration-300 sm:h-12'>
      <Paragraph fontSize='base' fontWeight='bold'>
        {text}
      </Paragraph>
      {children}
    </li>
  )
}

export default SettingsOption
