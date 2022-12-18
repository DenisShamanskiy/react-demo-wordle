import { useEffect } from 'react'
import { addLetterBoard, colorKey, removeLetterBoard } from 'store/gameSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

type KeyboardProps = {
  checkGuess: () => void
}

const Keyboard = ({ checkGuess }: KeyboardProps) => {
  const dispatch = useAppDispatch()

  const darkTheme = useAppSelector((state) => state.settings.darkMode)
  const { board, keyBoard, currentRowIndex, gameStatus, nextLetter } =
    useAppSelector((state) => state.game)

  const addClassColor = (color: string | undefined) => {
    switch (color) {
      case 'letter-green':
        return 'bg-w-green dark:bg-w-green-dark'
      case 'letter-yellow':
        return 'bg-w-yellow dark:bg-w-yellow-dark'
      case 'letter-grey':
        return 'bg-w-grey dark:bg-w-grey-dark'
      default:
        return ''
    }
  }

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const pressedKey = event.currentTarget.dataset['key']!
    if (gameStatus === 'WIN') return
    if (pressedKey === '←' && nextLetter !== 0) {
      dispatch(removeLetterBoard())
      return
    }
    if (pressedKey === '↵') {
      checkGuess()
      return
    }
    const found = pressedKey.match(/[а-яА-ЯЁё]/gi)
    if (!found || found.length > 1) return
    else dispatch(addLetterBoard(pressedKey))
  }

  useEffect(() => {
    if (currentRowIndex > 0) {
      dispatch(colorKey(board[currentRowIndex - 1]!))
    }
  }, [currentRowIndex]) // eslint-disable-line

  return (
    <div className='mx-auto flex w-full max-w-2xl select-none flex-col gap-y-1.5 rounded-t bg-w-grey-tone-2 p-1.5 font-sans dark:bg-w-black'>
      {keyBoard.map((_, indexRow) => {
        if (indexRow === 2) {
          return (
            <div className='flex w-full gap-x-1.5' key={indexRow}>
              <button
                type='button'
                data-key='↵'
                className='button-key grow border-w-grey-tone-1 bg-w-white dark:bg-w-grey-tone-5'
                onClick={handleClick}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 512 512'
                >
                  <title>key-enter</title>
                  <path
                    d='M176,176V136a40,40,0,0,1,40-40H424a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H216a40,40,0,0,1-40-40V336'
                    fill='none'
                    stroke={darkTheme ? '#F2F3F4' : '#49474E'}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32px'
                  />
                  <polyline
                    points='272 336 352 256 272 176'
                    fill='none'
                    stroke={darkTheme ? '#F2F3F4' : '#49474E'}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32px'
                  />
                  <line
                    x1='48'
                    y1='256'
                    x2='336'
                    y2='256'
                    fill='none'
                    stroke={darkTheme ? '#F2F3F4' : '#49474E'}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32px'
                  />
                </svg>
              </button>
              {keyBoard[indexRow]?.map((buttonKey, indexKey) => {
                return (
                  <button
                    type='button'
                    data-key={buttonKey.value}
                    className={`button-key w-[calc((100%-(6px*11))/12)] ${
                      buttonKey.color
                        ? `${addClassColor(
                            buttonKey.color,
                          )} } border-[#6c6e70] text-w-white`
                        : 'border-w-grey-tone-1 bg-w-white text-w-quartz dark:bg-w-grey-tone-5 dark:text-w-white'
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
                className='button-key grow border-w-grey-tone-1 bg-w-white dark:bg-w-grey-tone-5'
                onClick={handleClick}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 512 512'
                >
                  <title>key-backspace</title>
                  <path
                    d='M135.19,390.14A28.79,28.79,0,0,0,156.87,400H403.13A29,29,0,0,0,432,371.13V140.87A29,29,0,0,0,403.13,112H156.87a28.84,28.84,0,0,0-21.67,9.84v0L46.33,256l88.86,134.11Z'
                    fill='none'
                    stroke={darkTheme ? '#F2F3F4' : '#49474E'}
                    strokeLinejoin='round'
                    strokeWidth='32px'
                  />
                  <line
                    x1='336.67'
                    y1='192.33'
                    x2='206.66'
                    y2='322.34'
                    fill='none'
                    stroke={darkTheme ? '#F2F3F4' : '#49474E'}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32px'
                  />
                  <line
                    x1='336.67'
                    y1='322.34'
                    x2='206.66'
                    y2='192.33'
                    fill='none'
                    stroke={darkTheme ? '#F2F3F4' : '#49474E'}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32px'
                  />
                  <line
                    x1='336.67'
                    y1='192.33'
                    x2='206.66'
                    y2='322.34'
                    fill='none'
                    stroke={darkTheme ? '#F2F3F4' : '#49474E'}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32px'
                  />
                  <line
                    x1='336.67'
                    y1='322.34'
                    x2='206.66'
                    y2='192.33'
                    fill='none'
                    stroke={darkTheme ? '#F2F3F4' : '#49474E'}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32px'
                  />
                </svg>
              </button>
            </div>
          )
        }
        return (
          <div className='flex w-full gap-x-1.5' key={indexRow}>
            {keyBoard[indexRow]?.map((buttonKey, indexKey) => {
              return (
                <button
                  type='button'
                  data-key={buttonKey.value}
                  className={`button-key w-[calc((100%-(6px*11))/12)] ${
                    buttonKey.color
                      ? `${addClassColor(
                          buttonKey.color,
                        )} } border-[#6c6e70] text-w-white`
                      : 'border-w-grey-tone-1 bg-w-white text-w-quartz dark:bg-w-grey-tone-5 dark:text-w-white'
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
    </div>
  )
}

export default Keyboard
