import '../styles/modal-animation.css'
import { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useAppDispatch, useAppSelector } from 'hook'
import ReactPortal from 'utils/ReactPortal'
import { closeModal } from 'redux/features/modalSlice'
import { Confirm } from './Confirm'
import GameResult from './GameResult'
import ModalError from './ModalError'

const Modal = () => {
  const nodeRef = useRef(null)
  const dispatch = useAppDispatch()
  const { isOpen, component } = useAppSelector((state) => state.modal)

  const getModalContent = (content: string) => {
    switch (content) {
      case 'Confirm':
        return <Confirm />
      case 'GameResult':
        return <GameResult />
      case 'Error':
        return <ModalError />
      default:
        return null
    }
  }

  useEffect(() => {
    const closeOnEscapeKey = (event: KeyboardEvent) =>
      event.key === 'Escape' ? dispatch(closeModal()) : null
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [dispatch])

  return (
    <ReactPortal wrapperId='modal'>
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames='modal'
        nodeRef={nodeRef}
      >
        <div
          className='modal fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-hidden bg-white/60 p-0 transition-all duration-300 ease-in-out dark:bg-black/60'
          ref={nodeRef}
          onClick={() => dispatch(closeModal())}
        >
          <dialog
            open
            className={`w-fit max-w-lg rounded-xl bg-w-white p-6 shadow-modal dark:bg-[#1e1e20] dark:shadow-modalDark sm:p-8 ${
              isOpen ? 'animate-appearDialog' : 'animate-disappearDialog'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {component !== null && getModalContent(component)}
          </dialog>
        </div>
      </CSSTransition>
    </ReactPortal>
  )
}
export default Modal
