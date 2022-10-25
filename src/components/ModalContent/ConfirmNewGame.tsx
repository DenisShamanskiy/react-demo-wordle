import Button from 'components/micro-components/Button/Button'
import Heading2 from 'components/micro-components/Heading2'
import { useNavigate } from 'react-router-dom'
import { closeModal } from 'store/modalSlice'
import { restartGame } from 'store/persistSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const ConfirmNewGame = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const title = useAppSelector((state) => state.modal.title)

  const goHome = () => navigate('/', { replace: true })

  const handleConfirm = () => {
    dispatch(restartGame())
    dispatch(closeModal())
    goHome()
  }

  return (
    <section className='w-72 sm:w-80'>
      <Heading2>{title ? title : 'Модальное окно'}</Heading2>
      <div className='mt-6 sm:mt-8 grid grid-cols-[130px_130px] sm:grid-cols-[140px_140px] gap-4 sm:gap-5 justify-center'>
        <Button text={'нет'} color={'red'} onClick={() => dispatch(closeModal())} />
        <Button text={'да'} color={'blue'} onClick={() => handleConfirm()} />
      </div>
    </section>
  )
}

export default ConfirmNewGame
