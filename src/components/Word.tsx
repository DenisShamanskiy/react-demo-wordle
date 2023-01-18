// import { deleteWord } from 'api/api'
import { IFormValues } from 'models/IFormValues'
import { FC } from 'react'
import { UseFormReset } from 'react-hook-form'
import { useDeleteWordMutation } from '../redux/api/wordsApi'
import IconSVG from './micro-components/IconSVG'

type WordProps = {
  index: number
  word: string
  reset: UseFormReset<IFormValues>
  showNotify: (type: string, message: string) => void
}

const Word: FC<WordProps> = ({ index, word, showNotify, reset }) => {
  const [deleteWord] = useDeleteWordMutation()

  const handleDeleteWord = async (word: string) => {
    try {
      const response = await deleteWord(word).unwrap()
      if (response.errors) {
        showNotify('notify-failure', `${response.errors[0]}`)
        return
      }
      showNotify('notify-success', `Слово "${word.toUpperCase()}" удалено`)
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <li
      className={
        'flex h-10 w-full items-center border-b border-w-grey-tone-2 p-1 last-of-type:border-none dark:border-w-grey-tone-3 md:h-12 md:p-2 '
      }
    >
      <p className='flex h-full w-4 items-center justify-center text-sm font-medium text-w-quartz dark:text-w-white-dark md:w-6 md:text-base'>
        {index + 1}
      </p>
      <p className='m-auto flex items-center justify-center text-sm font-medium uppercase text-w-quartz dark:text-w-white-dark md:text-base'>
        {word}
      </p>
      <button
        type='button'
        onClick={() => handleDeleteWord(word)}
        className='cursor-pointer transition-all duration-300 hover:scale-110'
      >
        <IconSVG icon='remove-circle' size='s' />
      </button>
    </li>
  )
}

export default Word
