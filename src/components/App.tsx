import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { WORDS } from 'utils/constants'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import useCurrentHeight from 'utils/getHeight'
import Restart from './ModalContent/Restart'
import { showNotification } from 'store/notificationSlice'
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
import { updateStats } from 'api/api'
import Game from './Game'
import Layout from './Layout'
import Rules2 from 'pages/Rules'
import Statistics from 'pages/Statistics'
import Settings from 'pages/Settings'
import Auth from 'pages/Auth'
import User from 'pages/User'
import Modal from './Modal/Modal'
import ConfirmLeave from './ModalContent/ConfirmLeave'
import ConfirmNewGame from './ModalContent/ConfirmNewGame'
import GameResult from './ModalContent/GameResult'

function App() {
  const styleHeight = {
    height: `${useCurrentHeight()}px`,
  }
  //

  //
  const dispatch = useAppDispatch()

  // const alert = useAppSelector((state) => state.alert)
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
  const id = useAppSelector((state) => state.persist.user.id)
  const stats = useAppSelector((state) => state.persist.stats)

  const handleGuess = (
    lettersHardMode: string[],
    currentGuessStr: string,
    indexColorArray: number[],
  ) => {
    dispatch(setHardMode({ active: active, letters: lettersHardMode }))
    if (currentGuessStr === currentWord) {
      dispatch(gameWon(indexColorArray))
      dispatch(openModal({ open: true, window: 'GameResult' }))
    } else {
      dispatch(nextStep(indexColorArray))
      if (currentRowIndex === 5) {
        dispatch(gameLost())
        dispatch(openModal({ open: true, window: 'GameResult' }))
      }
    }
  }

  const checkGuess = () => {
    const currentGuessStr = currentGuess.join('')
    if (currentGuessStr.length !== 5) {
      dispatch(showNotification({ message: 'Введены не все буквы' }))
      return
    }
    if (!WORDS.includes(currentGuessStr)) {
      dispatch(showNotification({ message: 'Такого слова нет в списке' }))
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
        dispatch(showNotification({ message: 'Использованы не все подсказки' }))
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
      dispatch(showNotification({ message: 'Игра поддерживает только русский язык' }))
      return
    }
    if (pressedKey === 'Backspace' && nextLetter !== 0) {
      dispatch(removeLetterBoard())
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

    if (pressedKey === 'Escape' && open) {
      dispatch(openModal({ open: false, window: window, title: title }))
      return
    }
  }

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   const pressedKey = event.currentTarget.dataset['key']!
  //   if (gameStatus === 'WIN') return
  //   if (pressedKey === '←' && nextLetter !== 0) {
  //     dispatch(removeLetterBoard())
  //     return
  //   }
  //   if (pressedKey === '↵') {
  //     checkGuess()
  //     return
  //   }
  //   const found = pressedKey.match(/[а-яА-ЯЁё]/gi)
  //   if (!found || found.length > 1) return
  //   else dispatch(addLetterBoard(pressedKey))
  // }
  const getModalContent = (titleContent: string) => {
    switch (titleContent) {
      case 'ConfirmNewGame':
        return <ConfirmNewGame />
      case 'ConfirmLeave':
        return <ConfirmLeave />
      case 'Restart':
        return <Restart />
      case 'GameResult':
        return <GameResult result={gameStatus} />
      default:
        return
    }
  }

  useEffect(() => {
    if (localStorage.getItem('persist')) {
      dispatch(getLocalPersist())
    }
    dispatch(getFirstWord())
  }, [])

  useEffect(() => {
    if (id) {
      updateStats(id, stats)
    }
  }, [stats])

  return (
    <div
      className={`${
        darkTheme ? 'bg-wordleBlack' : 'bg-wordleWhite'
      } relative w-screen min-w-[414px] flex flex-col justify-center justify-items-center content-between focus:outline-none z-10`}
      style={styleHeight}
      tabIndex={open ? -1 : 0}
      onKeyDown={open ? undefined : handleKeyDown}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Game />} />
          <Route path='user' element={<User />} />
          <Route path='auth' element={<Auth />} />
          <Route path='rules' element={<Rules2 />} />
          <Route path='statistics' element={<Statistics />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
      <Modal>{getModalContent(window)}</Modal>
    </div>
  )
}

export default App
