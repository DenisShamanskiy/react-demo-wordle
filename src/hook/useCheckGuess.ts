import {
  useAppDispatch,
  useAppNotification,
  useAppSelector,
  useEncryption,
  useUpdateStatistics,
} from 'hook'
import { advanceToNextRow, setRelultGame } from 'redux/features/gameSlice'
import { NotificationColor } from 'types/store'
import { addDataHardMode } from 'redux/features/settingsSlice'
import { openModal } from 'redux/features/modalSlice'

export const useCheckGuess = () => {
  const dispatch = useAppDispatch()
  const { decryptValue } = useEncryption(process.env['REACT_APP_CRYPTO_KEY']!)
  const { updateStatistics } = useUpdateStatistics()

  const {
    hardMode: { active, letters, words: wordsHardMode },
  } = useAppSelector((state) => state.settings)

  const userID = useAppSelector((state) => state.user.id)

  const { currentGuess, words, currentWord, currentRowIndex } = useAppSelector(
    (state) => state.game,
  )

  const { showNotify } = useAppNotification()

  // Функция, которая проверяет, выиграл ли пользователь. Если выиграл, то меняет статус игры на "WIN", обновляет статистику и показывает модальное окно с сообщением о победе
  const checkWin = async (currentGuess: string) => {
    const decryptWord = decryptValue(currentWord)
    if (currentGuess === decryptWord) {
      dispatch(setRelultGame('WIN'))
      userID && (await updateStatistics({ result: 'WIN', currentRowIndex }))
      dispatch(
        openModal({
          component: 'GameResult',
          props: {
            result: 'win',
          },
        }),
      )
      return true
    }
    return false
  }

  // Функция, которая проверяет, проиграл ли пользователь. Если проиграл, то меняет статус игры на "FAIL", обновляет статистику и показывает модальное окно с сообщением о поражении
  const checkFail = async (currentRowIndex: number) => {
    if (currentRowIndex === 5) {
      dispatch(setRelultGame({ result: 'FAIL', currentRowIndex }))
      userID && (await updateStatistics({ result: 'FAIL' }))
      dispatch(
        openModal({
          component: 'GameResult',
          props: {
            result: 'fail',
          },
        }),
      )
      return true
    }
    return false
  }

  // Функция, которая обрабатывает догадку пользователя. В ней вызываются функции checkWin и checkFail, а также добавляются данные для режима сложной игры и обновляется состояние игры
  const handleGuess = async (
    letters: string[],
    currentGuess: string,
    indexColorArray: number[],
  ) => {
    const decryptWord = decryptValue(currentWord)
    dispatch(addDataHardMode({ letters, currentGuess }))
    if (await checkWin(currentGuess)) return
    dispatch(advanceToNextRow({ indexColorArray, decryptWord }))
    if (await checkFail(currentRowIndex)) return
  }

  // Функция, которая проверяет, что все буквы, которые можно использовать для подсказок, были использованы
  const checkLettersHardMode = (letters: string[], currentGuess: string) => {
    if (
      letters.length > 0 &&
      !letters.every((letter: string) => currentGuess.includes(letter))
    ) {
      showNotify(NotificationColor.warning, 'Использованы не все подсказки')
      return false
    }
    return true
  }

  // Функция, которая проверяет, что текущее слово не было уже использовано в режиме сложной игры
  const checkWordsHardMode = (wordsHistory: string[], currentGuess: string) => {
    if (wordsHistory.includes(currentGuess)) {
      showNotify(NotificationColor.warning, 'Такое слово уже было')
      return false
    }
    return true
  }

  // Функция, которая проверяет правильность догадки пользователя в режиме сложной игры
  const checkHardMode = (
    newLettersHardMode: string[],
    currentGuess: string,
    indexColorArray: number[],
  ) => {
    if (
      checkLettersHardMode(letters, currentGuess) &&
      checkWordsHardMode(wordsHardMode, currentGuess)
    ) {
      handleGuess(newLettersHardMode, currentGuess, indexColorArray)
    }
  }

  // Функция, которая проверяет, что догадка пользователя правильна (соответствует правилам игры)
  const isValidGuess = (guess: string, words: string[]) => {
    if (guess.length !== 5) {
      showNotify(NotificationColor.warning, 'Введены не все буквы')
      return false
    }
    if (!words.includes(guess)) {
      showNotify(NotificationColor.warning, 'Такого слова нет в списке')
      return false
    }
    return true
  }

  // Функция, которая возвращает массив индексов букв текущей догадки в текущем слове
  const getIndexColorArray = (guess: string, currentWord: string) => {
    const decryptedWord = decryptValue(currentWord)
    return guess.split('').map((letter) => decryptedWord.indexOf(letter))
  }

  // Функция, которая возвращает массив букв, которые необходимо использовать в режиме сложной игры
  const createLettersHardMode = (currentGuess: string, currentWord: string) => {
    return [
      ...new Set(
        [...decryptValue(currentWord)].filter((letter) =>
          currentGuess.includes(letter),
        ),
      ),
    ]
  }

  // Главная функция, которая вызывается при проверке догадки пользователя. В ней используется вся полученная информация из предыдущих функций
  const checkGuess = () => {
    if (!isValidGuess(currentGuess, words)) {
      return
    }

    const indexColorArray = getIndexColorArray(currentGuess, currentWord)

    const newLettersHardMode = createLettersHardMode(currentGuess, currentWord)

    active
      ? checkHardMode(newLettersHardMode, currentGuess, indexColorArray)
      : handleGuess(newLettersHardMode, currentGuess, indexColorArray)
  }

  return {
    checkGuess,
  }
}
