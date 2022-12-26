import CountStats from 'components/micro-components/CountStats'
import { useAppSelector } from 'utils/hook'
import Heading2 from 'components/micro-components/Heading'

const Statistics = () => {
  const { win, loss, surrender, bar } = useAppSelector(
    (state) => state.user.statistics,
  )

  return (
    <>
      <Heading2>Статистика</Heading2>
      <>
        <div className='mx-auto my-6 grid w-11/12 grid-cols-3 gap-1 md:my-8'>
          {[win, surrender, loss].map((item, index) => {
            return <CountStats count={item} index={index} key={index} />
          })}
        </div>
        <div className='mx-auto w-11/12'>
          <h3 className='flex justify-center pb-4 text-sm font-bold uppercase text-w-quartz dark:text-w-white-dark md:pb-6 md:text-base'>
            Выигрышные попытки
          </h3>
          <ul className='mx-auto grid max-w-md grid-rows-6 gap-y-1 border-y border-w-grey-tone-2 py-4 dark:border-w-grey-tone-3 md:gap-y-2'>
            {bar.map((row, index) => {
              return (
                <li
                  className='flex w-full items-center justify-center'
                  key={index}
                >
                  <p className='mr-2 flex w-5 text-sm font-bold text-w-quartz dark:text-w-white-dark md:mr-3 md:text-base'>
                    #{row.name}
                  </p>
                  <div className='h-3 w-10/12 rounded-xl bg-w-grey-tone-2/40 dark:bg-w-grey-dark/40 md:h-4 '>
                    <span
                      className='relative block h-full overflow-hidden rounded-xl bg-w-green dark:bg-w-green-dark'
                      style={{ width: `${row.percent}` }}
                    ></span>
                  </div>
                  <p className='ml-3 box-border flex h-6 w-6 items-center justify-center overflow-hidden border border-w-grey-tone-2 bg-w-white text-sm font-extrabold uppercase text-w-quartz dark:border-0 dark:bg-w-grey-dark dark:text-w-white md:ml-4 md:h-7 md:w-7 md:text-lg'>
                    {row.count}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    </>
  )
}

export default Statistics
