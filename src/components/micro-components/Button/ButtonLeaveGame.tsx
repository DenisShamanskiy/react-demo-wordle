import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";

const ButtonNewGame = () => {
  const dispatch = useAppDispatch();

  const board = useAppSelector((state) => state.board.board);

  const game = useAppSelector((state) => state.game.statusGameSlice);

  const { window, title, description } = useAppSelector(
    (state) => state.modal.modalSlice
  );

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
    board[0]?.every((item) => item.color === "") || ["win", "lost"].includes(game);

  return (
    <button
      className="w-full h-[44px] border-2 border-wordleYellow disabled:border-wordleBorder rounded inline-block bg-wordleYellow hover:bg-white disabled:bg-white text-center font-bold text-white hover:text-wordleYellow disabled:text-wordleBorder uppercase select-none transition duration-300 disabled:opacity-70 disabled:pointer-events-none"
      type="button"
      onClick={() => leaveGame()}
      disabled={disabled}
    >
      Сдаться
    </button>
  );
};

export default ButtonNewGame;
