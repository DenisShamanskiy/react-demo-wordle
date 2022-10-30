import { useEffect } from 'react'
import { hideNotification } from 'store/notificationSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const Notification = () => {
  const dispatch = useAppDispatch()

  const message = useAppSelector((state) => state.notification.message)
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }, [])

  return (
    <span
      className={`${
        darkMode ? 'bg-wordleTone4Dark text-wordleWhite' : 'bg-wordleTone4 text-wordleBlack'
      } absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[330px] rounded p-2 text-center text-xs font-bold uppercase box-border -z-10 animate-notificationOpen`}
    >
      {message}
    </span>
  )
}

export default Notification
