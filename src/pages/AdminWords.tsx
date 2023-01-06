import Word from 'components/Word'
import { IFormValues } from 'models/IFormValues'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { WORDS } from 'utils/constants'

const AdminWords = () => {
  const [filterWords, setFilterWords] = useState(WORDS)
  const { register, handleSubmit, watch } = useForm<IFormValues>()
  const handleFilterWords = (search: string) => {
    setFilterWords(() => WORDS.filter((word) => word.includes(search)))
  }

  const watchAllFields = watch()

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    handleFilterWords(data.word!)

  useEffect(() => {
    handleSubmit(onSubmit)()
  }, [watchAllFields.word])

  return (
    <section className='mx-auto flex h-[90%] w-80 select-none flex-col  '>
      <form className='flex w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='relative w-full'>
          <input
            maxLength={5}
            {...register('word')}
            id='word'
            type='search'
            placeholder='Введи слово...'
            autoComplete='off'
            className='transition-color peer relative z-10 box-border h-10 w-full border-none bg-transparent px-2.5 text-base font-semibold tracking-wider text-w-black placeholder-w-quartz outline-none duration-1000 dark:placeholder-w-white-dark focus:dark:placeholder-w-black md:h-12 md:text-lg'
          ></input>
          <span
            className={`pointer-events-none absolute left-0 bottom-0 z-[9] w-full rounded bg-[#CBDFF8] transition-all duration-500 peer-focus:h-10 dark:bg-w-white-dark md:peer-focus:h-12 ${
              watchAllFields.word ? 'h-10 md:h-12' : 'h-0.5'
            }`}
          ></span>
        </div>
      </form>
      {filterWords.length ? (
        <ul className='scrollbar-hide mt-6 box-border flex flex-col items-center overflow-y-auto rounded-md md:mt-8'>
          {filterWords.map((word, number) => {
            return <Word number={number + 1} word={word} key={number} />
          })}
        </ul>
      ) : (
        <p className='mt-6 text-center text-sm font-medium text-w-quartz dark:text-w-white-dark md:mt-8 md:text-base'>
          Нет такого слова
        </p>
      )}
    </section>
  )
}

export default AdminWords
