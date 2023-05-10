import useCurrentHeight from '../hook/useCurrentHeight'
import { FC } from 'react'
import { FixedSizeList } from 'react-window'
import { User } from '../redux/api/types'
import RatingListItem from '../components/RatingListItem'

interface IRatingUserListProps {
  users: User[]
}

const RatingUserList: FC<IRatingUserListProps> = ({ users }) => {
  const height = useCurrentHeight()

  return (
    <FixedSizeList
      className='scrollbar-hide mt-6 box-border flex flex-col items-center overflow-y-auto rounded-md sm:mt-8'
      itemData={users}
      innerElementType='ul'
      itemCount={users.length}
      itemSize={41}
      height={height * 0.6}
      width={'clamp(300px, 100%, 448px)'}
    >
      {({ data, style, index }) => {
        return (
          <RatingListItem
            style={style}
            key={index}
            username={data[index]!.username}
            fail={data[index]!.statistics.fail}
            leave={data[index]!.statistics.leave}
            win={data[index]!.statistics.win}
          />
        )
      }}
    </FixedSizeList>
  )
}

export default RatingUserList
