import { deleteWord } from 'api/api'
import { FC } from 'react'
import { setWords } from 'store/gameSlice'
import { useAppDispatch } from 'utils/hook'
import IconSVG from './micro-components/IconSVG'

type WordProps = {
  index: number
  word: string
  showNotify: (type: string, message: string) => void
}

const Word: FC<WordProps> = ({ index, word, showNotify }) => {
  const dispatch = useAppDispatch()

  const handleDeleteWord = async (word: string) => {
    try {
      const words = await deleteWord(word)
      dispatch(setWords(words))
      showNotify('notify-success', `Слово "${word}" удалено`)
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
