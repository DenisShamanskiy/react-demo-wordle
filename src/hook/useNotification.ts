import { showNotification } from 'redux/features/notificationSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const useNotification = () => {
  const dispatch = useAppDispatch()
  const visible = useAppSelector((state) => state.notification.visible)
  const showNotify = (type: string, message: string) => {
    if (!visible) {
      dispatch(
        showNotification({
          type: type,
          message: message,
        }),
      )
    }
    return
  }
  return showNotify
}

export default useNotification
