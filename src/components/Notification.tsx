import { useEffect } from 'react'
import { deleteNotification, hideNotification } from 'store/notificationSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const Notification = () => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  const { type, open, message } = useAppSelector((state) => state.notification)

  const hidden = () => {
    dispatch(hideNotification())
    setTimeout(() => {
      dispatch(deleteNotification())
    }, 1100)
  }

  useEffect(() => {
    if (type !== 'notify-failure') {
      const timeout = setTimeout(() => {
        hidden()
      }, 5000)
      return () => clearTimeout(timeout)
    }
    return
  }, [type])

  return (
    <button
      type='button'
      onClick={() => hidden()}
      className={`${
        open ? 'animate-notificationShow' : 'animate-notificationHide'
      } dark:gloss-black gloss-white absolute left-1/2 -top-8 z-10 box-border flex min-h-[30px] w-[98%] -translate-x-1/2 cursor-pointer items-center rounded-lg border border-white/80 bg-white/10 shadow-glossWhite backdrop-blur-xl dark:border-black/80 dark:bg-black/10 dark:shadow-glossBlack sm:w-80 md:-top-16 md:h-14 md:min-w-[384px] md:rounded-2xl `}
    >
      <div
        className={
          'absolute mx-0.5 block min-w-[28px] rounded  transition duration-300 disabled:opacity-40 md:mx-1 md:min-w-[40px]'
        }
      >
        {globalSvgSelector(type, darkMode)}
      </div>
      <p className='relative w-full pl-8 text-center text-xs font-normal tracking-wider text-w-quartz dark:text-w-white md:pl-12 md:text-sm'>
        {message}
      </p>
    </button>
  )
}

export default Notification
