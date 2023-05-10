import { useAppSelector } from '../hook'

const StatisticBars = () => {
  const bar = useAppSelector((state) => state.user.statistics.bar)
  return (
    <ul className='mx-auto grid max-w-md grid-rows-6 gap-y-1 border-y border-w-grey-tone-2 py-4 dark:border-w-grey-tone-3 sm:gap-y-2'>
      {bar.map((row, index) => {
        return (
          <li className='flex w-full items-center justify-center' key={index}>
            <p className='mr-2 w-6 text-center text-base font-bold text-w-quartz dark:text-w-white-dark sm:mr-3 sm:w-7 sm:text-xl'>
              #{index + 1}
            </p>
            <div className='h-3 w-10/12 rounded-xl bg-w-grey-tone-2/40 dark:bg-w-grey-dark/40 sm:h-4'>
              <span
                className='relative block h-full overflow-hidden rounded-xl bg-w-green dark:bg-w-green-dark'
                style={{ width: `${row.percent}` }}
              ></span>
            </div>
            <p className='ml-2 w-6 text-center text-base font-bold text-w-quartz dark:text-w-white-dark sm:ml-3 sm:w-7 sm:text-xl'>
              {row.count}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default StatisticBars
