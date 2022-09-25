import { useAppDispatch, useAppSelector } from 'hook'
import { activeModal } from 'store/modalSlice'

const ButtonFalse = () => {
  const dispatch = useAppDispatch()

  const { window } = useAppSelector((state) => state.modal.modalSlice)
  const dark = useAppSelector((state) => state.theme.darkThemeSlice)

  return (
    <button
      className={`${
        dark
          ? 'border border-wordleBlueDark bg-wordleBlack hover:bg-wordleBlueDark text-wordleWhite'
          : 'border-2 border-wordleBlue bg-wordleBlue hover:bg-wordleWhite text-wordleWhite hover:text-wordleBlue'
      } w-4/12 h-9 my-4 mx-auto rounded block text-center font-bold uppercase select-none transition duration-300`}
      onClick={() => dispatch(activeModal({ open: false, window: window }))}
    >
      ХОРОШО
    </button>
  )
}

export default ButtonFalse
