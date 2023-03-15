import useCheckGuess from './useCheckGuess'
import useAppNotification from './useAppNotification'
import useInputHandlers from './useInputHandlers'

const useGameLogic = () => {
  const { handleKeyPress, handleButtonPress } = useInputHandlers()
  const { checkGuess } = useCheckGuess()
  const { showNotify } = useAppNotification()

  return { handleKeyPress, handleButtonPress, checkGuess, showNotify }
}

export default useGameLogic
