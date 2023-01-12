interface IExampleProps {
  index: number
  letter: string
  row: number
}

const Example = ({ index, letter, row }: IExampleProps) => {
  const getColorLetter = (row: number) => {
    switch (row) {
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
      className={`box-border flex h-9 w-9 items-center justify-center font-['Bitter'] text-xl font-extrabold uppercase md:h-10 md:w-10 md:text-2xl ${
        index !== row
          ? 'border-2 border-w-grey-tone-1 text-w-quartz dark:border-w-grey-tone-3 dark:text-w-white-dark'
          : getColorLetter(row)
      }`}
      key={index}
    >
      {letter}
    </li>
  )
}

export default Example
