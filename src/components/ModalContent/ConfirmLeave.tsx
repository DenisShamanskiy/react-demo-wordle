import Button from 'components/micro-components/Button/Button'
import Heading2 from 'components/micro-components/Heading2'
import { useNavigate } from 'react-router-dom'
import { closeModal, openModal } from 'store/modalSlice'
import { restartGame, surrenderStats } from 'store/persistSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const ConfirmLeave = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const title = useAppSelector((state) => state.modal.title)
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  const goHome = () => navigate('/', { replace: true })

  const handleConfirm = () => {
    goHome()
    dispatch(closeModal())
    dispatch(restartGame())
    dispatch(surrenderStats())
    setTimeout(() => dispatch(openModal({ open: true, window: 'GameResult' })), 500)
  }

  return (
    <section className='w-72 sm:w-80'>
      <Heading2>{title ? title : 'Модальное окно'}</Heading2>
      <p
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } my-6 sm:my-8 text-sm sm:text-base font-bold text-center`}
      >
        Узнаешь загаданное слово, но cдача засчитается в статистике
      </p>
      <div className='grid grid-cols-[130px_130px] sm:grid-cols-[140px_140px] gap-4 sm:gap-5 justify-center'>
        <Button text={'нет'} color={'red'} onClick={() => dispatch(closeModal())} />
        <Button text={'да'} color={'blue'} onClick={() => handleConfirm()} />
      </div>
    </section>
  )
}

export default ConfirmLeave
