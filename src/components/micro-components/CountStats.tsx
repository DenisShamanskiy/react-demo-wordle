import { useAppSelector } from 'hook'

interface ICountStatsProps {
  index: number
  count: number
}

const CountStats = ({ index, count }: ICountStatsProps) => {
  const dark = useAppSelector((state) => state.theme.darkThemeSlice)

  const dataCountStats = [
    {
      text: 'Выиграл',
      style: `${dark ? 'text-wordleGreenDark' : 'text-wordleGreen'}`,
    },
    {
      text: 'Сдался',
      style: `${dark ? 'text-wordleYellowDark' : 'text-wordleYellow'}`,
    },
    {
      text: 'Проиграл',
      style: `${dark ? 'text-wordleRedDark' : 'text-wordleRed'}`,
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
