import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { restartGame, setRelultGame } from 'redux/features/gameSlice'
import { IModalState, closeModal, openModal } from 'redux/features/modalSlice'
import { hideNewGame } from 'redux/features/newGameSlice'
import { resetDataHardMode } from 'redux/features/settingsSlice'
import { getRandomWord } from 'utils/helpers'
import { Heading, Paragraph } from './common'
import {
  useAppDispatch,
  useAppSelector,
  useEncryption,
  useGameLogic,
  useUpdateStatistics,
} from 'hook'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useDeleteUserMutation } from 'redux/api/userApi'
import { logout } from 'redux/features/userSlice'
import { NotificationColor } from 'types/store'

export const Confirm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { updateStatistics } = useUpdateStatistics()

  const { encryptValue, decryptValue } = useEncryption(
    process.env['REACT_APP_CRYPTO_KEY']!,
  )
  const { heading, description } = useAppSelector((state) => state.modal.props)
  const { id: currentUserId, roles } = useAppSelector((state) => state.user)
  const { words, currentWord } = useAppSelector((state) => state.game)
  const userIdToDelete = useAppSelector((state) => state.modal.props.id)
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const [deleteUser] = useDeleteUserMutation()
  const { showNotify } = useGameLogic()

  const goHome = () => navigate('/', { replace: true })
  const goBack = () => navigate(-1)

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
    currentUserId && (await updateStatistics({ result: 'LEAVE' }))
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

  const handleConfirmDeleteAccount = async () => {
    try {
      const response = await deleteUser(
        roles.includes('ADMIN') ? userIdToDelete! : currentUserId!,
      ).unwrap()
      if (response.errors) {
        console.log(response.errors)
        return
      }
      if (roles.includes('ADMIN')) {
        dispatch(closeModal())
        showNotify(NotificationColor.success, 'Данные пользователя удалены')
        goBack()
      } else {
        dispatch(closeModal())
        dispatch(logout())
        showNotify(NotificationColor.success, 'Аккаунт удален. Спасибо за игру')
        goHome()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getHandleConfirm = (heading: IModalState['props']['heading']) => {
    switch (heading) {
      case 'Новая игра?':
        return handleConfirmNewGame()
      case 'Сдаёшься?':
        return handleConfirmLeaveGame()
      case 'Удалить аккаунт?':
        return handleConfirmDeleteAccount()
      default:
        return null
    }
  }

  return (
    <div className='w-72 select-none md:w-80'>
      <div className='mx-auto mb-6 w-16 sm:mb-8 sm:w-20'>
        {globalSvgSelector('help-circle', darkMode)}
      </div>
      <Heading textTransform='normal-case'>{heading}</Heading>
      {description && (
        <Paragraph
          fontSize='sm'
          fontWeight='medium'
          textAlign='center'
          dangerouslySetInnerHTML={{ __html: description }}
          customClass='mt-5 sm:mt-9'
        ></Paragraph>
      )}
      <div className='mt-7 flex w-full justify-center gap-4 sm:mt-11 sm:gap-5'>
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
    </div>
  )
}
