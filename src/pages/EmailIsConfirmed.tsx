import { Paragraph, Section } from '../components/common'
import { useAppSelector } from '../hook'
import { Link } from 'react-router-dom'
import { globalSvgSelector } from '../utils/globalSvgSelector'

const EmailIsConfirmed = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  return (
    <Section width='s'>
      <p className='mb-6 text-center text-base font-bold text-w-quartz transition-all dark:text-w-white-dark sm:mb-8 sm:text-xl'>
        Поздравляю!
      </p>
      <Paragraph fontSize='sm' fontWeight='semibold' textAlign='center'>
        Email успешно подтвержден.
      </Paragraph>
      {!isLoggedIn && (
        <Paragraph fontSize='sm' fontWeight='semibold' textAlign='center'>
          А теперь ты можешь{' '}
          <span className='text-sm font-semibold text-w-green transition-all duration-300 hover:mx-1 dark:text-w-green-dark sm:text-base sm:hover:mx-2'>
            <Link to='/auth'>войти</Link>
          </span>{' '}
          в приложение.
        </Paragraph>
      )}

      <div className='my-6 w-14 sm:my-8 sm:w-16'>
        {globalSvgSelector('checkmark-circle', darkMode)}
      </div>
    </Section>
  )
}

export default EmailIsConfirmed
