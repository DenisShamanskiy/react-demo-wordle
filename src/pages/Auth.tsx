import { useState } from 'react'
import { setUser } from 'store/userSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import Heading2 from 'components/micro-components/Heading2'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from 'components/micro-components/Buttons/Button'
import { Statistics } from 'models/IStats'
import AuthService from 'services/AuthService'

type Inputs = {
  email: string
  password: string
}

const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const statistics = useAppSelector((state) => state.user.statistics)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<Inputs>({
    mode: 'onBlur',
  })

  const goHome = () => navigate('/', { replace: true })

  const [typeFormLogin, setTypeFormLogin] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleRegistration = async (data: Inputs, stats: Statistics) => {
    setIsLoading(true)
    try {
      const response = await AuthService.registration(data.email, data.password, stats)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      dispatch(setUser(response.data.user))
    } catch (e) {
      console.log(e.response?.data?.message)
      setErrorMessage(e.response?.data?.message)
    } finally {
      setIsLoading(false)
      reset()
      goHome()
    }
  }

  const handleLogin = async (data: Inputs) => {
    setIsLoading(true)
    try {
      const response = await AuthService.login(data.email, data.password)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      dispatch(setUser(response.data.user))
    } catch (e) {
      console.log(e.response?.data?.message)
    } finally {
      setIsLoading(false)
      reset()
      goHome()
    }
  }

  return (
    <main className='my-auto'>
      <section className='w-full max-w-xs md:max-w-sm mx-auto select-none'>
        <Heading2>Введите ваши данные</Heading2>
        <div className='relative w-full h-10 md:h-12 mt-8 md:mt-10 flex items-center text-sm md:text-lg font-bold uppercase'>
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
            className='w-1/2 h-full rounded flex justify-center items-center cursor-pointer bg-transparent text-w-red dark:text-w-red-dark peer-checked:bg-w-red dark:peer-checked:bg-w-red-dark peer-checked:text-w-white dark:peer-checked:text-w-black'
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
            className=' w-1/2 h-full rounded flex justify-center items-center cursor-pointer bg-w-red dark:bg-w-red-dark text-w-white dark:text-w-black peer-checked:text-w-red dark:peer-checked:text-w-red-dark peer-checked:bg-transparent'
          >
            Войти
          </label>
        </div>
        <form
          className='relative w-full mt-8 md:mt-10 flex flex-col justify-center items-center'
          onSubmit={handleSubmit((data) => {
            typeFormLogin ? handleLogin(data) : handleRegistration(data, statistics)
          })}
        >
          {errorMessage && (
            <p className='absolute left-0 right-0 top-[10px] my-0 mx-auto text-red-500 text-sm text-center '>
              {errorMessage}
            </p>
          )}

          <label className='relative w-full flex flex-col text-w-quartz dark:text-w-white-dark transition-all'>
            <>
              <span className='ml-1 mb-1 text-sm md:text-base font-bold'>Email</span>
              <input type='email'
                {...register('email', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                  },
                })}
                className='w-full h-10 md:h-12 px-2 bg-transparent rounded border-2 outline-none border-w-grey-tone-2 dark:border-w-grey-tone-4 focus:border-w-blue  dark:focus:border-w-white text-w-quartz dark:text-w-white-dark transition-all duration-300'
              ></input>
              <span className='ml-2 my-1 text-xs text-red-500'>
                {errors?.email && errors?.email.message}
              </span>
            </>
          </label>

          <label className='relative w-full flex flex-col mt-4 md:mt-5 text-w-quartz dark:text-w-white-dark transition-all'>
            <>
              <span className='ml-1 mb-1 text-sm md:text-base font-bold'>Пароль</span>
              <input type='password'
                {...register('password', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 5,
                    message: 'Минимум 5 символов',
                  },
                })}
                className='w-full h-10 md:h-12 px-2 bg-transparent rounded border-2 outline-none border-w-grey-tone-2 dark:border-w-grey-tone-4 focus:border-w-blue  dark:focus:border-w-white text-w-quartz dark:text-w-white-dark transition-all duration-300'
              ></input>
              <span className='ml-2 my-1 text-xs text-red-500'>
                {errors?.password && errors?.password.message}
              </span>
            </>
          </label>

          <div className='mt-10 md:mt-12'>
            <Button
              type='submit'
              disabled={!isValid}
              text={isLoading ? 'загрузка...' : typeFormLogin ? 'войти' : 'создать аккаунт'}
              color={typeFormLogin ? 'green' : 'blue'}
              size='m'
            />
          </div>
        </form>
      </section>
    </main>
  )
}

export default Auth
