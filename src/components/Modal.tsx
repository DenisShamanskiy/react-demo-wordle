import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";

type ModalProps = {
    children?: JSX.Element,
}

const Modal: React.FC<ModalProps> = ( {children} ) => {

    const { open, window }= useAppSelector(state => state.modal.modalSlice);

    const dispatch = useAppDispatch();

    return (
      <div className={`modal ${ open && "modal_active" } ${ window === "GameLost" && "bg-red-500/60" }`} onClick={() => dispatch(activeModal({open: false, window: window}))}>
        <div className={`modal__component ${ open ? "modal__component_active" : "modal__component_inactive" }`} onClick={event => event.stopPropagation()}>
            {children}
        </div>
      </div>
    );
    
  }
  
export default Modal;