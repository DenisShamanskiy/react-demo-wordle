import { useAppSelector } from 'utils/hook'

const Board = () => {
  const board = useAppSelector((state) => state.game.board)

  const getColorLetter = (
    value: string | undefined,
    color: string | undefined,
  ) => {
    if (value && color) {
      switch (color) {
        case 'letter-green':
          return 'border-0 text-wordleWhite bg-w-green dark:bg-w-green-dark'
        case 'letter-yellow':
          return 'border-0 text-wordleWhite bg-w-yellow dark:bg-w-yellow-dark'
        case 'letter-grey':
          return 'border-0 text-wordleWhite bg-w-grey dark:bg-w-grey-dark'
        default:
          return ''
      }
    }
    if (value) {
      return 'border-2 border-w-grey-tone-1 dark:border-w-grey-tone-4 text-w-quartz dark:text-w-white'
    }
    return 'border-2 border-2 border-w-grey-tone-2 dark:border-w-grey-dark'
  }

  return (
    <div className='m-auto box-border grid select-none grid-rows-board gap-1 font-["Bitter"] font-extrabold uppercase md:grid-rows-boardMD md:gap-1.5'>
      {board.map((_, indexRow) => {
        return (
          <div
            className='grid grid-cols-board gap-1 text-[28px] md:grid-cols-boardMD md:gap-1.5 md:text-[32px]'
            key={indexRow}
          >
            {board[indexRow]!.map((letter, indexLetter) => {
              return (
                <div
                  className={`flex items-center justify-center rounded-md ${getColorLetter(
                    letter.value,
                    letter.color,
                  )}`}
                  key={indexLetter}
                >
                  {letter.value}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Board
