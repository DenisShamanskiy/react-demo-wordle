import Button from 'components/Button'
import Heading from 'components/micro-components/Heading'
import InputText from 'components/micro-components/InputText'
import useNotification from 'hook/useNotification'
import { IFormValues } from 'models/IFormValues'
import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useUpdateProfileMutation } from 'redux/api/userApi'
import { NotificationColor } from 'types/store'
import { emailRegex } from 'utils/constants'
import { useAppSelector } from 'utils/hook'

const ProfileEditForm: FC = () => {
  const showNotify = useNotification()
  const { id, email, username } = useAppSelector((state) => state.user)
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<IFormValues>({
    mode: 'onChange',
  })

  const watchAllFields = watch()

  const [updateProfile, { isLoading }] = useUpdateProfileMutation()

  const handleEditProfile = async (
    id: string,
    username: string,
    email: string,
  ) => {
    try {
      await updateProfile({ id, username, email })
      reset({
        username: username,
        email: email,
      })
      showNotify(NotificationColor.success, 'Профиль сохранён')
    } catch (e) {
      console.log(e)
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
    <section className='mx-auto flex h-5/6 w-full max-w-xs select-none flex-col items-center md:max-w-sm'>
      <Heading>Изменить профиль</Heading>
      <form
        className='mt-12 flex w-full flex-col items-center justify-center md:mt-16'
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='mb-12 grid w-full grid-rows-2 gap-12 md:mb-16 md:gap-16'>
          <InputText
            title='Имя'
            label='username'
            type='text'
            id='username'
            autoComplete='off'
            fill
            option={{
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 1,
                message: 'Минимум 1 символ',
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
            autoComplete='off'
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

        <Button
          type='submit'
          disabled={
            (username === watchAllFields.username &&
              email === watchAllFields.email) ||
            !isDirty ||
            !isValid ||
            isLoading
          }
          text='Сохранить'
          size='l'
          isLoading={isLoading}
          isRounded
        />
      </form>
    </section>
  )
}

export default ProfileEditForm
