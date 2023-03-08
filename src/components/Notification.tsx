import { FC, useEffect, useRef } from 'react'
import '../styles/notification-animation.css'
import { NotificationType } from 'types/store'
import ReactPortal from 'utils/ReactPortal'
import { CSSTransition } from 'react-transition-group'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { hideNotification } from 'redux/features/notificationSlice'

const Notification: FC = () => {
  const nodeRef = useRef(null)
  const dispatch = useAppDispatch()
  const { type, open, message } = useAppSelector((state) => state.notification)

  const BASE_NOTIFICATION_CLASSES =
    'fixed right-1/2 top-0 z-10 flex h-14 w-80 translate-x-1/2 cursor-pointer items-center justify-center rounded-2xl text-sm font-medium text-w-black shadow-glossWhite backdrop-blur-md dark:font-normal dark:text-w-white dark:shadow-glossBlack md:w-96'

  const addColorClassBg = (type: NotificationType) => {
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
        return null
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
    return () => clearTimeout(timeout)
  }, [type, open])

  return (
    <ReactPortal wrapperId='notification'>
      <CSSTransition
        in={open}
        timeout={500}
        unmountOnExit
        classNames='notification'
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          onClick={() => dispatch(hideNotification())}
          className={`${BASE_NOTIFICATION_CLASSES} ${addColorClassBg(type)}`}
        >
          {message}
        </div>
      </CSSTransition>
    </ReactPortal>
  )
}

export default Notification
