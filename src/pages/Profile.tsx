import Button from 'components/micro-components/Buttons/Button'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from 'store/userSlice'
import Statistics from './Statistics'
import { restartGame } from 'store/gameSlice'
import { resetDataHardMode } from 'store/settingsSlice'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import Heading from 'components/micro-components/Heading'

const Profile = () => {
  const navigate = useNavigate()
  const goAuth = () =>
    navigate('/auth', {
      replace: true,
    })
  const dispatch = useAppDispatch()

  const { email } = useAppSelector((state) => state.user)
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout())
    }, 500)
    goAuth()
    dispatch(restartGame())
    dispatch(resetDataHardMode())
  }

  return (
    <section className='mx-auto w-11/12 max-w-[448px] select-none '>
      <Heading>Игрок</Heading>

      <NavLink to='/profile/edit'>
        <div className='relative mx-auto mt-6 flex h-10 w-11/12 items-center justify-center rounded-lg border-2 border-w-grey-tone-2 text-sm text-w-quartz transition-all duration-300 hover:scale-105 dark:border-w-grey-tone-3 dark:text-w-white-dark md:mt-8 md:h-12 md:text-base'>
          <div
            className={
              'absolute right-1 mx-0.5 block min-w-[20px]  rounded transition duration-300 disabled:opacity-40 md:mx-1 md:min-w-[24px]'
            }
          >
            {globalSvgSelector('edit-profile', darkMode)}
          </div>
          {email}
        </div>
      </NavLink>
      <div className='my-6 mx-auto flex w-11/12 max-w-md flex-col items-center justify-center border-b border-w-grey-tone-2 py-2 dark:border-w-grey-tone-3 md:my-8 md:py-3'></div>

      <Statistics />
      <div className='mx-auto mt-10 w-48 md:mt-12 md:w-52'>
        <Button
          type='button'
          text={'выйти'}
          color={'red'}
          size='m'
          onClick={() => handleLogout()}
        />
      </div>
    </section>
  )
}

export default Profile
