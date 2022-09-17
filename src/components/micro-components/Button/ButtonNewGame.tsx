import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";

const ButtonNewGame = () => {
  const dispatch = useAppDispatch();

  const board = useAppSelector((state) => state.board.board);

  const { window, title, description } = useAppSelector(
    (state) => state.modal.modalSlice
  );

  const newGame = () => {
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
          title: "Новая игра?",
        })
      );
    }, 700);
  };

  const disabled = board[0]?.every((item) => item.color === "");

  return (
    <button
      className={`w-full h-[44px] mb-4 border-2 border-wordleGreen disabled:border-wordleBorder rounded inline-block bg-wordleGreen hover:bg-white disabled:bg-white text-center font-bold text-white hover:text-wordleGreen disabled:text-wordleBorder uppercase select-none transition duration-300 disabled:opacity-70 disabled:pointer-events-none`}
      type="button"
      onClick={() => newGame()}
      disabled={disabled}
    >
      Новая Игра
    </button>
  );
};

export default ButtonNewGame;
