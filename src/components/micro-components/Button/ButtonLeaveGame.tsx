import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";

const ButtonNewGame = () => {
  const dispatch = useAppDispatch();

  const board = useAppSelector((state) => state.board.board);

  const game = useAppSelector((state) => state.game.statusGameSlice);

  const { window, title, description } = useAppSelector(
    (state) => state.modal.modalSlice
  );
  const dark = useAppSelector((state) => state.theme.darkThemeSlice);

  const leaveGame = () => {
    dispatch(
      activeModal({
        open: false,
        window: window,
        title: title,
        description: description,
      })
    );
    setTimeout(() => {
      dispatch(
        activeModal({
          open: true,
          window: "Confirmation",
          title: "Сдаёшься?",
          description: ["Узнаешь загаданное слово"],
        })
      );
    }, 700);
  };

  const disabled =
    board[0]?.every((item) => item.color === "") ||
    ["win", "lost"].includes(game);

  return (
    <button
      className={`${
        dark
          ? "border border-wordleYellowDark bg-wordleBlack hover:bg-wordleYellowDark text-wordleYellowDark hover:text-wordleWhite disabled:bg-wordleBlack disabled:border-wordleTone4Dark disabled:text-wordleTone4Dark"
          : "border-2 border-wordleYellow bg-wordleYellow hover:bg-wordleWhite text-wordleWhite hover:text-wordleYellow disabled:bg-wordleWhite disabled:border-wordleTone4 disabled:text-wordleTone4"
      } w-full h-[44px]  rounded block text-center font-bold uppercase select-none transition duration-300 disabled:pointer-events-none`}
      type="button"
      onClick={() => leaveGame()}
      disabled={disabled}
    >
      Сдаться
    </button>
  );
};

export default ButtonNewGame;
