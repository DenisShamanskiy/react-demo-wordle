import { FC } from 'react'

interface IRatingListItemProps {
  style: React.CSSProperties
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
      className='grid h-10 w-full grid-cols-[1fr_40px_40px_40px] items-center gap-2 md:h-12 md:grid-cols-[1fr_48px_48px_48px]'
    >
      <p className='truncate px-1.5 text-sm font-medium leading-10 text-w-quartz dark:text-w-white-dark md:text-base'>
        {username}
      </p>
      <p className='flex items-center justify-center text-base font-semibold text-w-quartz dark:text-w-white-dark md:text-lg'>
        {win}
      </p>
      <p className='flex items-center justify-center text-base font-semibold text-w-quartz dark:text-w-white-dark md:text-lg'>
        {leave}
      </p>
      <p className='flex items-center justify-center text-base font-semibold text-w-quartz dark:text-w-white-dark md:text-lg'>
        {fail}
      </p>
    </li>
  )
}

export default RatingListItem
