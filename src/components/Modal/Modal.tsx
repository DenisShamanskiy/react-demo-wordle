import { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { closeModal } from 'store/modalSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import './modal.css'
import ReactPortal from './ReactPortal'

type ModalProps = {
  children?: JSX.Element
}

function Modal({ children }: ModalProps) {
  const nodeRef = useRef(null)
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  const { open } = useAppSelector((state) => state.modal)

  const dispatch = useAppDispatch()
  useEffect(() => {
    const closeOnEscapeKey = (event: KeyboardEvent) =>
      event.key === 'Escape' ? dispatch(closeModal()) : null

    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [])

  return (
    <ReactPortal wrapperId='modal'>
      <CSSTransition
        in={open}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames='modal'
        nodeRef={nodeRef}
      >
        <dialog
          className={`modal ${darkMode ? 'bg-black/60' : 'bg-white/60'}`}
          ref={nodeRef}
          onClick={() => dispatch(closeModal())}
        >
          <div
            className={`w-fit max-w-lg p-6 sm:p-8 rounded-xl border ${
              darkMode ? 'border-[#1a1a1b] bg-wordleBlack' : 'border-[#f6f7f8] bg-wordleWhite'
            } shadow-modal ${open ? 'animate-modalOpen' : 'animate-modalClosed'}`}
            onClick={(event) => event.stopPropagation()}
          >
            {children}
          </div>
        </dialog>
      </CSSTransition>
    </ReactPortal>
  )
}
export default Modal
