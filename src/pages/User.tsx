import Button from 'components/micro-components/Button/Button'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import Main from 'components/micro-components/Main'
import { useNavigate } from 'react-router-dom'
import { logout } from 'store/userSlice'
import Heading2 from 'components/micro-components/Heading2'

const User = () => {
  const navigate = useNavigate()
  const goAuth = () => navigate('/auth', { replace: true })
  const dispatch = useAppDispatch()
  const username = useAppSelector((state) => state.user.username)

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout())
    }, 500)
    goAuth()
  }

  return (
    <Main>
      <section>
        <Heading2>{username}</Heading2>
        <div className='w-72 sm:w-80 mt-5 sm:mt-7 flex justify-center'>
          <Button
            text={'выйти'}
            color={'red'}
            style={{ width: '140px' }}
            onClick={() => handleLogout()}
          />
        </div>
      </section>
    </Main>
  )
}

export default User
