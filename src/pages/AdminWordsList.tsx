import InputText from 'components/micro-components/InputText'
import WordList from 'components/WordList'
import { IFormValues } from 'models/IFormValues'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from 'utils/hook'

const AdminWordsList: FC = () => {
  const { register, handleSubmit, watch, reset } = useForm<IFormValues>()
  const watchAllFields = watch()

  const words = useAppSelector((state) => state.game.word.words)

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
    <section className='mx-auto flex h-[90%] w-80 select-none flex-col'>
      <form className='flex w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='relative w-full'>
          <InputText
            label='word'
            type='search'
            id='word'
            autoComplete='off'
            maxLength={5}
            placeholder='Поиск...'
            value={watchAllFields.word}
            register={register}
          />
        </div>
      </form>
      {filterWords!.length ? (
        <WordList words={filterWords} reset={reset} />
      ) : (
        <p className='mt-6 text-center text-sm font-medium text-w-quartz dark:text-w-white-dark md:mt-8 md:text-base'>
          Ничего не найдено
        </p>
      )}
    </section>
  )
}

export default AdminWordsList
