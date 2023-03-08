import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from 'components/Button'
import InputText from 'components/micro-components/InputText'
import { AuthForm, IFormValues } from 'models/IFormValues'
import { emailRegex } from 'utils/constants'
import { useSigninMutation } from 'redux/api/authApi'
import useNotification from 'hook/useNotification'
import { usePasswordToggle } from 'hook/usePasswordVisibility'
import { NotificationColor } from 'types/store'

const Signin: FC = () => {
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

  const [signin, { isLoading: isLoadSignin }] = useSigninMutation()

  const [isPasswordVisible, togglePasswordVisibility] = usePasswordToggle()
  const showNotify = useNotification()

  const handleSignin = async (data: AuthForm) => {
    try {
      const { user } = await signin(data).unwrap()
      goHome()
      user.username !== user.email &&
        showNotify(
          NotificationColor.success,
          `С возвращением, ${user.username}`,
        )
    } catch (e) {
      showNotify(NotificationColor.failure, e.data.message)
    }
  }

  const onSubmit: SubmitHandler<AuthForm> = (data) => handleSignin(data)

  return (
    <form
      className='relative mt-8 flex w-full flex-col items-center justify-center md:mt-10'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='mb-12 grid w-full grid-rows-2 gap-12 md:mb-16 md:gap-16'>
        <InputText
          title='Почта'
          label='email'
          type='email'
          id='email'
          autoComplete='on'
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
          autoComplete='on'
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
      </div>
      <Button
        type='submit'
        disabled={!isDirty || !isValid || isLoadSignin}
        text='Войти'
        size='l'
        isLoading={isLoadSignin}
        isRounded
      />
    </form>
  )
}

export default Signin
