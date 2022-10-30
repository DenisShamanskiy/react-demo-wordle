import { useAppSelector } from 'utils/hook'

const Board = () => {
  // const board = useAppSelector((state) => state.persist.game.board)
  const board = useAppSelector((state) => state.game.board)
  const darkTheme = useAppSelector((state) => state.settings.darkMode)

  const getColorLetter = (value: string | undefined, color: string | undefined) => {
    if (value && color) {
      switch (color) {
        case 'letter-green':
          return `border-0 text-wordleWhite ${darkTheme ? 'bg-wordleGreenDark' : 'bg-wordleGreen'}`
        case 'letter-yellow':
          return `border-0 text-wordleWhite ${
            darkTheme ? 'bg-wordleYellowDark' : 'bg-wordleYellow'
          }`
        case 'letter-grey':
          return `border-0 text-wordleWhite ${darkTheme ? 'bg-wordleGreyDark' : 'bg-wordleGrey'}`
        default:
          return ''
      }
    }
    if (value) {
      return `${
        darkTheme
          ? 'border-2 border-wordleTone3Dark text-wordleWhite'
          : 'border-2 border-wordleTone3 text-wordleQuartz'
      }`
    }
    return `${darkTheme ? 'border-2 border-wordleTone4Dark' : 'border-2 border-wordleTone4'}`
  }

  return (
    <div className="relative flex justify-center items-center grow overflow-hidden font-['Bitter'] select-none transition-all">
      <div className='w-[350px] h-[420px] p-2.5 grid grid-rows-6 gap-[5px] font-extrabold uppercase box-border'>
        {board.map((_, indexRow) => {
          return (
            <div className='grid grid-cols-5 gap-[5px] text-[2rem]' key={indexRow}>
              {board[indexRow]?.map((letter, indexLetter) => {
                return (
                  <div
                    className={`flex justify-center items-center ${getColorLetter(
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
    </div>
  )
}

export default Board
