import Button from 'components/Button'
import { Input, InputGroup } from 'components/Input'
import Heading from 'components/micro-components/Heading'
import useNotification from 'hook/useAppNotification'
import { IFormValues } from 'models/IFormValues'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAddWordMutation } from 'redux/api/wordsApi'
import { NotificationColor } from 'types/store'
import { ruRegex } from 'utils/constants'

const AdminAddWordForm = () => {
  const { showNotify } = useNotification()
  const [addNewWord, { isLoading }] = useAddWordMutation()
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    watch,
    reset,
  } = useForm<IFormValues>({
    mode: 'onBlur',
  })

  const watchAllFields = watch()

  const handleAddWord = async (word: string) => {
    try {
      const response = await addNewWord(word.toLowerCase()).unwrap()
      if (response.errors) {
        showNotify(NotificationColor.failure, `${response.errors[0]}`)
        return
      }
      showNotify(
        NotificationColor.success,
        `Слово "${word.replace(
          /^./,
          word.charAt(0).toUpperCase(),
        )}" успешно добавлено`,
      )
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    handleAddWord(data.word!.toLowerCase())
  }

  return (
    <section className='mx-auto h-5/6 w-full max-w-xs select-none md:max-w-sm'>
      <Heading>Новое слово</Heading>
      <form
        className='mt-12 flex w-full md:mt-16'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex w-full flex-col items-center'>
          <InputGroup>
            <Input
              name='word'
              type='text'
              id='word'
              autoComplete='off'
              maxLength={5}
              placeholder='Введи слово...'
              option={{
                required: 'Поле обязательно к заполнению',
                pattern: {
                  value: ruRegex,
                  message: 'Слово должно быть на русском языке',
                },
                minLength: {
                  value: 5,
                  message: 'Слово должно быть из 5 букв',
                },
              }}
              error={errors.word}
              register={register}
              value={watchAllFields.word}
            />
          </InputGroup>
          <div className='mt-12 md:mt-16'>
            <Button
              type='submit'
              disabled={!isDirty || !isValid || isLoading}
              text='Добавить'
              size='l'
              isLoading={isLoading}
              isRounded
            />
          </div>
        </div>
      </form>
    </section>
  )
}

export default AdminAddWordForm
