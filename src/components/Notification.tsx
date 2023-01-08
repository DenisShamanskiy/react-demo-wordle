import { useEffect } from 'react'
import { deleteNotification, hideNotification } from 'store/notificationSlice'
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
        open
          ? 'animate-notifyShow md:animate-notifyShowMD'
          : 'animate-notifyHide md:animate-notifyHideMD'
      } ${addColorClassBg(
        type,
      )} dark:gloss-black gloss-white absolute left-1/2 -top-8 z-10 box-border flex h-11 w-80 -translate-x-1/2 cursor-pointer items-center rounded-xl px-2 shadow-glossWhite backdrop-blur-md dark:shadow-glossBlack md:-top-16 md:h-14 md:w-96 md:rounded-2xl`}
    >
      <div
        className={
          'absolute block min-w-[28px] rounded transition duration-300 disabled:opacity-40 md:min-w-[40px]'
        }
      >
        {globalSvgSelector(type, darkMode)}
      </div>
      <p className='relative w-full pl-9 text-center text-xs font-medium text-w-black dark:font-normal dark:text-w-white md:pl-12 md:text-sm '>
        {message}
      </p>
    </button>
  )
}

export default Notification
