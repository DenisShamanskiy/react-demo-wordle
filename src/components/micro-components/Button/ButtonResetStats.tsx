import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";

const ButtonResetStats = () => {
  const dispatch = useAppDispatch();

  const { win, loss, surrender } = useAppSelector((state) => state.stats.stats);

  const { window } = useAppSelector((state) => state.modal.modalSlice);

  const resetStats = () => {
    dispatch(activeModal({ open: false, window: window }));
    setTimeout(() => {
      dispatch(
        activeModal({
          open: true,
          window: "Confirmation",
          title: "Сбросить статистику?",
          description: ["Будет удалена вся текущая статистика игры"],
        })
      );
    }, 500);
  };

  const disabled = [win, loss, surrender].every((item) => item === 0);

  return (
    <button
      className="w-4/12 h-9 mx-auto mb-4 border-2 border-wordleRed disabled:border-wordleBorder rounded block bg-wordleRed hover:bg-white disabled:bg-white text-center font-bold text-white hover:text-wordleRed disabled:text-wordleBorder uppercase select-none transition duration-300 disabled:opacity-70 disabled:pointer-events-none"
      onClick={() => resetStats()}
      disabled={disabled}
    >
      СБРОСИТЬ
    </button>
  );
};

export default ButtonResetStats;
