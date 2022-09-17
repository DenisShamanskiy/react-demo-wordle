import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";

const ButtonFalse = () => {
  const dispatch = useAppDispatch();

  const { window, title, description } = useAppSelector(
    (state) => state.modal.modalSlice
  );

  return (
    <button
      className="w-4/12 h-9 mr-2 border-2 border-wordleRed rounded inline-block bg-wordleRed hover:bg-white text-center font-bold text-white hover:text-wordleRed uppercase select-none transition duration-300"
      type="button"
      onClick={() =>
        dispatch(
          activeModal({
            open: false,
            window: window,
            title: title,
            description: description,
          })
        )
      }
    >
      Нет
    </button>
  );
};

export default ButtonFalse;
