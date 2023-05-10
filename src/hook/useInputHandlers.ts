import {
  useAppDispatch,
  useAppNotification,
  useAppSelector,
  useCheckGuess,
} from '../hook'
import { addLetterBoard, removeLetterBoard } from '../redux/features/gameSlice'
import { NotificationColor } from '../types/store'

export const useInputHandlers = () => {
  const dispatch = useAppDispatch()

  const { showNotify } = useAppNotification()
  const { checkGuess } = useCheckGuess()

  const { nextLetter, gameStatus } = useAppSelector((state) => state.game)

  const handleKeyInput = (pressedKey: string) => {
    if (gameStatus === 'WIN') return

    if (['←', 'Backspace'].includes(pressedKey) && nextLetter !== 0) {
      dispatch(removeLetterBoard())
      return
    }

    if (['↵', 'Enter'].includes(pressedKey)) {
      checkGuess()
      return
    }

    const found = pressedKey.match(/[а-яА-ЯЁё]/gi)

    if (!found || found.length > 1) {
      return
    }

    if (nextLetter === 5) {
      return
    } else {
      dispatch(addLetterBoard(pressedKey))
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const pressedKey = event.key as string

    if (pressedKey.length === 1 && pressedKey.match(/[a-z]/gi)) {
      showNotify(
        NotificationColor.info,
        'Игра поддерживает только русский язык',
      )
      return
    }

    handleKeyInput(pressedKey)
  }

  const handleButtonPress = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const pressedKey = event.currentTarget.dataset['key'] as string
    handleKeyInput(pressedKey)
  }

  return {
    handleKeyPress,
    handleButtonPress,
  }
}
