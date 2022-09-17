import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";

const ButtonFalse = () => {
  const dispatch = useAppDispatch();

  const { window } = useAppSelector((state) => state.modal.modalSlice);

  return (
    <button
      className="w-4/12 h-9 my-4 mx-auto border-2 border-wordleBlue rounded block bg-wordleBlue hover:bg-white text-center font-bold text-white hover:text-wordleBlue uppercase select-none transition duration-300"
      onClick={() => dispatch(activeModal({ open: false, window: window }))}
    >
      ХОРОШО
    </button>
  );
};

export default ButtonFalse;
