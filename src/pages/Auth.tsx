import { useState } from 'react'
import { setUser } from 'store/userSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import Heading2 from 'components/micro-components/Heading'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from 'components/micro-components/Buttons/Button'
import { Statistics } from 'models/IStats'
import AuthService from 'services/AuthService'
import InputText from 'components/micro-components/InputText'
import { IFormValues } from 'models/IFormValues'
import { emailRegex } from 'utils/constants'

const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const statistics = useAppSelector((state) => state.user.statistics)

  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    watch,
  } = useForm<IFormValues>({
    mode: 'onTouched',
  })
  const watchAllFields = watch()

  const goHome = () => navigate('/', { replace: true })

  const [typeFormLogin, setTypeFormLogin] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleRegistration = async (
    email: string,
    password: string,
    stats: Statistics,
  ) => {
    setIsLoading(true)
    try {
      const response = await AuthService.registration(email, password, stats)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      dispatch(setUser(response.data.user))
      goHome()
    } catch (e) {
      console.log(e.response?.data?.message)
      setErrorMessage(e.response?.data?.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await AuthService.login(email, password)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      dispatch(setUser(response.data.user))
      goHome()
    } catch (e) {
      setErrorMessage(e.response?.data?.message)
      console.log(e.response?.data?.message)
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const { email, password } = data
    typeFormLogin
      ? handleLogin(email!, password!)
      : handleRegistration(email!, password!, statistics)
  }

  console.log(errorMessage)

  return (
    <section className='mx-auto w-full max-w-xs select-none md:max-w-sm'>
      <Heading2>Введите ваши данные</Heading2>
      <div className='relative mt-12 flex h-10 w-full items-center text-sm font-bold uppercase md:mt-16 md:h-12 md:text-lg'>
        <input
          type='radio'
          name='registration'
          id='registration'
          className='peer hidden'
          checked={!typeFormLogin}
          onChange={() => setTypeFormLogin(false)}
        />
        <label
          htmlFor='registration'
          className='flex h-full w-1/2 cursor-pointer items-center justify-center rounded bg-transparent text-w-red peer-checked:bg-w-red peer-checked:text-w-white dark:text-w-red-dark dark:peer-checked:bg-w-red-dark dark:peer-checked:text-w-black'
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
          className=' flex h-full w-1/2 cursor-pointer items-center justify-center rounded bg-w-red text-w-white peer-checked:bg-transparent peer-checked:text-w-red dark:bg-w-red-dark dark:text-w-black dark:peer-checked:text-w-red-dark'
        >
          Войти
        </label>
      </div>

      {errorMessage && (
        <p className='absolute left-0 right-0 top-[10px] my-0 mx-auto text-center text-sm text-red-500 '>
          {errorMessage}
        </p>
      )}

      <form
        className='relative mt-12 flex w-full flex-col items-center justify-center md:mt-16'
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid w-full grid-rows-2 gap-12 md:gap-16'>
          <InputText
            title='Почта'
            label='email'
            type='email'
            id='email'
            option={{
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: emailRegex,
                message: 'Неверный адрес почты',
              },
            }}
            error={errors.email}
            register={register}
            value={watchAllFields.email}
          />

          <InputText
            title='Пароль'
            label='password'
            type='password'
            id='password'
            option={{
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов',
              },
            }}
            error={errors.password}
            register={register}
            value={watchAllFields.password}
          />
        </div>

        <div className='mt-12 w-full md:mt-16'>
          <Button
            type='submit'
            disabled={!isDirty || !isValid}
            text={
              isLoading
                ? 'загрузка...'
                : typeFormLogin
                ? 'войти'
                : 'создать аккаунт'
            }
            color={typeFormLogin ? 'green' : 'blue'}
            size='full'
          />
        </div>
      </form>
    </section>
  )
}

export default Auth
