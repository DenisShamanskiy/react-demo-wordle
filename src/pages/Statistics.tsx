import StatisticBars from 'components/StatisticBars'
import StatisticCounter from 'components/StatisticCounter'
import { Heading, Section } from 'components/common'
import { useAppSelector } from 'utils/hook'

const Statistics = () => {
  const { win, fail, leave } = useAppSelector((state) => state.user.statistics)

  return (
    <Section width='m'>
      <div className='flex w-full flex-col items-center justify-center'>
        <Heading>Статистика</Heading>
        <>
          <div className='mx-auto my-6 grid w-11/12 grid-cols-3 gap-1 sm:my-8'>
            <StatisticCounter count={win} title='Выиграл' />
            <StatisticCounter count={leave} title='Сдался' />
            <StatisticCounter count={fail} title='Проиграл' />
          </div>
          <div className='mx-auto w-11/12'>
            <h3 className='flex justify-center pb-4 text-sm font-bold uppercase text-w-quartz dark:text-w-white-dark sm:pb-6 sm:text-base'>
              Выигрышные попытки
            </h3>
            <StatisticBars />
          </div>
        </>
      </div>
    </Section>
  )
}

export default Statistics
