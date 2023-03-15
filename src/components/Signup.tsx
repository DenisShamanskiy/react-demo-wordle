import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from 'components/Button'
import InputText from 'components/micro-components/InputText'
import { AuthForm, IFormValues } from 'models/IFormValues'
import { emailRegex } from 'utils/constants'
import { useSignupMutation } from 'redux/api/authApi'
import { usePasswordToggle } from 'hook/usePasswordVisibility'
import { NotificationColor } from 'types/store'
import { openModal } from 'redux/features/modalSlice'
import { useAppDispatch } from 'utils/hook'
import useGameLogic from 'hook/useGameLogic'

const Signup: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
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

  const [isPasswordVisible, togglePasswordVisibility] = usePasswordToggle()
  const { showNotify } = useGameLogic()

  const handleSignup = async (data: AuthForm) => {
    try {
      await signup(data).unwrap()
      goHome()
      showNotify(NotificationColor.success, 'Вы успешно зарегистрировались')
    } catch (e) {
      dispatch(
        openModal({
          component: 'Error',
          error: {
            status: e.status,
            message: e.data.message,
          },
        }),
      )
      console.log('e', e)
      console.log(e.data.message)
      // showNotify(NotificationColor.failure, e.data.message)
    }
  }

  const onSubmit: SubmitHandler<AuthForm> = (data) => handleSignup(data)

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
      <Button
        type='submit'
        disabled={!isDirty || !isValid || isLoadSignup}
        text='Создать аккаунт'
        size='l'
        isLoading={isLoadSignup}
        isRounded
      />
    </form>
  )
}

export default Signup
