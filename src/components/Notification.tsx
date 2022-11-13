import { useEffect } from 'react'
import { hideNotification } from 'store/notificationSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const Notification = () => {
  const dispatch = useAppDispatch()

  const message = useAppSelector((state) => state.notification.message)

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }, [])

  return (
    <span className='absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[330px] rounded p-2 bg-w-grey-tone-2 dark:bg-w-grey-tone-1 text-center text-xs font-bold uppercase text-w-black box-border -z-10 animate-notificationShow'>
      {message}
    </span>
  )
}

export default Notification
