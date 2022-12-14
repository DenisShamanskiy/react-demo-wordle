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
      className={`w-9 md:w-10 h-9 md:h-10 flex justify-center items-center font-['Bitter'] text-xl md:text-2xl font-extrabold uppercase box-border ${
        index !== row
          ? 'border-2 border-w-grey-tone-1 dark:border-w-grey-tone-3 text-w-quartz dark:text-w-white-dark'
          : getColorLetter(row)
      }`}
      key={index}
    >
      {letter}
    </li>
  )
}

export default Example
