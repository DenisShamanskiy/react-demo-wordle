import { FC } from 'react'

interface IStatisticCounterProps {
  count: number
  title: 'Выиграл' | 'Сдался' | 'Проиграл'
}

const getColorClasses = (title: IStatisticCounterProps['title']) => {
  switch (title) {
    case 'Выиграл':
      return 'text-w-green dark:text-w-green-dark'
    case 'Сдался':
      return 'text-w-yellow dark:text-w-yellow-dark'
    case 'Проиграл':
      return 'text-w-red dark:text-w-red-dark'
    default:
      return null
  }
}

const StatisticCounter: FC<IStatisticCounterProps> = ({ count, title }) => {
  return (
    <div
      className={`flex flex-col justify-center text-center font-bold ${getColorClasses(
        title,
      )}`}
    >
      <p className='mb-2 text-3xl sm:text-4xl'>{count}</p>
      <p className='text-base uppercase sm:text-lg'>{title}</p>
    </div>
  )
}

export default StatisticCounter
