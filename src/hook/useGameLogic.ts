import { useAppNotification, useCheckGuess, useInputHandlers } from 'hook'

export const useGameLogic = () => {
  const { handleKeyPress, handleButtonPress } = useInputHandlers()
  const { checkGuess } = useCheckGuess()
  const { showNotify } = useAppNotification()

  return { handleKeyPress, handleButtonPress, checkGuess, showNotify }
}
