import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";

type ModalProps = {
  children?: JSX.Element;
};

const Modal = ({ children }: ModalProps) => {
  const { open, window, title, description } = useAppSelector(
    (state) => state.modal.modalSlice
  );
  const dark = useAppSelector((state) => state.theme.darkThemeSlice);

  const dispatch = useAppDispatch();

  return (
    <div
      className={`${
        window === "GameLost"
          ? "bg-red-500/60"
          : dark
          ? "bg-black/60"
          : "bg-white/60"
      } fixed w-full h-full min-w-[414px] top-0 left-0 flex justify-center transition duration-500 z-50 ${
        window === "Rules" ? "items-end smModal:items-center" : "items-center"
      } ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } `}
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
      <div
        className={`${
          window === "Rules"
            ? "w-full rounded-b-none smModal:w-[90%] smModal:rounded-xl"
            : "w-fit"
        } relative max-w-[512px] p-4 rounded-xl border ${
          dark ? "border-[#1a1a1b] bg-wordleBlack" : "border-[#f6f7f8] bg-wordleWhite"
        }  shadow-modal ${open ? "animate-modalOpen" : "animate-modalClosed"}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
