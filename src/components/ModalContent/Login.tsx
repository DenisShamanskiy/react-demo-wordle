import Button from 'components/micro-components/Button/Button'
// import { useAppDispatch, useAppSelector } from 'utils/hook'
// import { openModal } from 'store/modalSlice'
// import { surrenderStats, resetStats, restartGame } from 'store/persistSlice'
import { login, registration } from 'api/api'
import { useState } from 'react'
import { logout, setStats, setUser } from 'store/persistSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import ButtonIcon from 'components/micro-components/Button/ButtonIcon'
import { openModal } from 'store/modalSlice'

const Login = () => {
  const dispatch = useAppDispatch()
  const { window, title } = useAppSelector((state) => state.modal)
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)
  const { isLoggedIn, username: name } = useAppSelector((state) => state.persist.user)
  const stats = useAppSelector((state) => state.persist.stats)

  // const handleConfirmation = () => {
  //   if (['Новая игра?', 'Проиграл', 'Сдаёшься?'].includes(title!)) {
  //     dispatch(restartGame())
  //     dispatch(
  //       openModal({
  //         open: false,
  //         window: window,
  //         title: title,
  //         description: description,
  //       }),
  //     )
  //     if (title === 'Сдаёшься?') {
  //       setTimeout(() => dispatch(openModal({ open: true, window: 'LeaveGame' })), 700)
  //       dispatch(surrenderStats())
  //       return
  //     }
  //     return
  //   }
  //   if (title === 'Сбросить статистику?') {
  //     // localStorage.removeItem('stats')
  //     dispatch(resetStats())
  //     dispatch(
  //       openModal({
  //         open: false,
  //         window: window,
  //         title: title,
  //         description: description,
  //       }),
  //     )
  //     return
  //   }
  // }
  const [typeFormLogin, setTypeFormLogin] = useState<boolean>(true)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function handleLogin() {
    setErrorMessage('')
    const response = await login(username, password)
    console.log(response)
    if (response.status === 200) {
      console.log(response.status)
      dispatch(openModal({ open: false, window: window, title: title }))

      setTimeout(() => {
        dispatch(setUser({ id: response.data.user.id, username: response.data.user.username }))
      }, 500)
      dispatch(setStats({ stats: response.data.user.stats }))
    }
    if (response.status === 400) {
      setErrorMessage(response.data.message)
    }

    // dispatch(setUser({ id: response.data.user.id, username: response.data.user.username }))
    // dispatch(setStats({ stats: response.data.user.stats }))
  }

  async function handleRegistration() {
    const { user } = await registration(username, password, stats)
    console.log(user)

    dispatch(setUser({ id: user.id, username: user.username }))
    dispatch(setStats({ stats: user.stats }))
  }
  const handleLogout = () => {
    dispatch(openModal({ open: false, window: window, title: title }))
    setTimeout(() => {
      dispatch(logout())
    }, 500)
  }

  return (
    <section className='relative w-[340px]'>
      {!isLoggedIn ? (
        <>
          <h2
            className={`${
              darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
            } text-center text-base font-bold uppercase`}
          >
            Введите ваши данные
          </h2>
          <ButtonIcon
            icon={'close'}
            onClick={() => dispatch(openModal({ open: false, window: window }))}
          />
          {errorMessage && (
            <p className=' absolute left-0 right-0 top-9 my-0 mx-auto text-red-500 text-sm text-center '>
              {errorMessage}
            </p>
          )}

          <form className='w-full py-12'>
            <div className=''>
              <input
                type='text'
                required
                placeholder='Логин'
                onChange={(e) => setUsername(e.target.value)}
                className={`${
                  darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
                } w-full h-11 px-2 mb-6 bg-transparent rounded border-2 outline-none border-wordleTone4 focus:border-wordleGreen transition-all duration-300`}
              ></input>
            </div>
            <div className=''>
              <input
                type='password'
                required
                placeholder='Пароль'
                onChange={(e) => setPassword(e.target.value)}
                className={`${
                  darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
                } w-full h-11 px-2 mb-6 bg-transparent rounded border-2 outline-none border-wordleTone4 focus:border-wordleGreen transition-all duration-300`}
              ></input>
            </div>
          </form>

          <div className=' flex justify-center items-center'>
            {/* <Button
          text={'войти'}
          color={'red'}
          onClick={() => handleLogin()}
          style={{ margin: '0 0.5rem 0 0' }}
        />
        <Button
          text={'регистрация'}
          color={'blue'}
          onClick={() => handleRegistration()}
          style={{ margin: '0 0 0 0.5rem', width: '150px' }}
        /> */}
            <Button
              text={typeFormLogin ? 'войти' : 'Зарегистрироваться'}
              color={typeFormLogin ? 'red' : 'blue'}
              onClick={() => (typeFormLogin ? handleLogin() : handleRegistration())}
              style={{
                width: 'fit-content',
                marginBottom: '1rem',
                padding: '0 1rem',
              }}
            />
          </div>
          <button
            className={`mx-auto block ${
              darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
            } text-center text-base font-bold mb-2`}
            onClick={() => setTypeFormLogin(!typeFormLogin)}
          >
            {typeFormLogin ? 'Нет учетной записи? Создайте ее!' : 'Вход'}
          </button>
        </>
      ) : (
        <section className='w-80 select-none'>
          <h2
            className={`${
              darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
            } py-4 text-base font-extrabold text-center uppercase`}
          >
            Игрок
          </h2>
          <ul className='py-4 flex justify-center items-center'>
            {[...name].map((letter, index) => {
              return (
                <li
                  className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center font-['Bitter'] text-2xl font-extrabold text-wordleWhite uppercase ${
                    darkMode ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
                  }`}
                  key={index}
                >
                  {letter}
                </li>
              )
            })}
          </ul>
          <Button
            text={'выйти'}
            color={'red'}
            onClick={() => handleLogout()}
            style={{ margin: '16px auto' }}
          />
        </section>
        // <>
        //   <h2
        //     className={`${
        //       darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        //     } text-center text-base font-bold uppercase`}
        //   >
        //     Игрок
        //   </h2>
        //   <ul className='py-4 flex justify-center items-center'>
        //     {[...name].map((letter, index) => {
        //       return (
        //         <li
        //           className={`w-9 h-9 mr-1 last-of-type:mr-0 inline-flex justify-center items-center font-['Bitter'] text-2xl font-extrabold text-wordleWhite uppercase ${
        //             darkMode ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
        //           }`}
        //           key={index}
        //         >
        //           {letter}
        //         </li>
        //       )
        //     })}
        //   </ul>
        //   {/* <p>{name}</p> */}
        //   <ButtonIcon
        //     icon={'close'}
        //     onClick={() => dispatch(openModal({ open: false, window: window }))}
        //   />
        //   <Button
        //     text={'выйти'}
        //     color={'red'}
        //     onClick={() => dispatch(logout())}
        //     style={{ margin: '1rem auto' }}
        //     // disabled={disabled}
        //   />
        // </>
      )}
    </section>
  )
}

export default Login
