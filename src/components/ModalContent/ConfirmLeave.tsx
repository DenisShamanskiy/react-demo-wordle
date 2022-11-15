import Button from 'components/micro-components/Buttons/Button'
import Heading2 from 'components/micro-components/Heading2'
import { useNavigate } from 'react-router-dom'
import { setRelultGame } from 'store/gameSlice'
import { closeModal, openModal } from 'store/modalSlice'
import { updateStatsLocal } from 'store/statsSlice'
import { useAppDispatch } from 'utils/hook'

const ConfirmLeave = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const goHome = () => navigate('/', { replace: true })

  const handleConfirm = () => {
    goHome()
    dispatch(closeModal())
    dispatch(setRelultGame('LEAVE'))
    dispatch(updateStatsLocal('LEAVE'))
    setTimeout(() => dispatch(openModal({ window: 'GameResult', title: 'Сдался' })), 500)
  }

  return (
    <section className='w-72 md:w-80 select-none'>
      <Heading2>Сдаёшься?</Heading2>
      <p className='my-6 sm:my-8 text-sm md:text-base font-bold text-center text-w-quartz dark:text-w-white-dark'>
        Узнаешь загаданное слово, но cдача засчитается в статистике
      </p>
      <div className='grid grid-cols-[130px_130px] md:grid-cols-[140px_140px] gap-4 md:gap-5 justify-center'>
        <Button type='button' text={'нет'} color={'red'} onClick={() => dispatch(closeModal())} />
        <Button type='button' text={'да'} color={'blue'} onClick={() => handleConfirm()} />
      </div>
    </section>
  )
}

export default ConfirmLeave
