import { showNotification } from 'redux/features/notificationSlice'
import { NotificationType } from 'types/store'
import { useAppDispatch, useAppSelector } from './useRedux'

export const useAppNotification = () => {
  const dispatch = useAppDispatch()
  const open = useAppSelector((state) => state.notification.open)
  const showNotify = (type: NotificationType, message: string) => {
    if (!open) {
      dispatch(
        showNotification({
          type: type,
          message: message,
        }),
      )
    }
    return
  }
  return { showNotify }
}

// export default useAppNotification
