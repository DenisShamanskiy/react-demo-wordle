import '../styles/modal-animation.css'
import { useEffect, useRef } from 'react'
import ReactPortal from 'utils/ReactPortal'
import { CSSTransition } from 'react-transition-group'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { closeModal, openModal } from 'redux/features/modalSlice'
import useEncryption from 'hook/useEncryption'
import { useNavigate } from 'react-router-dom'
import useUpdateStats from 'hook/useUpdateStatistics'
import { restartGame, setRelultGame } from 'redux/features/gameSlice'
import { getRandomWord } from 'utils/helpers'
import { resetDataHardMode } from 'redux/features/settingsSlice'
import { hideNewGame } from 'redux/features/newGameSlice'
import Confirm from './Confirm'
import GameResult from './GameResult'

const Modal = () => {
  const nodeRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { encryptValue, decryptValue } = useEncryption(
    process.env['REACT_APP_CRYPTO_KEY']!,
  )
  const { isOpen, component, props } = useAppSelector((state) => state.modal)
  const {
    word: { words, currentWord },
  } = useAppSelector((state) => state.game)
  const goHome = () => navigate('/', { replace: true })
  const { updateStatistics } = useUpdateStats()

  const handleConfirmNewGame = () => {
    goHome()
    dispatch(
      restartGame({
        currentWord: encryptValue(getRandomWord(words)),
        previousWord: decryptValue(currentWord),
      }),
    )
    dispatch(resetDataHardMode())
    dispatch(closeModal())
    dispatch(hideNewGame())
  }

  const handleConfirmLeaveGame = async () => {
    goHome()
    dispatch(closeModal())
    dispatch(setRelultGame('LEAVE'))
    await updateStatistics({ result: 'LEAVE' })
    dispatch(hideNewGame())
    setTimeout(
      () =>
        dispatch(
          openModal({
            component: 'GameResult',
            props: {
              result: 'leave',
            },
          }),
        ),
      500,
    )
  }

  const getHandleConfirm = (type: string) => {
    switch (type) {
      case 'NewGame':
        return handleConfirmNewGame()
      case 'Leave':
        return handleConfirmLeaveGame()
      default:
        return null
    }
  }

  const getModalContent = (content: string) => {
    switch (content) {
      case 'Confirm':
        return (
          <Confirm
            {...props}
            onConfirm={() => getHandleConfirm(props!.type!)}
          />
        )
      case 'GameResult':
        return <GameResult result={props!.result!} />
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
            className={`w-fit max-w-lg rounded-xl bg-w-white p-6 shadow-modal dark:bg-[#1e1e20] dark:shadow-modalDark md:p-8 ${
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
