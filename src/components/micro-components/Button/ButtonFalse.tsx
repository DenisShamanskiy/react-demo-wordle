import { useAppDispatch, useAppSelector } from 'hook'
import { activeModal } from 'store/modalSlice'

const ButtonFalse = () => {
  const dispatch = useAppDispatch()

  const { window, title, description } = useAppSelector((state) => state.modal.modalSlice)

  const dark = useAppSelector((state) => state.theme.darkThemeSlice)

  return (
    <button
      className={`${
        dark
          ? 'border border-wordleRedDark hover:border-wordleRedDark bg-wordleBlack hover:bg-wordleRedDark text-wordleWhite'
          : 'border-2 border-wordleRed bg-wordleRed hover:bg-wordleWhite text-wordleWhite hover:text-wordleRed'
      } w-4/12 h-9 mr-2 rounded inline-block text-center font-bold uppercase select-none transition duration-300`}
      type='button'
      onClick={() =>
        dispatch(
          activeModal({
            open: false,
            window: window,
            title: title,
            description: description,
          }),
        )
      }
    >
      Нет
    </button>
  )
}

export default ButtonFalse
