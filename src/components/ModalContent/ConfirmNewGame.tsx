import Button from 'components/micro-components/Buttons/Button'
import Heading2 from 'components/micro-components/Heading2'
import { useNavigate } from 'react-router-dom'
import { restartGame } from 'store/gameSlice'
import { closeModal } from 'store/modalSlice'
import { resetDataHardMode } from 'store/settingsSlice'
import { useAppDispatch } from 'utils/hook'

const ConfirmNewGame = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const goHome = () => navigate('/', { replace: true })

  const handleConfirm = () => {
    dispatch(restartGame())
    dispatch(resetDataHardMode())
    dispatch(closeModal())
    goHome()
  }

  return (
    <section className='w-72 md:w-80 select-none'>
      <Heading2>Новая игра?</Heading2>
      <div className='mt-6 md:mt-8 grid grid-cols-[130px_130px] md:grid-cols-[140px_140px] gap-4 md:gap-5 justify-center'>
        <Button type='button' text={'нет'} color={'red'} onClick={() => dispatch(closeModal())} />
        <Button type='button' text={'да'} color={'blue'} onClick={() => handleConfirm()} />
      </div>
    </section>
  )
}

export default ConfirmNewGame
