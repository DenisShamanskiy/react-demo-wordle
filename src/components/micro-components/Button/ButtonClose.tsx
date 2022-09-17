import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";
import close from "../../../icon/close.svg";

const ButtonClose = () => {
  const dispatch = useAppDispatch();

  const { window } = useAppSelector((state) => state.modal.modalSlice);

  return (
    <button
      className="absolute w-6 h-6 top-0 right-0 inline-block rounded-full bg-center bg-contain hover:scale-110 transition duration-300 ease-in-out"
      style={{ backgroundImage: `url(${close})` }}
      onClick={() => dispatch(activeModal({ open: false, window: window }))}
    ></button>
  );
};

export default ButtonClose;
