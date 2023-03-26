import { FC } from 'react'

interface IExampleProps {
  indexLetter: number
  letter: string
  indexRow: number
}

const Example: FC<IExampleProps> = ({ indexLetter, letter, indexRow }) => {
  const getColorLetter = (indexRow: number) => {
    switch (indexRow) {
      case 0:
        return 'border-0 text-w-white dark:text-w-black bg-w-green dark:bg-w-green-dark'
      case 1:
        return 'border-0 text-w-white dark:text-w-black bg-w-yellow dark:bg-w-yellow-dark'
      case 2:
        return 'border-0 text-w-white dark:text-w-white-dark bg-w-grey dark:bg-w-grey-tone-3'
      default:
        return ''
    }
  }

  return (
    <li
      className={`box-border flex h-9 w-9 items-center justify-center rounded font-['Bitter'] text-xl font-extrabold uppercase sm:h-10 sm:w-10 sm:text-2xl ${
        indexLetter !== indexRow
          ? 'border-2 border-w-grey-tone-2 text-w-quartz dark:border-w-grey-dark dark:text-w-white-dark'
          : getColorLetter(indexRow)
      }`}
      key={indexLetter}
    >
      {letter}
    </li>
  )
}

export default Example
