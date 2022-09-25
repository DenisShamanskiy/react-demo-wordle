import { useAppDispatch, useAppSelector } from 'hook'
import { activeModal } from 'store/modalSlice'

const ButtonNewGame = () => {
  const dispatch = useAppDispatch()

  const board = useAppSelector((state) => state.board.board)

  const { window, title, description } = useAppSelector((state) => state.modal.modalSlice)
  const dark = useAppSelector((state) => state.theme.darkThemeSlice)

  const disabled = board[0]?.every((item) => item.color === '')

  const newGame = () => {
    dispatch(
      activeModal({
        open: false,
        window: window,
        title: title,
        description: description,
      }),
    )
    setTimeout(() => {
      dispatch(
        activeModal({
          open: true,
          window: 'Confirmation',
          title: 'Новая игра?',
        }),
      )
    }, 700)
  }

  return (
    <button
      className={`${
        dark
          ? 'border border-wordleGreenDark bg-wordleBlack hover:bg-wordleGreenDark text-wordleGreenDark hover:text-wordleWhite disabled:bg-wordleBlack disabled:border-wordleTone4Dark disabled:text-wordleTone4Dark'
          : 'border-2 border-wordleGreen bg-wordleGreen hover:bg-wordleWhite text-wordleWhite hover:text-wordleGreen disabled:bg-wordleWhite disabled:border-wordleTone4 disabled:text-wordleTone4'
      } w-full h-[44px] mb-4 rounded block text-center font-bold uppercase select-none transition duration-300 disabled:pointer-events-none`}
      type='button'
      onClick={() => newGame()}
      disabled={disabled}
    >
      Новая Игра
    </button>
  )
}

export default ButtonNewGame
