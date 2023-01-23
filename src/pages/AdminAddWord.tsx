import Button from 'components/Button'
import Heading from 'components/micro-components/Heading'
import InputText from 'components/micro-components/InputText'
import { IFormValues } from 'models/IFormValues'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAddWordMutation } from 'redux/api/wordsApi'
import { ruRegex } from 'utils/constants'

type AdminAddWordProps = {
  showNotify: (type: string, message: string) => void
}

const AdminAddWord: FC<AdminAddWordProps> = ({ showNotify }) => {
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
        showNotify('notify-failure', `${response.errors[0]}`)
        return
      }
      showNotify(
        'notify-success',
        `Слово "${word.toUpperCase()}" успешно добавлено`,
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
    <section className='mx-auto w-full max-w-xs select-none md:max-w-sm'>
      <Heading>Новое слово</Heading>
      <form
        className='md:nt-16 mt-12 flex w-full'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='relative w-full'>
          <InputText
            label='word'
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
          <div className='mt-12 w-full md:mt-16'>
            <Button
              type='submit'
              disabled={!isDirty || !isValid || isLoading}
              text='Добавить'
              color='blue'
              size='full'
              isLoading={isLoading}
            />
          </div>
        </div>
      </form>
    </section>
  )
}

export default AdminAddWord
