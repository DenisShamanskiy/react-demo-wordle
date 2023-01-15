import { updatePrifile } from 'api/api'
import Button from 'components/micro-components/Buttons/Button'
import Heading from 'components/micro-components/Heading'
import InputText from 'components/micro-components/InputText'
import { IFormValues } from 'models/IFormValues'
import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { setUser } from 'redux/features/userSlice'
import { emailRegex } from 'utils/constants'
import { useAppDispatch, useAppSelector } from 'utils/hook'

type ProfileEditProps = {
  showNotify: (type: string, message: string) => void
}

const ProfileEdit: FC<ProfileEditProps> = ({ showNotify }) => {
  const { id, email, username } = useAppSelector((state) => state.user)
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<IFormValues>({
    mode: 'onTouched',
  })
  const dispatch = useAppDispatch()

  const watchAllFields = watch()

  const handleEditProfile = async (
    id: string,
    username: string,
    email: string,
  ) => {
    try {
      const response = await updatePrifile(id, username, email)
      dispatch(setUser(response))
      reset({
        username: username,
        email: email,
      })
      showNotify('notify-success', 'Профиль сохранён')
    } catch (e) {
      showNotify('notify-failure', e.response?.data?.message)
    }
  }
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const { username, email } = data
    handleEditProfile(id!, username!, email!)
  }

  useEffect(() => {
    setValue('username', username ? username : email!, {
      shouldValidate: true,
    })
    setValue('email', email!, {
      shouldValidate: true,
    })
  }, [username, email])

  return (
    <section className='mx-auto flex h-full w-full max-w-xs select-none flex-col items-center justify-center md:max-w-sm'>
      <Heading>Изменить профиль</Heading>
      <form
        className='mt-12 w-full md:mt-16'
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid w-full grid-rows-2 gap-12 md:gap-16'>
          <InputText
            title='Имя'
            label='username'
            type='text'
            id='username'
            fill
            option={{
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов',
              },
            }}
            error={errors.username}
            register={register}
            value={watchAllFields.username}
          />

          <InputText
            title='Почта'
            label='email'
            type='email'
            id='email'
            fill
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
        </div>

        <div className='mt-12 w-full md:mt-16'>
          <Button
            type='submit'
            disabled={!isDirty || !isValid}
            text='Сохранить'
            color='blue'
            size='full'
          />
        </div>
      </form>
    </section>
  )
}

export default ProfileEdit
