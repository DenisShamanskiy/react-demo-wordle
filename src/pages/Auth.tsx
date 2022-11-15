import { login, registration } from 'api/api'
import { useState } from 'react'
import { /* setStats,*/ setUser } from 'store/userSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import Heading2 from 'components/micro-components/Heading2'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from 'components/micro-components/Buttons/Button'

type Inputs = {
  username: string
  password: string
}

const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<Inputs>({
    mode: 'onBlur',
  })

  const stats = useAppSelector((state) => state.stats)

  const goHome = () => navigate('/', { replace: true })

  const [typeFormLogin, setTypeFormLogin] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = async (data: Inputs) => {
    setIsLoading(true)
    const response = await login(data.username, data.password)
    if (response.status === 200) {
      console.log(response.status)
      goHome()
      setTimeout(() => {
        dispatch(setUser({ id: response.data.user.id, username: response.data.user.username }))
      }, 500)
      // dispatch(setStats({ stats: response.data.user.stats }))
    }
    if (response.status === 400) {
      setErrorMessage(response.data.message)
    }
    reset()
    setIsLoading(false)
  }

  const handleRegistration = async (data: Inputs) => {
    console.log(data)

    setIsLoading(true)
    const { user } = await registration(data.username, data.password, stats)
    console.log(user)
    setIsLoading(false)
    dispatch(setUser({ id: user.id, username: user.username }))
    // dispatch(setStats({ stats: user.stats }))
    reset()
  }

  return (
    <main className='my-auto'>
      <section className='w-11/12 max-w-md mx-auto p-5 md:p-7 select-none'>
        <Heading2>Введите ваши данные</Heading2>
        <div className='relative w-full mt-7 md:mt-9 overflow-hidden flex items-center text-sm md:text-base font-bold uppercase'>
          <input
            type='radio'
            name='registration'
            id='registration'
            className='hidden peer'
            checked={!typeFormLogin}
            onChange={() => setTypeFormLogin(false)}
          />
          <label
            htmlFor='registration'
            className='w-1/2 h-9 rounded flex justify-center items-center cursor-pointer bg-transparent text-w-red dark:text-w-red-dark peer-checked:bg-w-red dark:peer-checked:bg-w-red-dark peer-checked:text-w-white dark:peer-checked:text-w-black'
          >
            Регистрация
          </label>

          <input
            type='radio'
            name='login'
            id='login'
            checked={typeFormLogin}
            onChange={() => setTypeFormLogin(true)}
            className='hidden'
          />
          <label
            htmlFor='login'
            className=' w-1/2 h-9 rounded flex justify-center items-center cursor-pointer bg-w-red dark:bg-w-red-dark text-w-white dark:text-w-black peer-checked:text-w-red dark:peer-checked:text-w-red-dark peer-checked:bg-transparent'
          >
            Войти
          </label>
        </div>

        <form
          className='relative w-full pt-9 pb-4 flex flex-col justify-center items-center'
          onSubmit={handleSubmit((data) => {
            typeFormLogin ? handleLogin(data) : handleRegistration(data)
          })}
        >
          {errorMessage && (
            <p className='absolute left-0 right-0 top-[10px] my-0 mx-auto text-red-500 text-sm text-center '>
              {errorMessage}
            </p>
          )}

          <label className='relative w-full flex flex-col pt-3 md:pt-4 text-w-quartz dark:text-w-white-dark transition-all'>
            <>
              <span className='ml-1 mb-1 text-sm md:text-base font-bold'>Логин</span>
              <input
                {...register('username', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                  },
                })}
                className='w-full h-11 px-2 bg-transparent rounded border-2 outline-none border-w-grey-tone-2 dark:border-w-grey-tone-4 focus:border-w-blue  dark:focus:border-w-white text-w-quartz dark:text-w-white-dark transition-all duration-300'
              ></input>
              <span className='ml-2 my-1 text-xs text-red-500'>
                {errors?.username && errors?.username.message}
              </span>
            </>
          </label>

          <label className='relative w-full flex flex-col pt-3 md:pt-4 text-w-quartz dark:text-w-white-dark transition-all'>
            <>
              <span className='ml-1 mb-1 text-sm md:text-base font-bold'>Пароль</span>
              <input
                {...register('password', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                  },
                })}
                className='w-full h-11 px-2 bg-transparent rounded border-2 outline-none border-w-grey-tone-2 dark:border-w-grey-tone-4 focus:border-w-blue  dark:focus:border-w-white text-w-quartz dark:text-w-white-dark transition-all duration-300'
              ></input>
              <span className='ml-2 my-1 text-xs text-red-500'>
                {errors?.password && errors?.password.message}
              </span>
            </>
          </label>
          <div className=' w-3/5 mt-8 md:mt-10'>
            <Button
              type='submit'
              disabled={!isValid}
              text={isLoading ? 'загрузка...' : typeFormLogin ? 'войти' : 'создать аккаунт'}
              color={typeFormLogin ? 'green' : 'blue'}
            />
          </div>
        </form>
      </section>
    </main>
  )
}

export default Auth
