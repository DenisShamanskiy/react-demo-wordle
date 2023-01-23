import Button from 'components/Button'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { useNavigate } from 'react-router-dom'
import { logout } from 'redux/features/userSlice'
import { restartGame } from 'redux/features/gameSlice'
import { resetDataHardMode } from 'redux/features/settingsSlice'
import Heading from 'components/micro-components/Heading'
import { useSignoutMutation } from 'redux/api/authApi'
import CustomLink from 'components/CustomLink'

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
    dispatch(restartGame())
    dispatch(resetDataHardMode())
  }

  return (
    <section className='mx-auto flex w-11/12 max-w-[380px] select-none flex-col items-center justify-center md:max-w-[448px] '>
      <Heading>{username}</Heading>
      <div className='my-8 flex w-full flex-col justify-center gap-5 md:my-10 md:gap-6'>
        <CustomLink to={'/profile/edit'} icon='edit-profile'>
          Изменить профиль
        </CustomLink>
        <CustomLink to={'/profile/statistics'} icon='stats-chart'>
          Статистика
        </CustomLink>
      </div>
      <Button
        type='button'
        text={'Выйти'}
        color={'red'}
        size='m'
        onClick={() => handleLogout()}
        isLoading={isLoading}
        disabled={isLoading}
      />
    </section>
  )
}

export default Profile
