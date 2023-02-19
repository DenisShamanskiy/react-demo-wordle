import useNotification from 'hook/useNotification'
import { IFormValues } from 'models/IFormValues'
import { FC } from 'react'
import { UseFormReset } from 'react-hook-form/dist/types/form'
import { useDeleteWordMutation } from '../redux/api/wordsApi'
import ButtonIcon from './ButtonIcon'

type WordProps = {
  style: React.CSSProperties
  index: number
  word: string
  reset: UseFormReset<IFormValues>
}

const Word: FC<WordProps> = ({ index, word, style, reset }) => {
  const showNotify = useNotification()
  const [deleteWord, { isLoading }] = useDeleteWordMutation()

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
      style={style}
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
      <ButtonIcon
        icon='close'
        size='s'
        onClick={() => handleDeleteWord(word)}
        disabled={isLoading}
      />
    </li>
  )
}

export default Word
