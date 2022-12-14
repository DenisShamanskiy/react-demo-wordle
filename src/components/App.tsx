import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import useCurrentHeight from 'hook/useCurrentHeight'
import Game from '../pages/Game'
import Rules from 'pages/Rules'
import Settings from 'pages/Settings'
import Auth from 'pages/Auth'
import Modal from './Modal/Modal'
import {
  getLocalUserData,
  logout,
  setUser,
  updateStatsLocal,
} from 'store/userSlice'
import { openModal } from 'store/modalSlice'
import { showNotification } from 'store/notificationSlice'
import {
  addLetterBoard,
  getLocalGameData,
  initialGame,
  nextStep,
  removeLetterBoard,
  setRelultGame,
} from 'store/gameSlice'
import { checkAuth, getWords, updateStatistics } from 'api/api'
import {
  addDataHardMode,
  getLocalSettingData,
  setTheme,
} from 'store/settingsSlice'
import Notification from './Notification'
import Layout from './Layout'
import ProfileEdit from 'pages/ProfileEdit'
import Profile from 'pages/Profile'
import Admin from 'pages/Admin'
import AdminWords from 'pages/AdminWords'
import AdminAddWord from 'pages/AdminAddWord'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  const styleHeight = {
    height: `${useCurrentHeight()}px`,
  }

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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

  const { id } = useAppSelector((state) => state.user)
  const statistics = useAppSelector((state) => state.user.statistics)
  const visible = useAppSelector((state) => state.notification.visible)

  const path = useLocation()
  const goHome = () => navigate('/', { replace: true })

  const handleGuess = (
    lettersHardMode: string[],
    currentGuessStr: string,
    indexColorArray: number[],
  ) => {
    dispatch(addDataHardMode({ lettersHardMode, currentGuessStr }))
    if (currentGuessStr === currentWord) {
      dispatch(setRelultGame('WIN'))
      dispatch(updateStatsLocal({ result: 'WIN', currentRowIndex }))
      dispatch(
        openModal({ wnd: 'GameResult', title: '????????????', window: 'GameResult' }),
      )
    } else {
      dispatch(nextStep(indexColorArray))
      if (currentRowIndex === 5) {
        dispatch(setRelultGame({ result: 'FAIL', currentRowIndex }))
        dispatch(updateStatsLocal('FAIL'))
        dispatch(
          openModal({
            wnd: 'GameResult',
            title: '??????????????????',
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
      !letters.every((item) => currentGuess.includes(item))
    ) {
      dispatch(showNotification({ message: '???????????????????????? ???? ?????? ??????????????????' }))
    } else if (wordsHardMode.includes(currentGuessStr)) {
      dispatch(showNotification({ message: '?????????? ?????? ????????' }))
    } else {
      handleGuess(lettersHardMode, currentGuessStr, indexColorArray)
    }
  }

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

  const checkGuess = () => {
    const currentGuessStr = currentGuess.join('')

    if (currentGuessStr.length !== 5) {
      showNotify('notify-warning', '?????????????? ???? ?????? ??????????')
      return
    }
    if (!words.includes(currentGuessStr)) {
      showNotify('notify-warning', '???????????? ?????????? ?????? ?? ????????????')
      return
    }
    const indexColorArray: number[] = []
    for (let i = 0; i < 5; i++) {
      indexColorArray.push(currentWord.indexOf(currentGuess[i]!))
    }
    const lettersHardMode = [
      ...new Set(
        [...currentWord].filter((letter) => currentGuess.includes(letter)),
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
      showNotify('notify-info', '???????? ???????????????????????? ???????????? ?????????????? ????????')
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

    const found = pressedKey.match(/[??-????-??????]/gi)
    if (!found || found.length > 1) return
    if (nextLetter === 5) {
      console.log('nextLetter === 5')
      return
    } else dispatch(addLetterBoard(pressedKey))
  }

  const checkUser = async () => {
    try {
      const { data } = await checkAuth()
      localStorage.setItem('token', data.accessToken)
      dispatch(setUser(data.user))
    } catch (e) {
      console.log(e)
      dispatch(logout())
      goHome()
    }
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(getLocalUserData())
    }
    if (localStorage.getItem('settings')) {
      dispatch(getLocalSettingData())
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('game')) {
      dispatch(getLocalGameData())
    } else {
      const fetchData = async () => {
        const { words } = await getWords()
        console.log(words)

        dispatch(initialGame(words))
      }
      fetchData().catch(console.error)
    }
  }, [])

  useEffect(() => {
    if (id) {
      updateStatistics(id, statistics)
    }
  }, [statistics])

  // ???????????????? ????????
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

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkUser()
    }
  }, [])

  return (
    <div
      style={styleHeight}
      tabIndex={0}
      onKeyDown={path.pathname === '/' ? handleKeyDown : undefined}
      className=' relative z-10 flex h-screen w-screen min-w-[414px] flex-col justify-between justify-items-center overflow-hidden bg-w-white focus:outline-none dark:bg-w-black'
    >
      {visible && <Notification />}

      <Routes>
        <Route path='/' element={<Layout />}>
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
            path='admin/words'
            element={
              <ProtectedRoute role='ADMIN'>
                <AdminWords showNotify={showNotify} />
              </ProtectedRoute>
            }
          />
          <Route
            path='admin/add-word'
            element={
              <ProtectedRoute role='ADMIN'>
                <AdminAddWord showNotify={showNotify} />
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
                <ProfileEdit showNotify={showNotify} />
              </ProtectedRoute>
            }
          />
          <Route path='auth' element={<Auth showNotify={showNotify} />} />
          <Route path='rules' element={<Rules />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>

      <Modal />
    </div>
  )
}

export default App
