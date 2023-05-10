import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '../hook'
import { IFormValues } from '../models/IFormValues'
import { AdminWordListContent } from '../components/Admin'
import { Input, InputGroup } from '../components/Input'
import { Paragraph, Section } from '../components/common'

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
      <form
        className='mb-6 flex w-72 sm:mb-8 sm:w-80'
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <AdminWordListContent words={filterWords} reset={reset} />
      ) : (
        <Paragraph fontSize='xs' fontWeight='semibold'>
          Ничего не найдено
        </Paragraph>
      )}
    </Section>
  )
}

export default AdminWordsList
