import Button from 'components/micro-components/Buttons/Button'
import Heading2 from 'components/micro-components/Heading'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { restartGame, setRelultGame } from 'store/gameSlice'
import { closeModal, openModal } from 'store/modalSlice'
import { resetDataHardMode } from 'store/settingsSlice'
import { deleteNewGame, hideNewGame } from 'store/newGameSlice'
import { updateStatsLocal } from 'store/userSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'

const Confirm: FC = (): JSX.Element => {
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
      dispatch(hideNewGame())
      setTimeout(() => {
        dispatch(deleteNewGame())
      }, 500)
    }
    if (type === 'Leave') {
      goHome()
      dispatch(closeModal())
      dispatch(setRelultGame('LEAVE'))
      dispatch(updateStatsLocal('LEAVE'))
      dispatch(hideNewGame())
      setTimeout(() => {
        dispatch(deleteNewGame())
      }, 500)
      setTimeout(
        () => dispatch(openModal({ window: 'GameResult', title: 'Сдался' })),
        500,
      )
    } else return
  }

  return (
    <section className='w-72 select-none md:w-80'>
      <Heading2>{title}</Heading2>
      {description && (
        <p className='mt-5 mb-6 text-center text-sm font-bold text-w-quartz dark:text-w-white-dark md:mt-7 md:mb-8 md:text-base'>
          {description}
        </p>
      )}
      <div className='mt-6 flex w-full justify-center gap-4 md:mt-8 md:gap-5'>
        <Button
          type='button'
          text={'нет'}
          color={'red'}
          size='s'
          onClick={() => dispatch(closeModal())}
        />
        <Button
          type='button'
          text={'да'}
          color={'blue'}
          size='s'
          onClick={() => handleConfirm(type!)}
        />
      </div>
    </section>
  )
}

export default Confirm
