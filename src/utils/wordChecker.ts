import { NotificationColor, NotificationType } from 'types/store'
import useEncryption from 'hook/useEncryption'

import useNotification from '../hook/useAppNotification'

const createIsValidGuess =
  (showNotify: (type: NotificationType, message: string) => void) =>
  (guess: string, words: string[]) => {
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

export const isValidGuess = createIsValidGuess(useNotification().showNotify)

const createGetIndexColorArray =
  (decryptValue: (value: string) => string) =>
  (guess: string, currentWord: string) => {
    const decryptedWord = decryptValue(currentWord)
    return guess.split('').map((letter) => decryptedWord.indexOf(letter))
  }

export const getIndexColorArray = createGetIndexColorArray(
  useEncryption(process.env['REACT_APP_CRYPTO_KEY']!).decryptValue,
)

export const LettersHardMode =
  (decryptValue: (value: string) => string) =>
  (currentGuess: string, currentWord: string) => {
    return [
      ...new Set(
        [...decryptValue(currentWord)].filter((letter) =>
          currentGuess.includes(letter),
        ),
      ),
    ]
  }

export const createLettersHardMode = LettersHardMode(
  useEncryption(process.env['REACT_APP_CRYPTO_KEY']!).decryptValue,
)
