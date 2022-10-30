import Button from 'components/micro-components/Button/Button'
// import { logout } from 'store/persistSlice'
import { useAppDispatch, useAppSelector } from 'utils/hook'
import { openModal } from 'store/modalSlice'
import Section from 'components/micro-components/Section'
import { useNavigate } from 'react-router-dom'
// import Heading2 from 'components/micro-components/Heading2'

const User = () => {
  const navigate = useNavigate()
  const goAuth = () => navigate('/auth', { replace: true })
  const dispatch = useAppDispatch()
  const { window, title } = useAppSelector((state) => state.modal)
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const handleLogout = () => {
    dispatch(openModal({ open: false, window: window, title: title }))
    // setTimeout(() => {
    //   dispatch(logout())
    // }, 500)
    goAuth()
  }

  return (
    <Section>
      <section className='w-80 select-none'>
        <h2
          className={`${
            darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
          } py-4 text-base font-extrabold text-center uppercase`}
        >
          Игрок
        </h2>
        <ul className='py-4 flex justify-center items-center'>
          {'12345678910'.split('').map((letter, index) => {
            // {[...name].map((letter, index) => {
            return (
              <li
                className={`w-7 h-7 p-2 mr-1 last-of-type:mr-0 inline-flex justify-center items-center font-['Bitter'] text-xl font-extrabold text-wordleWhite uppercase ${
                  darkMode ? 'bg-wordleGreenDark' : 'bg-wordleGreen'
                }`}
                key={index}
              >
                {letter}
              </li>
            )
          })}
        </ul>
        <Button
          text={'выйти'}
          color={'red'}
          onClick={() => handleLogout()}
          style={{ margin: '16px auto' }}
        />
      </section>
    </Section>
  )
}

export default User
