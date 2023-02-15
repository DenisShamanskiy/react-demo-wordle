import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from 'components/Button'
import InputText from 'components/micro-components/InputText'
import { AuthForm, IFormValues } from 'models/IFormValues'
import { emailRegex } from 'utils/constants'
import { useSignupMutation } from 'redux/api/authApi'
import useNotification from 'hook/useNotification'
import { usePasswordToggle } from 'hook/usePasswordVisibility'

const Signup: FC = () => {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    watch,
  } = useForm<IFormValues>({
    mode: 'onBlur',
  })
  const watchAllFields = watch()

  const goHome = () => navigate('/', { replace: true })

  const [signup, { isLoading: isLoadSignup }] = useSignupMutation()

  const [isLoading, setIsLoading] = useState(false)

  const [isPasswordVisible, togglePasswordVisibility] = usePasswordToggle()
  const showNotify = useNotification()

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

  const onSubmit: SubmitHandler<AuthForm> = (data) => handleSignup(data)

  return (
    <div className=' h-[450px] '>
      <form
        className='relative mt-8 flex w-full flex-col items-center justify-center md:mt-10'
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid w-full grid-rows-2 gap-12 md:gap-16'>
          <InputText
            title='Почта'
            label='email'
            type='email'
            id='email'
            autoComplete='off'
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
            type={isPasswordVisible ? 'text' : 'password'}
            id='password'
            autoComplete='off'
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
            onClick={togglePasswordVisibility}
          />

          <InputText
            title='Подтвердите пароль'
            label='password_repeat'
            type={isPasswordVisible ? 'text' : 'password'}
            id='password_repeat'
            option={{
              required: 'Поле обязательно к заполнению',
              validate: (value) =>
                value === watchAllFields.password || 'Пароли не совпадают',
            }}
            error={errors.password_repeat}
            register={register}
            value={watchAllFields.password_repeat}
            onClick={togglePasswordVisibility}
          />
        </div>

        <div className='mt-12 w-full md:mt-16'>
          <Button
            type='submit'
            disabled={!isDirty || !isValid || isLoadSignup}
            text={isLoading ? 'Загрузка' : 'Создать аккаунт'}
            color='blue'
            size='full'
            isLoading={isLoadSignup}
          />
        </div>
      </form>
    </div>
  )
}

export default Signup
