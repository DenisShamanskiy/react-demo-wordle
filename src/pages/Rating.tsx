import { useGetUsersQuery } from 'redux/api/userApi'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'
import Loader from 'components/Loaders/Loader'
import Section from 'components/Section'
import Heading from 'components/micro-components/Heading'
import RatingListItem from 'components/RatingListItem'

const Rating = () => {
  const { data, isLoading } = useGetUsersQuery()
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading>Рейтинг игроков</Heading>
          <div className='my-8 flex w-full flex-col justify-center md:my-10'>
            <div className='grid h-10 w-full grid-cols-[1fr_40px_40px_40px] items-center gap-1 self-center border-b border-w-grey-tone-2 text-w-quartz dark:border-w-grey-tone-3 dark:text-w-white-dark md:h-12'>
              <div className='flex w-full items-center px-1.5 text-sm font-bold md:text-lg'>
                ИГРОК
              </div>
              <div className='m-auto w-6 md:w-7'>
                {globalSvgSelector('medal', darkMode)}
              </div>
              <div className='m-auto w-6 md:w-7'>
                {globalSvgSelector('flag', darkMode)}
              </div>
              <div className='m-auto w-6 md:w-7'>
                {globalSvgSelector('skull', darkMode)}
              </div>
            </div>
            <ul className='scrollbar-hide box-border flex w-full flex-col overflow-y-auto pt-1'>
              {data!.map((user, index) => {
                return (
                  <RatingListItem
                    key={index}
                    username={user.username}
                    fail={user.statistics.fail}
                    leave={user.statistics.leave}
                    win={user.statistics.win}
                  />
                )
              })}
            </ul>
          </div>
        </>
      )}
    </Section>
  )
}

export default Rating
