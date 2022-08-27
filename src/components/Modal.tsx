import { useAppDispatch, useAppSelector } from "hook";
import { activeModal } from "store/modalSlice";

type ModalProps = {
    children?: JSX.Element,
}

const Modal: React.FC<ModalProps> = ( {children} ) => {

    const openModal  = useAppSelector(state => state.modal.modalSlice);

    const dispatch = useAppDispatch();

    return (
      <div className={`modal ${ openModal.open && "modal_active" }`} onClick={() => dispatch(activeModal(false))}>
        <div className={`modal__component ${ openModal.open ? "modal__component_active" : "modal__component_inactive" }`} onClick={e => e.stopPropagation()}>
            {children}
        </div>
      </div>
    );
    
  }
  
export default Modal;