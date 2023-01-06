import { FC } from 'react'

type WordProps = {
  number: number
  word: string
}

const Word: FC<WordProps> = ({ number, word }) => {
  return (
    <li
      className={
        'flex w-full items-center border-b border-w-grey-tone-2 p-2 last-of-type:border-none dark:border-w-grey-tone-3 '
      }
    >
      <p className='flex h-full w-6 items-center justify-center  text-sm  font-medium text-w-quartz dark:text-w-white-dark md:w-8 md:text-base'>
        {number}
      </p>
      <p className='m-auto flex items-center justify-center text-sm font-medium uppercase text-w-quartz  dark:text-w-white-dark md:text-base'>
        {word}
      </p>
    </li>
  )
}

export default Word
