import Button from 'components/micro-components/Buttons/Button'
import Heading2 from 'components/micro-components/Heading2'
import { useNavigate } from 'react-router-dom'
import { setRelultGame } from 'store/gameSlice'
import { closeModal, openModal } from 'store/modalSlice'
import { updateStatsLocal } from 'store/statsSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const ConfirmLeave = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const goHome = () => navigate('/', { replace: true })

  const handleConfirm = () => {
    goHome()
    dispatch(closeModal())
    dispatch(setRelultGame('LEAVE'))
    dispatch(updateStatsLocal('LEAVE'))
    setTimeout(() => dispatch(openModal({ window: 'GameResult', title: 'Сдался' })), 500)
  }

  return (
    <section className='w-72 sm:w-80'>
      <Heading2>Сдаёшься?</Heading2>
      <p
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } my-6 sm:my-8 text-sm sm:text-base font-bold text-center`}
      >
        Узнаешь загаданное слово, но cдача засчитается в статистике
      </p>
      <div className='grid grid-cols-[130px_130px] sm:grid-cols-[140px_140px] gap-4 sm:gap-5 justify-center'>
        <Button type='button' text={'нет'} color={'red'} onClick={() => dispatch(closeModal())} />
        <Button type='button' text={'да'} color={'blue'} onClick={() => handleConfirm()} />
      </div>
    </section>
  )
}

export default ConfirmLeave
