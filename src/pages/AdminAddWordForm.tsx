import Button from '../components/Button'
import { Input, InputGroup } from '../components/Input'
import { Heading, Section } from '../components/common'
import { useAppDispatch, useAppNotification } from '../hook'
import { IFormValues } from '../models/IFormValues'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAddWordMutation } from '../redux/api/wordsApi'
import { openModal } from '../redux/features/modalSlice'
import { NotificationColor } from '../types/store'
import { ruRegex } from '../utils/constants'

const AdminAddWordForm = () => {
  const dispatch = useAppDispatch()
  const { showNotify } = useAppNotification()
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
      console.log(response)
      showNotify(NotificationColor.success, `${response.message}`)
      reset()
    } catch (error) {
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

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    handleAddWord(data.word!.toLowerCase())
  }

  return (
    <Section width='s'>
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
    </Section>
  )
}

export default AdminAddWordForm
