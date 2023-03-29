import { useEffect, useState } from 'react'
import { useGetUsersQuery } from 'redux/api/userApi'
import Loader from 'components/Loaders/Loader'
import { User } from 'redux/api/types'
import RatingHeader from 'components/RatingHeader'
import RatingUserList from 'components/RatingUserList'
import { Heading, Section } from 'components/common'

export type SortKey = 'username' | 'leave' | 'win' | 'fail'

const Rating = () => {
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
    <Section width='m'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading>Рейтинг игроков</Heading>
          <div className='my-8 flex w-full flex-col justify-center sm:my-10'>
            <div className='grid h-10 w-full grid-cols-[1fr_40px_40px_40px] items-center gap-2 self-center sm:h-12 sm:grid-cols-[1fr_48px_48px_48px]'>
              <RatingHeader
                id='username'
                text='ИГРОК'
                sortBy={sortBy}
                sortAsc={sortAsc}
                sortUsersByStatistics={sortUsersByStatistics}
              ></RatingHeader>
              <RatingHeader
                id='win'
                sortBy={sortBy}
                sortAsc={sortAsc}
                sortUsersByStatistics={sortUsersByStatistics}
                tooltip='Выиграл'
              ></RatingHeader>
              <RatingHeader
                id='leave'
                sortBy={sortBy}
                sortAsc={sortAsc}
                sortUsersByStatistics={sortUsersByStatistics}
                tooltip='Сдался'
              ></RatingHeader>
              <RatingHeader
                id='fail'
                sortBy={sortBy}
                sortAsc={sortAsc}
                sortUsersByStatistics={sortUsersByStatistics}
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
