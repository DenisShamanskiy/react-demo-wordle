import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import {
  useAppDispatch,
  useAppSelector,
  useCurrentHeight,
  useEncryption,
  useGameLogic,
} from 'hook'
import Rules from 'pages/Rules'
import Settings from 'pages/Settings'
import Auth from 'pages/Auth'
import { getLocalGameData, initialGame } from 'redux/features/gameSlice'
import { getLocalSettingData, setTheme } from 'redux/features/settingsSlice'
import ProfileEditForm from 'pages/ProfileEditForm'
import Profile from 'pages/Profile'
import Admin from 'pages/Admin'
import AdminWordsList from 'pages/AdminWordsList'
import AdminAddWordForm from 'pages/AdminAddWordForm'
import { useGetWordsQuery } from 'redux/api/wordsApi'
import { useCheckAuthQuery } from 'redux/api/authApi'
import Statistics from 'pages/Statistics'
import AdminUserList from 'pages/AdminUserList'
import User from 'pages/User'
import NotFoundPage from 'pages/NotFoundPage'
import { getRandomWord } from 'utils/helpers'
import Rating from 'pages/Rating'
import Layout from 'components/Layout'
import Game from 'pages/Game'
import ProtectedRoute from 'components/ProtectedRoute'
import Modal from 'components/Modal'
import Notification from 'components/Notification'
import EmailIsConfirmed from 'pages/EmailIsConfirmed'

const App = () => {
  const styleHeight = {
    height: `${useCurrentHeight()}px`,
  }
  const dispatch = useAppDispatch()
  const { encryptValue } = useEncryption(process.env['REACT_APP_CRYPTO_KEY']!)
  const { handleKeyPress } = useGameLogic()
  const { isSuccess } = useGetWordsQuery()
  const { isLoading: isLoadingCheckAuth } = useCheckAuthQuery(null)

  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const words = useAppSelector((state) => state.game.words)

  const path = useLocation()

  useEffect(() => {
    if (localStorage.getItem('settings')) {
      dispatch(getLocalSettingData())
    }
    if (localStorage.getItem('game')) {
      dispatch(getLocalGameData())
    } else {
      if (isSuccess) {
        dispatch(initialGame(encryptValue(getRandomWord(words))))
      }
    }
  }, [isSuccess])

  useEffect(() => {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]')
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      dispatch(setTheme(true))
      themeColorMetaTag && themeColorMetaTag.setAttribute('content', '#222')
    } else {
      document.documentElement.classList.remove('dark')
      dispatch(setTheme(false))
      themeColorMetaTag && themeColorMetaTag.setAttribute('content', '#F2F3F4')
    }
  }, [darkMode])

  return (
    <div
      style={styleHeight}
      tabIndex={0}
      onKeyDown={path.pathname === '/' ? handleKeyPress : undefined}
      className='relative z-10 flex h-screen min-h-[600px] w-screen min-w-[360px] flex-col justify-between justify-items-center overflow-hidden bg-w-white focus:outline-none dark:bg-[#222]'
    >
      <Routes>
        <Route path='/' element={<Layout isLoading={isLoadingCheckAuth} />}>
          <Route index element={<Game />} />
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
          <Route path='activate/:link' element={<EmailIsConfirmed />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Modal />
      <Notification />
    </div>
  )
}

export default App
