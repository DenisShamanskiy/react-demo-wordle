import Button from 'components/micro-components/Buttons/Button'
import { useAppDispatch } from 'utils/hook'
import { useNavigate } from 'react-router-dom'
import { logout } from 'store/userSlice'
import Statistics from './Statistics'

const User = () => {
  const navigate = useNavigate()
  const goAuth = () => navigate('/auth', { replace: true })
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout())
    }, 500)
    goAuth()
  }

  return (
    <main className='my-auto'>
      <section className='w-11/12 max-w-sm md:max-w-xl mx-auto flex flex-col items-center select-none'>
        <Statistics />
        <div className='w-48 md:w-52 mt-10 md:mt-12'>
          <Button type='button' text={'выйти'} color={'red'} onClick={() => handleLogout()} />
        </div>
      </section>
    </main>
  )
}

export default User
