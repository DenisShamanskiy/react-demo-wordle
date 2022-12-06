import Button from 'components/micro-components/Buttons/Button'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { useNavigate } from 'react-router-dom'
import { logout } from 'store/userSlice'
import Statistics from './Statistics'
import Heading2 from 'components/micro-components/Heading2'
import Paragraph from 'components/micro-components/Paragraph'
import { restartGame } from 'store/gameSlice'

const User = () => {
  const navigate = useNavigate()
  const goAuth = () => navigate('/auth', { replace: true })
  const dispatch = useAppDispatch()

  const { email, isActivated } = useAppSelector((state) => state.user)

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout())
    }, 500)
    goAuth()
    dispatch(restartGame())
  }

  return (
    <main className='my-auto'>
      <section className='w-11/12 max-w-sm md:max-w-xl mx-auto flex flex-col items-center select-none'>
        <Heading2>Информация об игроке</Heading2>
        <div className='w-full max-w-md my-6 md:my-8 pb-4 md:pb-6 flex flex-col justify-center items-center border-b border-w-grey-tone-2 dark:border-w-grey-tone-3'>
          <Paragraph>
            <>Email: {email}</>
          </Paragraph>
          <Paragraph>
            <>Подтвержден: {isActivated ? 'Да' : 'Нет'}</>
          </Paragraph>
        </div>

        <Statistics />
        <div className='w-48 md:w-52 mt-10 md:mt-12'>
          <Button type='button' text={'выйти'} color={'red'} onClick={() => handleLogout()} />
        </div>
      </section>
    </main>
  )
}

export default User
