import { Input, InputGroup } from 'components/Input'
import WordList from 'components/WordList'
import { Section } from 'components/common'
import { IFormValues } from 'models/IFormValues'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from 'utils/hook'

const AdminWordsList = () => {
  const { register, handleSubmit, watch, reset } = useForm<IFormValues>()
  const watchAllFields = watch()

  const words = useAppSelector((state) => state.game.words)

  const [filterWords, setFilterWords] = useState([''])

  const handleFilterWords = (search: string) => {
    setFilterWords(() =>
      words!.filter((word) => word.includes(search.toLowerCase())),
    )
  }

  const onSubmit: SubmitHandler<IFormValues> = (words) =>
    handleFilterWords(words.word!)

  useEffect(() => {
    handleSubmit(onSubmit)()
  }, [watchAllFields.word])

  useEffect(() => {
    setFilterWords(words!)
  }, [words])

  return (
    <Section width='s'>
      <form className='flex w-full' onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Input
            name='word'
            type='search'
            id='word'
            autoComplete='off'
            register={register}
            maxLength={5}
            placeholder='Поиск...'
            value={watchAllFields.word}
          />
        </InputGroup>
      </form>
      {filterWords.length ? (
        <WordList words={filterWords} reset={reset} />
      ) : (
        <p className='mt-6 text-center text-sm font-medium text-w-quartz dark:text-w-white-dark md:mt-8 md:text-base'>
          Ничего не найдено
        </p>
      )}
    </Section>
  )
}

export default AdminWordsList
