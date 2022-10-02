import { useAppSelector } from 'utils/hook'

interface ICountStatsProps {
  index: number
  count: number
}

const CountStats = ({ index, count }: ICountStatsProps) => {
  const darkMode = useAppSelector((state) => state.persist.settings.darkMode)

  const dataCountStats = [
    {
      text: 'Выиграл',
      style: `${darkMode ? 'text-wordleGreenDark' : 'text-wordleGreen'}`,
    },
    {
      text: 'Сдался',
      style: `${darkMode ? 'text-wordleYellowDark' : 'text-wordleYellow'}`,
    },
    {
      text: 'Проиграл',
      style: `${darkMode ? 'text-wordleRedDark' : 'text-wordleRed'}`,
    },
  ]

  return (
    <div className={`flex flex-col justify-center text-center ${dataCountStats[index]!.style}`}>
      <p className='mb-2 text-3xl font-bold'>{count}</p>
      <p className='text-sm font-bold uppercase'>{dataCountStats[index]!.text}</p>
    </div>
  )
}

export default CountStats
