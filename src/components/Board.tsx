import { useAppSelector } from 'hook'

const Board = () => {
  const board = useAppSelector((state) => state.board.board)
  const dark = useAppSelector((state) => state.theme.darkThemeSlice)

  const getColorLetter = (value: string | undefined, color: string | undefined) => {
    if (value && color) {
      switch (color) {
        case 'letter-green':
          return `border-0 text-wordleWhite ${dark ? 'bg-wordleGreenDark' : 'bg-wordleGreen'}`
        case 'letter-yellow':
          return `border-0 text-wordleWhite ${dark ? 'bg-wordleYellowDark' : 'bg-wordleYellow'}`
        case 'letter-grey':
          return `border-0 text-wordleWhite ${dark ? 'bg-wordleGreyDark' : 'bg-wordleGrey'}`
        default:
          return ''
      }
    }
    if (value) {
      return `${
        dark
          ? 'border-2 border-wordleTone3Dark text-wordleWhite'
          : 'border-2 border-wordleTone3 text-wordleQuartz'
      }`
    }
    return `${dark ? 'border-2 border-wordleTone4Dark' : 'border-2 border-wordleTone4'}`
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
