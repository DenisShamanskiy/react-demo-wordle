import Button from 'components/micro-components/Buttons/Button'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from 'store/userSlice'
import Statistics from './Statistics'
import { restartGame } from 'store/gameSlice'
import { resetDataHardMode } from 'store/settingsSlice'

const User = () => {
  const navigate = useNavigate()
  const goAuth = () =>
    navigate('/auth', {
      replace: true,
    })
  const dispatch = useAppDispatch()

  const { email } = useAppSelector((state) => state.user)

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout())
    }, 500)
    goAuth()
    dispatch(restartGame())
    dispatch(resetDataHardMode())
  }

  return (
    <main className='m-auto'>
      <section className='mx-auto w-full max-w-sm select-none md:max-w-md'>
        <NavLink to='/user/profile'>
          <div className='flex h-10 w-full items-center justify-center rounded-lg border-2 border-w-grey-tone-2 text-w-quartz transition-all duration-300 hover:scale-105 dark:border-w-grey-tone-3 dark:text-w-white-dark md:h-12'>
            {email}
          </div>
        </NavLink>
        <div className='my-6 flex w-full max-w-md flex-col items-center justify-center border-b border-w-grey-tone-2 pb-4 dark:border-w-grey-tone-3 md:my-8 md:pb-6'></div>

        <Statistics />
        <div className='mt-10 w-48 md:mt-12 md:w-52'>
          <Button
            type='button'
            text={'выйти'}
            color={'red'}
            size='m'
            onClick={() => handleLogout()}
          />
        </div>
      </section>
    </main>
  )
}

export default User
