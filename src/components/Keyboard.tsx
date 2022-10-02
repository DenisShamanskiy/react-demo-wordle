import { useAppDispatch, useAppSelector } from 'utils/hook'
import { useEffect } from 'react'
import { colorKey } from 'store/persistSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'

type KeyboardProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Keyboard = ({ handleClick }: KeyboardProps) => {
  const dispatch = useAppDispatch()

  const darkTheme = useAppSelector((state) => state.persist.settings.darkMode)
  const { board, keyBoard, currentRowIndex } = useAppSelector((state) => state.persist.game)

  const getColorKey = (color: string | undefined) => {
    switch (color) {
      case 'letter-green':
        return `text-wordleWhite ${darkTheme ? 'bg-wordleGreenDark' : 'bg-wordleGreen'}`
      case 'letter-yellow':
        return `text-wordleWhite ${darkTheme ? 'bg-wordleYellowDark' : 'bg-wordleYellow'}`
      case 'letter-grey':
        return `text-wordleWhite ${darkTheme ? 'bg-wordleGreyDark' : 'bg-wordleGrey'}`
      default:
        return ''
    }
  }
  useEffect(() => {
    if (currentRowIndex > 0) {
      dispatch(colorKey(board[currentRowIndex - 1]!))
    }
  }, [currentRowIndex]) // eslint-disable-line
  return (
    <section
      className={`${
        darkTheme ? 'bg-wordleBlack' : 'bg-wordleTone4'
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
                  darkTheme
                    ? 'bg-wordleTone2Dark border-black'
                    : 'bg-wordleWhite border-wordleTone3'
                } bg-[length:50%] bg-center flex-[1.6_1_0%]`}
                onClick={handleClick}
              >
                {globalSvgSelector('key-enter', darkTheme)}
              </button>
              {keyBoard[indexRow]?.map((buttonKey, indexKey) => {
                return (
                  <button
                    type='button'
                    data-key={buttonKey.value}
                    className={`button-key ${
                      buttonKey.color
                        ? `${getColorKey(buttonKey.color)} ${
                            darkTheme ? 'border-black' : 'border-[color:var(--color-border-dark)]'
                          }`
                        : `${
                            darkTheme
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
                  darkTheme
                    ? 'bg-wordleTone2Dark border-black'
                    : 'bg-wordleWhite border-wordleTone3'
                } bg-[length:50%] bg-center flex-[1.6_1_0%]`}
                onClick={handleClick}
              >
                {globalSvgSelector('key-backspace', darkTheme)}
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
                          darkTheme ? 'border-black' : 'border-[color:var(--color-border-dark)]'
                        }`
                      : `${
                          darkTheme
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
