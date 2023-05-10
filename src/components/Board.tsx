import { useAppSelector } from '../hook'
import { ColorLetter } from '../types/store'

const getColorClasses = (value: string | null, color: ColorLetter) => {
  if (value && color) {
    switch (color) {
      case 'green':
        return 'border-0 text-wordleWhite bg-w-green dark:bg-w-green-dark'
      case 'yellow':
        return 'border-0 text-wordleWhite bg-w-yellow dark:bg-w-yellow-dark'
      case 'grey':
        return 'border-0 text-wordleWhite bg-w-grey dark:bg-w-grey-dark'
      default:
        return ''
    }
  }
  if (value) {
    return 'border-2 border-w-grey-tone-1 dark:border-w-grey-tone-4 text-w-quartz dark:text-w-white'
  }
  return 'border-2 border-w-grey-tone-2 dark:border-w-grey-dark'
}

const Board = () => {
  const board = useAppSelector((state) => state.game.board)

  return (
    <div className='m-auto box-border grid grid-rows-56 gap-1 font-["Bitter"] text-3xl font-extrabold uppercase sm:grid-rows-64 sm:gap-1.5 sm:text-4xl'>
      {board.map((_, indexRow) => {
        return (
          <div
            className='grid grid-cols-56 gap-1 sm:grid-cols-64 sm:gap-1.5'
            key={indexRow}
          >
            {board[indexRow]!.map((item, indexLetter) => {
              return (
                <div
                  className={`flex items-center justify-center rounded-md ${getColorClasses(
                    item.value,
                    item.color,
                  )}`}
                  key={indexLetter}
                >
                  {item.value}
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
