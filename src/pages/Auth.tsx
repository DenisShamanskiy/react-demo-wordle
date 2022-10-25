import { login, registration } from 'api/api'
import { FormEvent, useState } from 'react'
import { setStats, setUser } from 'store/persistSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import Section from 'components/micro-components/Section'
import Heading2 from 'components/micro-components/Heading2'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)
  const stats = useAppSelector((state) => state.persist.stats)

  const goHome = () => navigate('/', { replace: true })

  const [typeFormLogin, setTypeFormLogin] = useState<boolean>(true)

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage('')
    const response = await login(username, password)
    console.log(response)
    if (response.status === 200) {
      console.log(response.status)
      goHome()
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

  async function handleRegistration(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const { user } = await registration(username, password, stats)
    console.log(user)

    dispatch(setUser({ id: user.id, username: user.username }))
    dispatch(setStats({ stats: user.stats }))
  }

  return (
    <Section style={'w-11/12 max-w-md'}>
      <>
        <Heading2>Введите ваши данные</Heading2>
        <div className='relative w-full mt-6 sm:mt-8 overflow-hidden flex items-center text-sm sm:text-base font-bold uppercase'>
          <input
            type='radio'
            name='kk'
            value={'3'}
            id='tab-1'
            className='hidden peer'
            checked={!typeFormLogin}
            onChange={() => setTypeFormLogin(false)}
          />
          <label
            htmlFor='tab-1'
            className='w-1/2 h-9 rounded flex justify-center items-center cursor-pointer bg-transparent text-wordleRed peer-checked:bg-wordleRed peer-checked:text-wordleWhite'
          >
            Регистрация
          </label>

          <input
            type='radio'
            name='kk'
            value='4'
            id='tab-2'
            checked={typeFormLogin}
            onChange={() => setTypeFormLogin(true)}
            className='hidden'
          />
          <label
            htmlFor='tab-2'
            className=' w-1/2 h-9 rounded flex justify-center items-center cursor-pointer bg-wordleRed text-wordleWhite peer-checked:text-wordleRed peer-checked:bg-transparent'
          >
            Войти
          </label>
        </div>

        <form
          className='relative w-full pt-9 pb-4'
          onSubmit={(e) => (typeFormLogin ? handleLogin(e) : handleRegistration(e))}
        >
          {errorMessage && (
            <p className='absolute left-0 right-0 top-[10px] my-0 mx-auto text-red-500 text-sm text-center '>
              {errorMessage}
            </p>
          )}
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
              } w-full h-11 px-2 bg-transparent rounded border-2 outline-none border-wordleTone4 focus:border-wordleGreen transition-all duration-300`}
            ></input>
          </div>

          <button
            type='submit'
            className={`${
              typeFormLogin ? 'bg-wordleGreen' : 'bg-wordleBlue'
            } min-w-[120px] h-9 mt-9 mx-auto px-3 text-wordleWhite rounded block text-center text-sm sm:text-base font-bold uppercase`}
          >
            {typeFormLogin ? 'войти' : 'создать аккаунт'}
          </button>
        </form>
      </>
    </Section>
  )
}

export default Auth
