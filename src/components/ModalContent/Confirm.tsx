import Button from 'components/micro-components/Buttons/Button'
import Heading2 from 'components/micro-components/Heading2'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { restartGame, setRelultGame } from 'store/gameSlice'
import { closeModal, openModal } from 'store/modalSlice'
import { resetDataHardMode } from 'store/settingsSlice'
import { updateStatsLocal } from 'store/userSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const Confirm:FC = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { title, type, description } = useAppSelector((state) => state.modal)

  const goHome = () => navigate('/', { replace: true })
  
  const handleConfirm = (type: string) => {  
    if (type === 'NewGame') {
        goHome()
        dispatch(restartGame())
        dispatch(resetDataHardMode())
        dispatch(closeModal())
    }
    if (type === 'Leave') {
        goHome()
        dispatch(closeModal())
        dispatch(setRelultGame('LEAVE'))
        dispatch(updateStatsLocal('LEAVE'))
        setTimeout(() => dispatch(openModal({ window: 'GameResult', title: 'Сдался' })), 500)
    }
 else return
}

  return (
    <section className='w-72 md:w-80 select-none'>
      <Heading2>{title}</Heading2>
      {description &&
        <p className='mt-5 md:mt-7 mb-6 md:mb-8 text-sm md:text-base font-bold text-center text-w-quartz dark:text-w-white-dark'>
        {description}
        </p>
      }
      <div className='w-full mt-6 md:mt-8 flex gap-4 md:gap-5 justify-center'>
        <Button type='button' text={'нет'} color={'red'} size='s' onClick={() => dispatch(closeModal())} />
        <Button type='button' text={'да'} color={'blue'} size='s' onClick={() => handleConfirm(type!)} />
      </div>
    </section>
  )
}

export default Confirm
