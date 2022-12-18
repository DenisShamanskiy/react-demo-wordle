import InputText from 'components/micro-components/InputText'
import { IFormValues } from 'models/IFormValues'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailRegex } from 'utils/constants'
// import { useAppSelector } from 'utils/hook'

const Profile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormValues>()

  const watchAllFields = watch()

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    alert(JSON.stringify(data))

  // const { email, isActivated } = useAppSelector((state) => state.user)

  return (
    <main className='h-full w-full'>
      <section className='mx-auto flex h-full w-full max-w-xs select-none flex-col items-center justify-center md:max-w-sm'>
        <form className='w-full' noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className='grid w-full grid-rows-2 gap-9'>
            <InputText
              title='Имя'
              label='name'
              type='text'
              id='username'
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
          </div>
          <div className='grid w-full grid-rows-2 gap-9'>
            <InputText
              title='Почта'
              label='email'
              type='email'
              id='email'
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
          <button className='text-white' type='submit'>
            Сохранить
          </button>
        </form>

        <div className='my-6 flex w-full max-w-md flex-col items-center justify-center border-b border-w-grey-tone-2 pb-4 dark:border-w-grey-tone-3 md:my-8 md:pb-6'></div>
      </section>
    </main>
  )
}

export default Profile
