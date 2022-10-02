import React, { useEffect } from 'react'
import { WORDS } from 'utils/constants'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import useCurrentHeight from 'utils/getHeight'
import Alert from './Alert'
import Header from './Header'
import Board from './Board'
import Keyboard from './Keyboard'
import Modal from './Modal'
import Confirmation from './ModalContent/Confirmation'
import GameWin from './ModalContent/GameWin'
import GameLost from './ModalContent/GameLost'
import LeaveGame from './ModalContent/LeaveGame'
import Rules from './ModalContent/Rules'
import Statistics from './ModalContent/Stats'
import Settings from './ModalContent/Settings'
import Restart from './ModalContent/Restart'
import { handleAlert } from 'store/alertSlice'
import { openModal } from 'store/modalSlice'
import {
  addLetterBoard,
  gameLost,
  gameWon,
  getFirstWord,
  getLocalPersist,
  nextStep,
  removeLetterBoard,
  setHardMode,
} from 'store/persistSlice'

function App() {
  const styleHeight = {
    height: `${useCurrentHeight()}px`,
  }
  const dispatch = useAppDispatch()

  const alert = useAppSelector((state) => state.alert)
  const { open, window, title } = useAppSelector((state) => state.modal)
  const {
    darkMode: darkTheme,
    hardMode: { active, letters },
  } = useAppSelector((state) => state.persist.settings)
  const {
    nextLetter,
    currentGuess,
    word: { currentWord },
    currentRowIndex,
    gameStatus,
  } = useAppSelector((state) => state.persist.game)

  const showAlert = (open: boolean, message: string) => {
    if (!alert.open) {
      dispatch(handleAlert({ open: open, message: message }))
      setTimeout(() => {
        dispatch(handleAlert({ open: false, message: alert.message }))
      }, 5000)
    }
  }
  const handleGuess = (
    lettersHardMode: string[],
    currentGuessStr: string,
    indexColorArray: number[],
  ) => {
    dispatch(setHardMode({ active: active, letters: lettersHardMode }))
    if (currentGuessStr === currentWord) {
      dispatch(gameWon(indexColorArray))
      dispatch(openModal({ open: true, window: 'Win' }))
    } else {
      dispatch(nextStep(indexColorArray))
      if (currentRowIndex === 5) {
        dispatch(gameLost())
        dispatch(openModal({ open: true, window: 'GameLost', title: 'Проиграл' }))
      }
    }
  }

  const checkGuess = () => {
    const currentGuessStr = currentGuess.join('')
    if (currentGuessStr.length !== 5) {
      showAlert(true, 'Введены не все буквы')
      return
    }
    if (!WORDS.includes(currentGuessStr)) {
      showAlert(true, 'Такого слова нет в списке')
      return
    }
    const indexColorArray: number[] = []
    for (let i = 0; i < 5; i++) {
      indexColorArray.push(currentWord.indexOf(currentGuess[i]!))
    }
    const lettersHardMode = [
      ...new Set([...currentWord].filter((letter) => currentGuess.includes(letter))),
    ]
    if (active) {
      if (
        letters.length === 0 ||
        (letters.length > 0 && letters.every((item) => currentGuess.includes(item)))
      ) {
        handleGuess(lettersHardMode, currentGuessStr, indexColorArray)
      } else if (letters.length > 0 && !letters.every((item) => currentGuess.includes(item))) {
        showAlert(true, 'Использованы не все подсказки')
      }
    }
    if (!active) {
      handleGuess(lettersHardMode, currentGuessStr, indexColorArray)
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const pressedKey = String(event.key)
    if (gameStatus === 'WIN') return
    if (pressedKey.length === 1 && pressedKey.match(/[a-z]/gi)) {
      showAlert(true, 'Игра поддерживает только русский язык')
      return
    }
    if (pressedKey === 'Backspace' && nextLetter !== 0) {
      dispatch(removeLetterBoard())
      return
    }
    if (pressedKey === 'Escape' && open) {
      dispatch(openModal({ open: false, window: window, title: title }))
      return
    }
    if (pressedKey === 'Enter') {
      checkGuess()
      return
    }
    const found = pressedKey.match(/[а-яА-ЯЁё]/gi)
    if (!found || found.length > 1) return
    if (nextLetter === 5) {
      console.log('nextLetter === 5')
      return
    } else dispatch(addLetterBoard(pressedKey))
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pressedKey = event.currentTarget.dataset['key']!
    if (gameStatus === 'WIN') return
    if (pressedKey === '←' && nextLetter !== 0) {
      dispatch(removeLetterBoard())
      return
    }
    if (pressedKey === '↵') {
      checkGuess()
      return
    }
    const found = pressedKey.match(/[а-яА-ЯЁё]/gi)
    if (!found || found.length > 1) return
    else dispatch(addLetterBoard(pressedKey))
  }
  const showModal = (modal: string) => {
    switch (modal) {
      case 'Confirmation':
        return <Confirmation />
      case 'GameLost':
        return <GameLost />
      case 'LeaveGame':
        return <LeaveGame />
      case 'Rules':
        return <Rules />
      case 'Statistics':
        return <Statistics />
      case 'Settings':
        return <Settings />
      case 'Restart':
        return <Restart />
      case 'Win':
        return <GameWin />
      default:
        return undefined
    }
  }

  useEffect(() => {
    if (localStorage.getItem('persist')) {
      dispatch(getLocalPersist())
    }
    dispatch(getFirstWord())
  }, [])
  return (
    <div
      className={`${
        darkTheme ? 'bg-wordleBlack' : 'bg-wordleWhite'
      } relative w-screen min-w-[414px] flex flex-col justify-center content-between focus:outline-none z-10`}
      style={styleHeight}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Header />
      {alert.open && <Alert />}
      <Board />
      <Keyboard handleClick={handleClick} />
      <Modal>{showModal(window)}</Modal>
    </div>
  )
}

export default App
