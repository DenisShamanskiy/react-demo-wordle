import { useAppSelector } from 'utils/hook'
import { Link } from 'react-router-dom'

const StatisticsNotAuth = () => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  return (
    <div className='my-6'>
      <p
        className={`${
          darkMode ? 'text-wordleWhite' : 'text-wordleQuartz'
        } text-center text-sm lg:text-base font-bold`}
      >
        Для просмотра и учета статистики необходимо
        <Link
          to='/auth'
          className='text-wordleRed my-2 mx-auto rounded block text-lg lg:text-xl text-center font-bold uppercase select-none'
        >
          Войти
        </Link>
        в учетную запись
      </p>
    </div>
  )
}

export default StatisticsNotAuth
