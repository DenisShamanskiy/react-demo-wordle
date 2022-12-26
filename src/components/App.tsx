import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import useCurrentHeight from 'utils/getHeight'
import Game from '../pages/Game'
import Rules2 from 'pages/Rules'
import Statistics from 'pages/Statistics'
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
import { WORDS } from 'utils/constants'
import {
  addLetterBoard,
  getLocalGameData,
  initialGame,
  nextStep,
  removeLetterBoard,
  setRelultGame,
} from 'store/gameSlice'
import { checkAuth, updateStatistics } from 'api/api'
import {
  addDataHardMode,
  getLocalSettingData,
  setTheme,
} from 'store/settingsSlice'
import Notification from './Notification'
import Layout from './Layout'
import ProfileEdit from 'pages/ProfileEdit'
import Profile from 'pages/Profile'

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
    word: { currentWord },
    currentRowIndex,
    gameStatus,
  } = useAppSelector((state) => state.game)
  const id = useAppSelector((state) => state.user.id)
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
        openModal({ wnd: 'GameResult', title: 'Победа', window: 'GameResult' }),
      )
    } else {
      dispatch(nextStep(indexColorArray))
      if (currentRowIndex === 5) {
        dispatch(setRelultGame({ result: 'FAIL', currentRowIndex }))
        dispatch(updateStatsLocal('FAIL'))
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
      !letters.every((item) => currentGuess.includes(item))
    ) {
      dispatch(showNotification({ message: 'Использованы не все подсказки' }))
    } else if (wordsHardMode.includes(currentGuessStr)) {
      dispatch(showNotification({ message: 'Слово уже было' }))
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
      showNotify('notify-warning', 'Введены не все буквы')
      return
    }
    if (!WORDS.includes(currentGuessStr)) {
      showNotify('notify-warning', 'Такого слова нет в списке')
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

  const checkUser = async () => {
    try {
      const response = await checkAuth()
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      dispatch(setUser(response.data.user))
    } catch (e) {
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
    localStorage.getItem('game')
      ? dispatch(getLocalGameData())
      : dispatch(initialGame())
  }, [])

  useEffect(() => {
    if (id) {
      updateStatistics(id, statistics)
    }
  }, [statistics])

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

  useEffect(() => {
    if (localStorage.getItem('token')) {
      // checkAuth()
      checkUser()
    }
  }, [])

  return (
    <div
      style={styleHeight}
      tabIndex={0}
      onKeyDown={path.pathname === '/' ? handleKeyDown : undefined}
      className='relative z-10 flex h-screen w-screen min-w-[414px] flex-col justify-between justify-items-center bg-w-white focus:outline-none dark:bg-w-black'
    >
      {visible && <Notification />}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Game checkGuess={checkGuess} />} />
          <Route path='profile' element={<Profile />} />
          <Route path='profile/edit' element={<ProfileEdit />} />
          <Route path='auth' element={<Auth />} />
          <Route path='rules' element={<Rules2 />} />
          <Route path='statistics' element={<Statistics />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>

      <Modal />
    </div>
  )
}

export default App
