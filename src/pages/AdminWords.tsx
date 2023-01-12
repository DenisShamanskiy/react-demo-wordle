import InputText from 'components/micro-components/InputText'
import Word from 'components/Word'
import { IFormValues } from 'models/IFormValues'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from 'utils/hook'

type AdminWordsProps = {
  showNotify: (type: string, message: string) => void
}

const AdminWords: FC<AdminWordsProps> = ({ showNotify }) => {
  const { register, handleSubmit, watch } = useForm<IFormValues>()
  const watchAllFields = watch()

  const words = useAppSelector((state) => state.game.word.words)

  const [filterWords, setFilterWords] = useState(words)

  const handleFilterWords = (search: string) => {
    setFilterWords(() =>
      words!.filter((word) => word.includes(search.toLowerCase())),
    )
  }

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    handleFilterWords(data.word!)

  useEffect(() => {
    handleSubmit(onSubmit)()
  }, [watchAllFields.word])

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
