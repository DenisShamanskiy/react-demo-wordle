import { useAppSelector } from 'hook'
import { globalSvgSelector } from 'utils/globalSvgSelector'

type KeyboardProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Keyboard = ({ handleClick }: KeyboardProps) => {
  const keyBoard = useAppSelector((state) => state.keyBoard.keyBoard)
  const dark = useAppSelector((state) => state.theme.darkThemeSlice)

  const getColorKey = (color: string | undefined) => {
    switch (color) {
      case 'letter-green':
        return `text-wordleWhite ${dark ? 'bg-wordleGreenDark' : 'bg-wordleGreen'}`
      case 'letter-yellow':
        return `text-wordleWhite ${dark ? 'bg-wordleYellowDark' : 'bg-wordleYellow'}`
      case 'letter-grey':
        return `text-wordleWhite ${dark ? 'bg-wordleGreyDark' : 'bg-wordleGrey'}`
      default:
        return ''
    }
  }
  return (
    <section
      className={`${
        dark ? 'bg-wordleBlack' : 'bg-wordleTone4'
      } w-full max-w-lg mx-auto p-2 rounded-t flex flex-col select-none font-sans`}
    >
      {keyBoard.map((_, indexRow) => {
        if (indexRow === 2) {
          return (
            <div className='w-full flex' key={indexRow}>
              <button
                type='button'
                data-key='↵'
                className={`button-key bg-no-repeat ${
                  dark ? 'bg-wordleTone2Dark border-black' : 'bg-wordleWhite border-wordleTone3'
                } bg-[length:50%] bg-center flex-[1.6_1_0%]`}
                onClick={handleClick}
              >
                {globalSvgSelector('key-enter', dark)}
              </button>
              {keyBoard[indexRow]?.map((buttonKey, indexKey) => {
                return (
                  <button
                    type='button'
                    data-key={buttonKey.value}
                    className={`button-key ${
                      buttonKey.color
                        ? `${getColorKey(buttonKey.color)} ${
                            dark ? 'border-black' : 'border-[color:var(--color-border-dark)]'
                          }`
                        : `${
                            dark
                              ? 'bg-wordleTone2Dark text-wordleWhite border-black'
                              : 'bg-wordleWhite text-wordleQuartz border-wordleTone3'
                          }`
                    }`}
                    onClick={handleClick}
                    key={indexKey}
                  >
                    {buttonKey.value}
                  </button>
                )
              })}
              <button
                type='button'
                data-key='←'
                className={`button-key bg-no-repeat ${
                  dark ? 'bg-wordleTone2Dark border-black' : 'bg-wordleWhite border-wordleTone3'
                } bg-[length:50%] bg-center flex-[1.6_1_0%]`}
                onClick={handleClick}
              >
                {globalSvgSelector('key-backspace', dark)}
              </button>
            </div>
          )
        }
        return (
          <div className='mb-1.5 flex w-full' key={indexRow}>
            {keyBoard[indexRow]?.map((buttonKey, indexKey) => {
              return (
                <button
                  type='button'
                  data-key={buttonKey.value}
                  className={`button-key ${
                    buttonKey.color
                      ? `${getColorKey(buttonKey.color)} ${
                          dark ? 'border-black' : 'border-[color:var(--color-border-dark)]'
                        }`
                      : `${
                          dark
                            ? 'bg-wordleTone2Dark text-wordleWhite border-black'
                            : 'bg-wordleWhite text-wordleQuartz border-wordleTone3'
                        }`
                  }`}
                  onClick={handleClick}
                  key={indexKey}
                >
                  {buttonKey.value}
                </button>
              )
            })}
          </div>
        )
      })}
    </section>
  )
}

export default Keyboard
