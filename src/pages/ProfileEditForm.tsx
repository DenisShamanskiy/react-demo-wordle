import Button from 'components/Button'
import { Input } from 'components/Input'
import InputGroup from 'components/Input/InputGroup'
import InputLabel from 'components/Input/InputLabel'
import { Heading, Section } from 'components/common'
import { useAppNotification, useAppSelector } from 'hook'
import { IFormValues } from 'models/IFormValues'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useUpdateProfileMutation } from 'redux/api/userApi'
import { NotificationColor } from 'types/store'
import { emailRegex } from 'utils/constants'

const ProfileEditForm = () => {
  const { showNotify } = useAppNotification()
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
    <Section width='s'>
      <Heading>Изменить профиль</Heading>
      <form
        className='mt-12 flex w-full flex-col items-center justify-center md:mt-16'
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='mb-12 grid w-full grid-rows-2 gap-12 md:mb-16 md:gap-16'>
          <InputGroup>
            <Input
              name='username'
              type='text'
              id='username'
              isLabel
              autoComplete='off'
              fill
              register={register}
              option={{
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 1,
                  message: 'Минимум 1 символ',
                },
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
              fill
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
    </Section>
  )
}

export default ProfileEditForm
