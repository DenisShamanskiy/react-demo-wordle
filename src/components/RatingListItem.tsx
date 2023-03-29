import { FC, HTMLAttributes } from 'react'
import { Paragraph } from './common'

interface IRatingListItemProps extends HTMLAttributes<HTMLLIElement> {
  username: string
  fail: number
  leave: number
  win: number
}

const RatingListItem: FC<IRatingListItemProps> = ({
  style,
  username,
  fail,
  leave,
  win,
}) => {
  return (
    <li
      style={style}
      className='grid h-10 w-full grid-cols-[1fr_40px_40px_40px] items-center gap-2 sm:h-12 sm:grid-cols-[1fr_48px_48px_48px]'
    >
      <Paragraph
        fontSize='sm'
        fontWeight='medium'
        customClass='truncate px-1.5 sm:px-3'
      >
        {username}
      </Paragraph>
      <Paragraph fontSize='base' fontWeight='semibold' textAlign='center'>
        {win}
      </Paragraph>
      <Paragraph fontSize='base' fontWeight='semibold' textAlign='center'>
        {leave}
      </Paragraph>
      <Paragraph fontSize='base' fontWeight='semibold' textAlign='center'>
        {fail}
      </Paragraph>
    </li>
  )
}

export default RatingListItem
