interface ICountStatsProps {
  index: number
  count: number
}

const CountStats = ({ index, count }: ICountStatsProps) => {
  const dataCountStats = [
    {
      text: 'Выиграл',
      style: 'text-w-green dark:text-w-green-dark',
    },
    {
      text: 'Сдался',
      style: 'text-w-yellow dark:text-w-yellow-dark',
    },
    {
      text: 'Проиграл',
      style: 'text-w-red dark:text-w-red-dark',
    },
  ]

  return (
    <div
      className={`flex flex-col justify-center text-center ${
        dataCountStats[index]!.style
      }`}
    >
      <p className='mb-2 text-3xl font-bold md:text-4xl'>{count}</p>
      <p className='text-base font-bold uppercase md:text-lg'>
        {dataCountStats[index]!.text}
      </p>
    </div>
  )
}

export default CountStats
