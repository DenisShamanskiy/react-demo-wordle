import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from 'components/Button'
import { AuthForm, IFormValues } from 'models/IFormValues'
import { emailRegex } from 'utils/constants'
import { useSignupMutation } from 'redux/api/authApi'
import { usePasswordToggle } from 'hook/usePasswordVisibility'
import { NotificationColor } from 'types/store'
import { openModal } from 'redux/features/modalSlice'
import ButtonIcon from './ButtonIcon'
import { Input, InputGroup, InputLabel, InputRightElement } from './Input'
import { useAppDispatch, useGameLogic } from 'hook'

const Signup = () => {
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
    } catch (error) {
      console.error(error)
      dispatch(
        openModal({
          component: 'Error',
          error: {
            status: error.status,
            message: error.data.message,
          },
        }),
      )
    }
  }

  const onSubmit: SubmitHandler<AuthForm> = (data) => handleSignup(data)

  return (
    <form
      className='relative mt-8 flex w-full flex-col items-center justify-center sm:mt-10'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='mb-12 grid w-full grid-rows-2 gap-12 sm:mb-16 sm:gap-16'>
        <InputGroup>
          <Input
            name='username'
            type='text'
            id='username'
            isLabel
            autoComplete='off'
            register={register}
            option={{
              required: 'Поле обязательно к заполнению',
            }}
            value={watchAllFields.username}
            error={errors.username}
          />
          <InputLabel
            id='username'
            title='Имя'
            value={watchAllFields.username}
            error={errors.username}
          />
        </InputGroup>
        <InputGroup>
          <Input
            name='email'
            type='email'
            id='email'
            isLabel
            autoComplete='off'
            register={register}
            option={{
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: emailRegex,
                message: 'Неверный адрес почты',
              },
            }}
            value={watchAllFields.email}
            error={errors.email}
          />
          <InputLabel
            id='email'
            title='Почта'
            value={watchAllFields.email}
            error={errors.email}
          />
        </InputGroup>
        <InputGroup>
          <Input
            name='password'
            type={isPasswordVisible ? 'text' : 'password'}
            id='password'
            isLabel
            autoComplete='off'
            register={register}
            option={{
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов',
              },
            }}
            value={watchAllFields.password}
            error={errors.password}
          />
          <InputLabel
            id='password'
            title='Пароль'
            value={watchAllFields.password}
            error={errors.password}
          />
          <InputRightElement>
            <ButtonIcon
              icon={!isPasswordVisible ? 'eye' : 'eye-off'}
              size={'xs'}
              position='password'
              onClick={togglePasswordVisibility}
            />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input
            name='password_repeat'
            type={isPasswordVisible ? 'text' : 'password'}
            id='password_repeat'
            isLabel
            autoComplete='on'
            register={register}
            option={{
              required: 'Поле обязательно к заполнению',
              validate: (value) =>
                value === watchAllFields.password || 'Пароли не совпадают',
            }}
            value={watchAllFields.password_repeat}
            error={errors.password_repeat}
          />
          <InputLabel
            id='password_repeat'
            title='Подтвердите пароль'
            value={watchAllFields.password_repeat}
            error={errors.password_repeat}
          />
          <InputRightElement>
            <ButtonIcon
              icon={!isPasswordVisible ? 'eye' : 'eye-off'}
              size={'xs'}
              position='password'
              onClick={togglePasswordVisibility}
            />
          </InputRightElement>
        </InputGroup>
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
