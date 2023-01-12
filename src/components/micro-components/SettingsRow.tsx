type SettingsRowProps = {
  children?: JSX.Element[] | JSX.Element
}

const SettingsRow = ({ children }: SettingsRowProps) => {
  return (
    <div className='relative flex h-14 w-full items-center justify-between p-2 transition-all duration-300 md:h-16'>
      {children}
    </div>
  )
}

export default SettingsRow
