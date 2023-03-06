import { useEffect } from 'react'
import {
  deleteNotification,
  hideNotification,
} from 'redux/features/notificationSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const Notification = () => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  const { type, open, message } = useAppSelector((state) => state.notification)

  const addColorClassBg = (type: string) => {
    switch (type) {
      case 'notify-success':
        return 'bg-[#32c682]/30'
      case 'notify-failure':
        return 'bg-[#ff5549]/30'
      case 'notify-warning':
        return 'bg-[#eebf31]/30'
      case 'notify-info':
        return 'bg-[#26c0d3]/30'
      default:
        return ''
    }
  }

  useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => {
        dispatch(deleteNotification())
      }, 500)
      return () => clearTimeout(timeout)
    }
    return
  }, [open])

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
    return () => clearTimeout(timeout)
  }, [type])

  return (
    <button
      type='button'
      onClick={() => dispatch(hideNotification())}
      className={`${
        open ? 'animate-notifyShowMD' : 'animate-notifyHideMD'
      } ${addColorClassBg(
        type,
      )} absolute left-1/2 -top-16 z-10 box-border flex h-14 w-80 -translate-x-1/2 cursor-pointer items-center rounded-2xl px-2 shadow-glossWhite backdrop-blur-md dark:shadow-glossBlack md:w-96`}
    >
      <div
        className={
          'absolute block min-w-[28px] rounded transition duration-300 disabled:opacity-40 md:min-w-[40px]'
        }
      >
        {globalSvgSelector(type, darkMode)}
      </div>
      <p className='relative w-full pl-9 text-center text-sm font-medium text-w-black dark:font-normal dark:text-w-white md:pl-12 '>
        {message}
      </p>
    </button>
  )
}

export default Notification
