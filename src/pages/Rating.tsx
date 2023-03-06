import { FC, useEffect, useState } from 'react'
import { useGetUsersQuery } from 'redux/api/userApi'
import Loader from 'components/Loaders/Loader'
import Section from 'components/Section'
import Heading from 'components/micro-components/Heading'
import { User } from 'redux/api/types'
import RatingHeader from 'components/RatingHeader'
import RatingUserList from 'components/RatingUserList'

export type SortKey = 'username' | 'leave' | 'win' | 'fail'

const Rating: FC = () => {
  const { data, isLoading } = useGetUsersQuery()
  const [filterArr, setFilterArr] = useState<User[]>([])
  const [sortBy, setSortBy] = useState<SortKey | null>(null)
  const [sortAsc, setSortAsc] = useState(true)

  const sortUsersByStatistics = (sortType: SortKey): void => {
    setSortBy(sortType)
    setSortAsc((prev) => (sortBy === sortType ? !prev : true))
  }

  useEffect(() => {
    if (!isLoading && sortBy) {
      const newArr = [...data!].sort((a, b) => {
        if (sortBy === 'username') {
          return sortAsc
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy])
        }
        return sortAsc
          ? a.statistics[sortBy] - b.statistics[sortBy]
          : b.statistics[sortBy] - a.statistics[sortBy]
      })
      setFilterArr(newArr)
    } else {
      if (!isLoading) {
        setFilterArr(data!)
      }
    }
  }, [isLoading, sortBy, sortAsc])

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading>Рейтинг игроков</Heading>
          <div className='my-8 flex w-full flex-col justify-center md:my-10'>
            <div className='w- grid h-10 w-full grid-cols-[1fr_40px_40px_40px] items-center gap-2 self-center text-w-quartz dark:text-w-white-dark md:h-12 md:grid-cols-[1fr_48px_48px_48px]'>
              <RatingHeader
                id='username'
                text='ИГРОК'
                sortBy={sortBy}
                sortAsc={sortAsc}
                sortUsersByStatistics={sortUsersByStatistics}
                customClass='py-0.5 px-1.5 text-sm font-bold md:text-lg'
              ></RatingHeader>
              <RatingHeader
                id='win'
                sortBy={sortBy}
                sortAsc={sortAsc}
                sortUsersByStatistics={sortUsersByStatistics}
                customClass='m-auto p-2 md:p-2.5 w-full'
                tooltip='Выиграл'
              ></RatingHeader>
              <RatingHeader
                id='leave'
                sortBy={sortBy}
                sortAsc={sortAsc}
                sortUsersByStatistics={sortUsersByStatistics}
                customClass='m-auto p-2 md:p-2.5 w-full'
                tooltip='Сдался'
              ></RatingHeader>
              <RatingHeader
                id='fail'
                sortBy={sortBy}
                sortAsc={sortAsc}
                sortUsersByStatistics={sortUsersByStatistics}
                customClass='m-auto p-2 md:p-2.5 w-full'
                tooltip='Проиграл'
              ></RatingHeader>
            </div>
            <RatingUserList users={filterArr} />
          </div>
        </>
      )}
    </Section>
  )
}

export default Rating
