import { IFormValues } from 'models/IFormValues'
import { FC } from 'react'
import { UseFormReset } from 'react-hook-form/dist/types/form'
import { NotificationColor } from 'types/store'
import { useDeleteWordMutation } from '../redux/api/wordsApi'
import ButtonIcon from './ButtonIcon'
import useGameLogic from 'hook/useGameLogic'

interface IWordProps {
  style: React.CSSProperties
  index: number
  word: string
  reset: UseFormReset<IFormValues>
}

const Word: FC<IWordProps> = ({ index, word, style, reset }) => {
  const { showNotify } = useGameLogic()
  const [deleteWord, { isLoading }] = useDeleteWordMutation()

  const handleDeleteWord = async (word: string) => {
    try {
      const response = await deleteWord(word).unwrap()
      if (response.errors) {
        showNotify(NotificationColor.failure, `${response.errors[0]}`)
        return
      }
      showNotify(
        NotificationColor.success,
        `Слово "${word.toUpperCase()}" удалено`,
      )
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <li
      style={style}
      className={
        'flex h-10 w-full items-center border-b border-w-grey-tone-2 p-1 last-of-type:border-none dark:border-w-grey-tone-3 sm:h-12 sm:p-2 '
      }
    >
      <p className='flex h-full w-4 items-center justify-center text-sm font-medium text-w-quartz dark:text-w-white-dark sm:w-6 sm:text-base'>
        {index + 1}
      </p>
      <p className='m-auto flex items-center justify-center text-sm font-medium uppercase text-w-quartz dark:text-w-white-dark sm:text-base'>
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
