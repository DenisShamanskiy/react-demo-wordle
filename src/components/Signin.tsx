import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from 'components/Button'
import { AuthForm, IFormValues } from 'models/IFormValues'
import { emailRegex } from 'utils/constants'
import { useSigninMutation } from 'redux/api/authApi'
import { usePasswordToggle } from 'hook/usePasswordVisibility'
import { NotificationColor } from 'types/store'
import useGameLogic from 'hook/useGameLogic'
import ButtonIcon from './ButtonIcon'
import { useAppDispatch } from 'utils/hook'
import { openModal } from 'redux/features/modalSlice'
import { Input, InputGroup, InputLabel, InputRightElement } from './Input'

const Signin = () => {
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

  const [signin, { isLoading: isLoadSignin }] = useSigninMutation()

  const [isPasswordVisible, togglePasswordVisibility] = usePasswordToggle()
  const { showNotify } = useGameLogic()

  const handleSignin = async (data: AuthForm) => {
    try {
      const { user } = await signin(data).unwrap()
      goHome()
      user.username !== user.email &&
        showNotify(
          NotificationColor.success,
          `С возвращением, ${user.username}`,
        )
    } catch (err) {
      console.error(err)
      dispatch(
        openModal({
          component: 'Error',
          error: {
            status: err.status,
            message: err.data.message,
          },
        }),
      )
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
        <InputGroup>
          <Input
            name='email'
            type='email'
            id='email'
            isLabel
            autoComplete='on'
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
            autoComplete='on'
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
