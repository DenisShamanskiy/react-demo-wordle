type SettingsRowProps = {
  children?: JSX.Element[]
}

const SettingsRow = ({ children }: SettingsRowProps) => {
  return (
    <div className='relative w-full h-14 sm:h-16 p-2 flex justify-between items-center transition-all duration-300'>
      {children}
    </div>
  )
}

export default SettingsRow
