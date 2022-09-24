import { useAppDispatch, useAppSelector } from "hook";
import { resetBoard } from "store/boardSlice";
import { resetCurrentGuess } from "store/currentGuessSlice";
import { restartGuessesRemaining } from "store/guessesRemainingSlice";
import { resetHardMode } from "store/hardModeSlice";
import { restartColorKey } from "store/keyboardSlice";
import { activeModal } from "store/modalSlice";
import { resetLetters } from "store/nextLetterSlice";
import { restartRightGuess } from "store/rightGuessSlice";
import { resetStats, surrenderStats } from "store/statsSlice";
import { setStatusGame } from "store/statusGameSlice";

const ButtonTrue = () => {
  const dispatch = useAppDispatch();

  const { window, title, description } = useAppSelector(
    (state) => state.modal.modalSlice
  );
  const dark = useAppSelector((state) => state.theme.darkThemeSlice);

  const handleConfirmation = () => {
    if (["Новая игра?", "Проиграл", "Сдаёшься?"].includes(title!)) {
      dispatch(setStatusGame("inGame"));
      dispatch(restartRightGuess());
      dispatch(resetBoard());
      dispatch(restartColorKey());
      dispatch(resetLetters());
      dispatch(resetCurrentGuess());
      dispatch(restartGuessesRemaining());
      dispatch(resetHardMode())
      dispatch(
        activeModal({
          open: false,
          window: window,
          title: title,
          description: description,
        })
      );
      if (title === "Сдаёшься?") {
        setTimeout(
          () => dispatch(activeModal({ open: true, window: "LeaveGame" })),
          700
        );
        dispatch(surrenderStats());
        return;
      }
      return;
    }
    if (title === "Сбросить статистику?") {
      localStorage.removeItem("stats");
      dispatch(resetStats());
      dispatch(
        activeModal({
          open: false,
          window: window,
          title: title,
          description: description,
        })
      );
      return;
    }
    if (title === "Очистить LocalStorage?") {
      localStorage.clear();
      dispatch(resetStats());
      dispatch(
        activeModal({
          open: false,
          window: window,
          title: title,
          description: description,
        })
      );
      return;
    }
  };

  return (
    <button
      className={`${
        dark
          ? "border border-wordleBlueDark hover:border-wordleBlueDark bg-wordleBlack hover:bg-wordleBlueDark text-wordleWhite"
          : "border-2 border-wordleBlue bg-wordleBlue hover:bg-wordleWhite text-wordleWhite hover:text-wordleBlue"
      } w-4/12 h-9 ml-2 rounded inline-block text-center font-bold uppercase select-none transition duration-300`}
      type="button"
      onClick={() => handleConfirmation()}
    >
      Да
    </button>
  );
};

export default ButtonTrue;
