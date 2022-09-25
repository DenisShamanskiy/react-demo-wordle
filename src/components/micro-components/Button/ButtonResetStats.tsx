import { useAppDispatch, useAppSelector } from 'hook'
import { activeModal } from 'store/modalSlice'

const ButtonResetStats = () => {
  const dispatch = useAppDispatch()

  const { win, loss, surrender } = useAppSelector((state) => state.stats.stats)

  const { window } = useAppSelector((state) => state.modal.modalSlice)

  const dark = useAppSelector((state) => state.theme.darkThemeSlice)

  const resetStats = () => {
    dispatch(activeModal({ open: false, window: window }))
    setTimeout(() => {
      dispatch(
        activeModal({
          open: true,
          window: 'Confirmation',
          title: 'Сбросить статистику?',
          description: ['Будет удалена вся текущая статистика игры'],
        }),
      )
    }, 500)
  }

  const disabled = [win, loss, surrender].every((item) => item === 0)

  return (
    <button
      className={`${
        dark
          ? 'border border-wordleRedDark bg-wordleBlack hover:bg-wordleRedDark text-wordleRedDark hover:text-wordleWhite disabled:bg-wordleBlack disabled:border-wordleTone4Dark disabled:text-wordleTone4Dark'
          : 'border-2 border-wordleRed bg-wordleRed hover:bg-wordleWhite text-wordleWhite hover:text-wordleRed disabled:bg-wordleWhite disabled:border-wordleTone4 disabled:text-wordleTone4'
      } w-4/12 h-9 mx-auto mb-4 rounded block text-center font-bold uppercase select-none transition duration-300 disabled:pointer-events-none`}
      onClick={() => resetStats()}
      disabled={disabled}
    >
      СБРОСИТЬ
    </button>
  )
}

export default ButtonResetStats
