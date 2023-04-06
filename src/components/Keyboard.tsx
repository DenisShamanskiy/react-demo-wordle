import { useAppDispatch, useAppSelector, useGameLogic } from 'hook'
import { useEffect } from 'react'
import { colorKey } from 'redux/features/gameSlice'
import { ColorLetter } from 'types/store'
import { globalSvgSelector } from 'utils/globalSvgSelector'

const getColorClasses = (color: ColorLetter | null) => {
  switch (color) {
    case 'green':
      return 'bg-w-green dark:bg-w-green-dark'
    case 'yellow':
      return 'bg-w-yellow dark:bg-w-yellow-dark'
    case 'grey':
      return 'bg-w-grey dark:bg-w-grey-dark'
    default:
      return null
  }
}

const Keyboard = () => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const { board, keyBoard, currentRowIndex } = useAppSelector(
    (state) => state.game,
  )

  const { handleButtonPress } = useGameLogic()

  useEffect(() => {
    if (currentRowIndex > 0) {
      dispatch(colorKey(board?.[currentRowIndex - 1]))
    }
  }, [currentRowIndex])

  return (
    <div className='mx-auto flex w-full max-w-2xl select-none flex-col gap-y-1.5 rounded-t bg-w-grey-tone-2 p-1.5 font-sans dark:bg-w-black dark:bg-transparent'>
      {keyBoard.map((_, indexRow) => {
        if (indexRow === 2) {
          return (
            <div className='flex w-full gap-x-1.5' key={indexRow}>
              <button
                type='button'
                data-key='↵'
                className='button-key grow border-w-grey-tone-1 bg-w-white dark:bg-w-grey-tone-5'
                onClick={handleButtonPress}
              >
                {globalSvgSelector('key-enter', darkMode)}
              </button>
              {keyBoard[indexRow]?.map(
                (
                  buttonKey: { value: string; color: ColorLetter | null },
                  indexKey: number,
                ) => {
                  return (
                    <button
                      type='button'
                      data-key={buttonKey.value}
                      className={`button-key w-[calc((100%-(6px*11))/12)] ${
                        buttonKey.color
                          ? `${getColorClasses(
                              buttonKey.color,
                            )} } border-[#6c6e70] text-w-white`
                          : 'border-w-grey-tone-1 bg-w-white text-w-quartz dark:bg-w-grey-tone-5 dark:text-w-white'
                      }`}
                      onClick={handleButtonPress}
                      key={indexKey}
                    >
                      {buttonKey.value}
                    </button>
                  )
                },
              )}
              <button
                type='button'
                data-key='←'
                className='button-key grow border-w-grey-tone-1 bg-w-white dark:bg-w-grey-tone-5'
                onClick={handleButtonPress}
              >
                {globalSvgSelector('key-backspace', darkMode)}
              </button>
            </div>
          )
        }
        return (
          <div className='flex w-full gap-x-1.5' key={indexRow}>
            {keyBoard[indexRow]?.map(
              (
                buttonKey: { value: string; color: ColorLetter | null },
                indexKey: number,
              ) => {
                return (
                  <button
                    type='button'
                    data-key={buttonKey.value}
                    className={`button-key w-[calc((100%-(6px*11))/12)] ${
                      buttonKey.color
                        ? `${getColorClasses(
                            buttonKey.color,
                          )}} border-[#6c6e70] text-w-white`
                        : 'border-w-grey-tone-1 bg-w-white text-w-quartz dark:bg-w-grey-tone-5 dark:text-w-white'
                    }`}
                    onClick={handleButtonPress}
                    key={indexKey}
                  >
                    {buttonKey.value}
                  </button>
                )
              },
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Keyboard
