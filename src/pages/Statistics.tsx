import CountStats from 'components/micro-components/CountStats'
import { useAppSelector } from 'utils/hook'
import Heading2 from 'components/micro-components/Heading2'

const Statistics = () => {
  const { win, loss, surrender, bar } = useAppSelector((state) => state.user.statistics)

  return (
    <>
      <Heading2>Статистика</Heading2>
      <>
        <div className='w-full max-w-md my-6 md:my-8 grid grid-cols-3 gap-1'>
          {[win, surrender, loss].map((item, index) => {
            return <CountStats count={item} index={index} key={index} />
          })}
        </div>
        <div className='w-full'>
          <h3 className='pb-4 md:pb-6 flex justify-center font-bold text-sm md:text-base text-w-quartz dark:text-w-white-dark uppercase'>
            Выигрышные попытки
          </h3>
          <ul className='max-w-md mx-auto py-4 border-y border-w-grey-tone-2 dark:border-w-grey-tone-3 grid grid-rows-6 gap-y-1 md:gap-y-2'>
            {bar.map((row, index) => {
              return (
                <li className='w-full flex justify-center items-center' key={index}>
                  <p className='w-5 mr-2 md:mr-3 flex text-sm md:text-base font-bold text-w-quartz dark:text-w-white-dark'>
                    #{row.name}
                  </p>
                  <div className='w-10/12 h-3 md:h-4 rounded-xl bg-w-grey-tone-2/40 dark:bg-w-grey-dark/40 '>
                    <span
                      className='relative h-full rounded-xl block bg-w-green dark:bg-w-green-dark overflow-hidden'
                      style={{ width: `${row.percent}` }}
                    ></span>
                  </div>
                  <p className='w-6 md:w-7 h-6 md:h-7 ml-3 md:ml-4 border dark:border-0 border-w-grey-tone-2 flex justify-center items-center bg-w-white dark:bg-w-grey-dark text-sm md:text-lg font-extrabold uppercase text-w-quartz dark:text-w-white box-border overflow-hidden'>
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
