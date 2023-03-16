import Button from 'components/Button'
import Heading from 'components/micro-components/Heading'
import useEncryption from 'hook/useEncryption'
import { useNavigate } from 'react-router-dom'
import { restartGame, setRelultGame } from 'redux/features/gameSlice'
import { closeModal, openModal } from 'redux/features/modalSlice'
import { hideNewGame } from 'redux/features/newGameSlice'
import { resetDataHardMode } from 'redux/features/settingsSlice'
import { getRandomWord } from 'utils/helpers'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import useUpdateStats from 'hook/useUpdateStatistics'

export const Confirm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { updateStatistics } = useUpdateStats()

  const { encryptValue, decryptValue } = useEncryption(
    process.env['REACT_APP_CRYPTO_KEY']!,
  )
  const { heading, description } = useAppSelector((state) => state.modal.props)
  const { words, currentWord } = useAppSelector((state) => state.game)

  const goHome = () => navigate('/', { replace: true })

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

  const getHandleConfirm = (heading: string) => {
    switch (heading) {
      case 'Новая игра?':
        return handleConfirmNewGame()
      case 'Сдаёшься?':
        return handleConfirmLeaveGame()
      default:
        return null
    }
  }

  return (
    <section className='w-72 select-none md:w-80'>
      <Heading>{heading}</Heading>
      {description && (
        <p className='mt-5 mb-6 text-center text-sm font-bold text-w-quartz dark:text-w-white-dark md:mt-7 md:mb-8 md:text-base'>
          {description}
        </p>
      )}
      <div className='mt-6 flex w-full justify-center gap-4 md:mt-8 md:gap-5'>
        <Button
          type='button'
          text='Нет'
          size='s'
          isRounded
          onClick={() => dispatch(closeModal())}
        />
        <Button
          type='button'
          text='Да'
          size='s'
          isRounded
          onClick={() => getHandleConfirm(heading)}
        />
      </div>
    </section>
  )
}
