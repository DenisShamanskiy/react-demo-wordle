import { useAppSelector } from 'utils/hook'

const Alert = () => {
  const { open, message } = useAppSelector((state) => state.alert)
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  return (
    <span
      className={`${
        darkMode
          ? 'from-gray-100 to-gray-300 text-gray-900'
          : 'from-zinc-700 to-zinc-800 text-white'
      } absolute top-0 left-1/2 w-full p-2 text-center text-xs uppercase font-bold shadow-lg bg-gradient-to-b box-border ${
        open && 'animate-moveOpen sm:animate-SMmoveOpen'
      }`}
    >
      {message}
    </span>
  )
}

export default Alert
