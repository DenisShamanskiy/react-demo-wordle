import { FC, useEffect, useState } from 'react'
import Heading from 'components/micro-components/Heading'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from 'components/Button'
import InputText from 'components/micro-components/InputText'
import { AuthForm, IFormValues } from 'models/IFormValues'
import { emailRegex } from 'utils/constants'
import { useSigninMutation, useSignupMutation } from 'redux/api/authApi'
import useNotification from 'hook/useNotification'

const Auth: FC = () => {
  const showNotify = useNotification()
  const navigate = useNavigate()

  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    watch,
    reset,
  } = useForm<IFormValues>({
    mode: 'onBlur',
  })
  const watchAllFields = watch()

  const goHome = () => navigate('/', { replace: true })

  const [signup, { isLoading: isLoadSignup }] = useSignupMutation()
  const [signin, { isLoading: isLoadSignin }] = useSigninMutation()

  const [typeFormLogin, setTypeFormLogin] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSignup = async (data: AuthForm) => {
    setIsLoading(true)
    try {
      await signup(data).unwrap()
      goHome()
      showNotify('notify-success', 'Вы успешно зарегистрировались')
    } catch (e) {
      console.log(e.data.message)
      showNotify('notify-failure', e.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignin = async (data: AuthForm) => {
    setIsLoading(true)
    try {
      const { user } = await signin(data).unwrap()
      goHome()
      user.username !== user.email &&
        showNotify('notify-success', `С возвращением, ${user.username}`)
    } catch (e) {
      showNotify('notify-failure', e.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit: SubmitHandler<AuthForm> = (data) => {
    typeFormLogin ? handleSignin(data) : handleSignup(data)
  }
  const [type, setType] = useState('password')
  const toggleTypeInput = () => {
    setType(type === 'password' ? 'text' : 'password')
  }

  useEffect(() => {
    reset()
  }, [typeFormLogin])

  return (
    <section className='mx-auto w-full max-w-xs select-none md:max-w-sm'>
      <Heading>Введите ваши данные</Heading>
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
            autoComplete={typeFormLogin ? 'on' : 'off'}
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
            type={type}
            id='password'
            autoComplete={typeFormLogin ? 'on' : 'off'}
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
            onClick={toggleTypeInput}
          />
          {!typeFormLogin && (
            <InputText
              title='Подтвердите пароль'
              label='password_repeat'
              type={type}
              id='password_repeat'
              option={{
                required: 'Поле обязательно к заполнению',
                validate: (value) =>
                  value === watchAllFields.password || 'Пароли не совпадают',
              }}
              error={errors.password_repeat}
              register={register}
              value={watchAllFields.password_repeat}
              onClick={toggleTypeInput}
            />
          )}
        </div>

        <div className='mt-12 w-full md:mt-16'>
          <Button
            type='submit'
            disabled={!isDirty || !isValid || isLoadSignin || isLoadSignup}
            text={
              isLoading
                ? 'Загрузка'
                : typeFormLogin
                ? 'Войти'
                : 'Создать аккаунт'
            }
            color={typeFormLogin ? 'green' : 'blue'}
            size='full'
            isLoading={typeFormLogin ? isLoadSignin : isLoadSignup}
          />
        </div>
      </form>
    </section>
  )
}

export default Auth
