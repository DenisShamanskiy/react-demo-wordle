import Button from 'components/micro-components/Buttons/Button'
import Heading from 'components/micro-components/Heading'
import InputText from 'components/micro-components/InputText'
import { IFormValues } from 'models/IFormValues'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailRegex } from 'utils/constants'
import { useAppSelector } from 'utils/hook'
// import { useAppSelector } from 'utils/hook'

const ProfileEdit = () => {
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    watch,
    setValue,
  } = useForm<IFormValues>({
    mode: 'onTouched',
  })

  const { email } = useAppSelector((state) => state.user)
  const name = email

  const watchAllFields = watch()
  console.log(watchAllFields)

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    alert(JSON.stringify(data))

  useEffect(() => {
    setValue('name', email!, {
      shouldValidate: true,
      shouldDirty: true,
    })
    setValue('email', email!, {
      shouldValidate: true,
      shouldDirty: true,
    })
  }, [name, email])

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
            label='name'
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
            error={errors.name}
            register={register}
            value={watchAllFields.name}
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
