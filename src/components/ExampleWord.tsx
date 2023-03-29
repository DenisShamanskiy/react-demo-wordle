import { FC } from 'react'

interface IExampleProps {
  word: string
  letter: string
  color: 'green' | 'yellow' | 'grey'
}

const getColorLetter = (color: string) => {
  switch (color) {
    case 'green':
      return 'border-0 text-w-white dark:text-w-black bg-w-green dark:bg-w-green-dark'
    case 'yellow':
      return 'border-0 text-w-white dark:text-w-black bg-w-yellow dark:bg-w-yellow-dark'
    case 'grey':
      return 'border-0 text-w-white dark:text-w-white-dark bg-w-grey dark:bg-w-grey-tone-3'
    default:
      return undefined
  }
}

const ExampleWord: FC<IExampleProps> = ({ word, letter, color }) => {
  return (
    <ul className='my-2 flex gap-x-1 font-bitter text-xl font-extrabold uppercase sm:my-4 sm:text-2xl'>
      {word.split('').map((item, index) => {
        return (
          <li
            key={index}
            className={`box-border flex h-9 w-9 items-center justify-center rounded sm:h-10 sm:w-10 ${
              item !== letter
                ? 'border-2 border-w-grey-tone-2 text-w-quartz dark:border-w-grey-dark dark:text-w-white-dark'
                : getColorLetter(color)
            }`}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}

export default ExampleWord
