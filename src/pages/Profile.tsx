import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { logout } from 'redux/features/userSlice'
import { resetDataHardMode } from 'redux/features/settingsSlice'
import { useSignoutMutation } from 'redux/api/authApi'
import CustomLink from 'components/CustomLink'
import { Heading, Section } from 'components/common'
import { useAppDispatch, useAppSelector } from 'hook'
import { openModal } from 'redux/features/modalSlice'

const Profile = () => {
  const navigate = useNavigate()
  const goAuth = () =>
    navigate('/auth', {
      replace: true,
    })
  const dispatch = useAppDispatch()

  const [signout, { isLoading }] = useSignoutMutation()

  const { username } = useAppSelector((state) => state.user)

  const handleLogout = async () => {
    await signout().unwrap()
    dispatch(logout())
    localStorage.removeItem('user')
    goAuth()
    // dispatch(restartGame())
    dispatch(resetDataHardMode())
  }

  return (
    <Section width='m'>
      <Heading>{username}</Heading>
      <div className='my-8 flex w-11/12 flex-col justify-center gap-5 sm:my-10 sm:gap-6'>
        <CustomLink to={'/profile/edit'} icon='edit-profile'>
          Изменить профиль
        </CustomLink>
        <CustomLink to={'/profile/statistics'} icon='stats-chart'>
          Статистика
        </CustomLink>
        <CustomLink to={'/profile/rating'} icon='star'>
          Рейтинг
        </CustomLink>
      </div>

      <Button
        type='button'
        text='Выйти'
        size='m'
        onClick={() => handleLogout()}
        isLoading={isLoading}
        isRounded
        disabled={isLoading}
      />

      <button
        className='mt-7 font-medium text-w-quartz transition-all duration-300 hover:text-red-500 dark:text-w-white-dark dark:hover:text-red-500 sm:mt-9'
        onClick={() =>
          dispatch(
            openModal({
              component: 'Confirm',
              props: {
                heading: 'Удалить аккаунт?',
                description:
                  'Вы уверены, что хотите удалить свой аккаунт?<br>Это действие нельзя отменить.',
              },
            }),
          )
        }
      >
        Удалить аккаунт
      </button>
    </Section>
  )
}

export default Profile
