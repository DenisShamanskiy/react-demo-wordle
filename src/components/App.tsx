import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import useCurrentHeight from 'hook/useCurrentHeight'
import Game from '../pages/Game'
import Rules from 'pages/Rules'
import Settings from 'pages/Settings'
import Auth from 'pages/Auth'
import Modal from './Modal/Modal'
import { showNotification } from 'redux/features/notificationSlice'
import {
  addLetterBoard,
  getLocalGameData,
  initialGame,
  nextStep,
  removeLetterBoard,
  setRelultGame,
} from 'redux/features/gameSlice'
import {
  addDataHardMode,
  getLocalSettingData,
  setTheme,
} from 'redux/features/settingsSlice'
import Notification from './Notification'
import Layout from './Layout'
import ProfileEditForm from 'pages/ProfileEditForm'
import Profile from 'pages/Profile'
import Admin from 'pages/Admin'
import AdminWordsList from 'pages/AdminWordsList'
import AdminAddWordForm from 'pages/AdminAddWordForm'
import ProtectedRoute from './ProtectedRoute'
import { useGetWordsQuery } from 'redux/api/wordsApi'
import { openModal } from 'redux/features/modalSlice'
import { useCheckAuthQuery } from 'redux/api/authApi'
import useUpdateStatistics from 'hook/useUpdateStatistics'
import Statistics from 'pages/Statistics'
import AdminUserList from 'pages/AdminUserList'
import User from 'pages/User'
import NotFoundPage from 'pages/NotFoundPage'
import useNotification from 'hook/useNotification'
import useEncryption from 'hook/useEncryption'
import { getRandomWord } from 'utils/helpers'
import Rating from 'pages/Rating'

const App = () => {
  const styleHeight = {
    height: `${useCurrentHeight()}px`,
  }
  const dispatch = useAppDispatch()
  const { encryptValue, decryptValue } = useEncryption(
    process.env['REACT_APP_CRYPTO_KEY']!,
  )
  const { isSuccess } = useGetWordsQuery()
  const { isLoading: isLoadingCheckAuth } = useCheckAuthQuery(null)

  const {
    darkMode: darkTheme,
    hardMode: { active, letters, words: wordsHardMode },
  } = useAppSelector((state) => state.settings)

  const {
    nextLetter,
    currentGuess,
    word: { words, currentWord },
    currentRowIndex,
    gameStatus,
  } = useAppSelector((state) => state.game)

  const visible = useAppSelector((state) => state.notification.visible)

  const path = useLocation()
  const { updateStatistics } = useUpdateStatistics()
  const showNotify = useNotification()

  const handleGuess = async (
    lettersHardMode: string[],
    currentGuessStr: string,
    indexColorArray: number[],
  ) => {
    dispatch(addDataHardMode({ lettersHardMode, currentGuessStr }))
    if (currentGuessStr === decryptValue(currentWord)) {
      dispatch(setRelultGame('WIN'))
      await updateStatistics({ result: 'WIN', currentRowIndex })

      dispatch(
        openModal({ wnd: 'GameResult', title: 'Победа', window: 'GameResult' }),
      )
    } else {
      dispatch(nextStep(indexColorArray))
      if (currentRowIndex === 5) {
        dispatch(setRelultGame({ result: 'FAIL', currentRowIndex }))
        await updateStatistics({ result: 'FAIL' })
        dispatch(
          openModal({
            wnd: 'GameResult',
            title: 'Поражение',
            window: 'GameResult',
          }),
        )
      }
    }
  }
  const checkHardMode = (
    lettersHardMode: string[],
    currentGuessStr: string,
    indexColorArray: number[],
  ) => {
    if (
      letters.length > 0 &&
      !letters.every((item: string) => currentGuess.includes(item))
    ) {
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
      showNotify('notify-warning', 'Введены не все буквы')
      return
    }
    if (!words.includes(currentGuessStr)) {
      showNotify('notify-warning', 'Такого слова нет в списке')
      return
    }
    const indexColorArray: number[] = []
    for (let i = 0; i < 5; i++) {
      indexColorArray.push(decryptValue(currentWord).indexOf(currentGuess[i]!))
    }
    const lettersHardMode = [
      ...new Set(
        [...decryptValue(currentWord)].filter((letter) =>
          currentGuess.includes(letter),
        ),
      ),
    ]

    active
      ? checkHardMode(lettersHardMode, currentGuessStr, indexColorArray)
      : handleGuess(lettersHardMode, currentGuessStr, indexColorArray)
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const pressedKey = String(event.key)

    if (gameStatus === 'WIN') return

    if (pressedKey.length === 1 && pressedKey.match(/[a-z]/gi)) {
      showNotify('notify-info', 'Игра поддерживает только русский язык')
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
  }

  useEffect(() => {
    if (localStorage.getItem('settings')) {
      dispatch(getLocalSettingData())
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('game')) {
      dispatch(getLocalGameData())
    } else {
      if (isSuccess) {
        dispatch(initialGame(encryptValue(getRandomWord(words))))
      }
    }
  }, [isSuccess])

  // Проверка темы
  useEffect(() => {
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
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
      className=' relative z-10 flex h-screen min-h-[600px] w-screen min-w-[360px] flex-col justify-between justify-items-center overflow-hidden bg-w-white focus:outline-none dark:bg-w-black'
    >
      {visible && <Notification />}

      <Routes>
        <Route path='/' element={<Layout isLoading={isLoadingCheckAuth} />}>
          <Route index element={<Game checkGuess={checkGuess} />} />
          <Route
            path='admin'
            element={
              <ProtectedRoute role='ADMIN'>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path='admin/users/:id'
            element={
              <ProtectedRoute role='ADMIN'>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path='admin/users'
            element={
              <ProtectedRoute role='ADMIN'>
                <AdminUserList />
              </ProtectedRoute>
            }
          />
          <Route
            path='admin/words'
            element={
              <ProtectedRoute role='ADMIN'>
                <AdminWordsList />
              </ProtectedRoute>
            }
          />
          <Route
            path='admin/add-word'
            element={
              <ProtectedRoute role='ADMIN'>
                <AdminAddWordForm />
              </ProtectedRoute>
            }
          />
          <Route
            path='profile'
            element={
              <ProtectedRoute role='USER' redirectPath={'/auth'}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path='profile/edit'
            element={
              <ProtectedRoute role='USER' redirectPath={'/auth'}>
                <ProfileEditForm />
              </ProtectedRoute>
            }
          />
          <Route
            path='profile/statistics'
            element={
              <ProtectedRoute role='USER' redirectPath={'/auth'}>
                <Statistics />
              </ProtectedRoute>
            }
          />
          <Route
            path='profile/rating'
            element={
              <ProtectedRoute role='USER' redirectPath={'/rating'}>
                <Rating />
              </ProtectedRoute>
            }
          />
          <Route path='auth' element={<Auth />} />
          <Route path='rules' element={<Rules />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Modal />
    </div>
  )
}

export default App
