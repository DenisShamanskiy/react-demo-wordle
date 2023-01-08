import { getWords } from 'api/api'
import InputText from 'components/micro-components/InputText'
import Word from 'components/Word'
import { IFormValues } from 'models/IFormValues'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { setWordList } from 'store/adminSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

type AdminWordsProps = {
  showNotify: (type: string, message: string) => void
}

const AdminWords: FC<AdminWordsProps> = ({ showNotify }) => {
  const dispatch = useAppDispatch()

  const { register, handleSubmit, watch } = useForm<IFormValues>()
  const watchAllFields = watch()

  const { words } = useAppSelector((state) => state.admin.wordList)

  const [filterWords, setFilterWords] = useState([''])

  const handleFilterWords = (search: string) => {
    setFilterWords(() => words!.filter((word) => word.includes(search)))
  }

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    handleFilterWords(data.word!)

  const requestWordList = async () => {
    const { id, words } = await getWords()
    dispatch(setWordList({ id, words }))
    setFilterWords(words)
  }

  useEffect(() => {
    handleSubmit(onSubmit)()
  }, [watchAllFields.word])

  useEffect(() => {
    requestWordList()
  }, [words!.length])

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
            register={register}
          />
        </div>
      </form>
      {filterWords!.length ? (
        <ul className='scrollbar-hide mt-6 box-border flex flex-col items-center overflow-y-auto rounded-md md:mt-8'>
          {filterWords!.map((word, index) => {
            return (
              <Word
                index={index}
                word={word}
                key={index}
                showNotify={showNotify}
              />
            )
          })}
        </ul>
      ) : (
        <p className='mt-6 text-center text-sm font-medium text-w-quartz dark:text-w-white-dark md:mt-8 md:text-base'>
          Ничего не найдено
        </p>
      )}
    </section>
  )
}

export default AdminWords
