import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
// import { WORDS } from 'utils/constants'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import useCurrentHeight from 'utils/getHeight'
import Game from '../pages/Game'
import Header from './Header'
import Rules2 from 'pages/Rules'
import Statistics from 'pages/Statistics'
import Settings from 'pages/Settings'
import Auth from 'pages/Auth'
import User from 'pages/User'
import Modal from './Modal/Modal'
import ConfirmLeave from './ModalContent/ConfirmLeave'
import ConfirmNewGame from './ModalContent/ConfirmNewGame'
import GameResult from './ModalContent/GameResult'
import { getLocalUserData } from 'store/userSlice'
import { openModal } from 'store/modalSlice'
import { showNotification } from 'store/notificationSlice'
import { WORDS } from 'utils/constants'
import {
  addLetterBoard,
  // gameLost,
  // gameWon,
  getLocalGameData,
  initialGame,
  nextStep,
  removeLetterBoard,
  setRelultGame,
} from 'store/gameSlice'
import { updateStats } from 'api/api'
import { addDataHardMode, getLocalSettingData, setTheme } from 'store/settingsSlice'
import { getLocalStatsData, updateStatsLocal } from 'store/statsSlice'

const App = () => {
  const styleHeight = {
    height: `${useCurrentHeight()}px`,
  }

  const dispatch = useAppDispatch()

  const { window: wnd } = useAppSelector((state) => state.modal)
  const {
    darkMode: darkTheme,
    hardMode: { active, letters, words: wordsHardMode },
  } = useAppSelector((state) => state.settings)

  const {
    nextLetter,
    currentGuess,
    word: { currentWord },
    currentRowIndex,
    gameStatus,
  } = useAppSelector((state) => state.game)
  const id = useAppSelector((state) => state.user.id)
  const stats = useAppSelector((state) => state.stats)
  const path = useLocation()

  const handleGuess = (
    lettersHardMode: string[],
    currentGuessStr: string,
    indexColorArray: number[],
  ) => {
    dispatch(addDataHardMode({ lettersHardMode, currentGuessStr }))
    if (currentGuessStr === currentWord) {
      dispatch(setRelultGame('WIN'))
      dispatch(updateStatsLocal({ result: 'WIN', currentRowIndex }))
      dispatch(openModal({ wnd: 'GameResult', title: 'Победа', window: 'GameResult' }))
    } else {
      dispatch(nextStep(indexColorArray))
      if (currentRowIndex === 5) {
        dispatch(setRelultGame({ result: 'FAIL', currentRowIndex }))
        dispatch(updateStatsLocal('FAIL'))
        dispatch(openModal({ wnd: 'GameResult', title: 'Поражение', window: 'GameResult' }))
      }
    }
  }

  const checkHardMode = (
    lettersHardMode: string[],
    currentGuessStr: string,
    indexColorArray: number[],
  ) => {
    if (letters.length > 0 && !letters.every((item) => currentGuess.includes(item))) {
      dispatch(showNotification({ message: 'Использованы не все подсказки' }))
    } else if (wordsHardMode.includes(currentGuessStr)) {
      dispatch(showNotification({ message: 'Слово уже было' }))
    } else {
      handleGuess(lettersHardMode, currentGuessStr, indexColorArray)
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

    active
      ? checkHardMode(lettersHardMode, currentGuessStr, indexColorArray)
      : handleGuess(lettersHardMode, currentGuessStr, indexColorArray)
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

    // if (pressedKey === 'Escape' && open) {
    //   dispatch(openModal({ open: false, wnd: wnd, title: title }))
    //   return
    // }
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
  const getModalContent = (titleContent: string) => {
    switch (titleContent) {
      case 'ConfirmNewGame':
        return <ConfirmNewGame />
      case 'ConfirmLeave':
        return <ConfirmLeave />
      case 'GameResult':
        return <GameResult />
      default:
        return
    }
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(getLocalUserData())
    }
    if (localStorage.getItem('settings')) {
      dispatch(getLocalSettingData())
    }
    if (localStorage.getItem('stats')) {
      dispatch(getLocalStatsData())
    }
    localStorage.getItem('game') ? dispatch(getLocalGameData()) : dispatch(initialGame())
  }, [])

  useEffect(() => {
    if (id) {
      updateStats(id, stats)
    }
  }, [stats])

  useEffect(() => {
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      dispatch(setTheme(true))
    } else {
      document.documentElement.classList.remove('dark')
      dispatch(setTheme(false))
    }
  }, [darkTheme])

  return (
    <div
      style={styleHeight}
      tabIndex={0}
      onKeyDown={path.pathname === '/' ? handleKeyDown : undefined}
      className='bg-w-white dark:bg-w-black relative w-screen h-screen min-w-[414px] flex flex-col justify-between justify-items-center content-between focus:outline-none z-10'
    >
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Game handleClick={handleClick} />} />
          <Route path='user' element={<User />} />
          <Route path='auth' element={<Auth />} />
          <Route path='rules' element={<Rules2 />} />
          <Route path='statistics' element={<Statistics />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
      <Modal>{getModalContent(wnd)}</Modal>
    </div>
  )
}

export default App
