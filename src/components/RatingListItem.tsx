import { FC, HTMLAttributes } from 'react'
import { Paragraph } from './common'
import { useAppSelector } from 'hook'
import { globalSvgSelector } from 'utils/globalSvgSelector'

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
  const usernameOwners = useAppSelector((state) => state.user.username)
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  return (
    <li
      style={style}
      className='owe grid h-10 w-full grid-cols-[1fr_40px_40px_40px] items-center gap-2 rounded-md pl-1.5 pr-0.5 sm:h-12 sm:grid-cols-[1fr_48px_48px_48px]'
    >
      {username === usernameOwners ? (
        <div className='flex overflow-hidden'>
          <Paragraph
            fontSize='sm'
            fontWeight='medium'
            customClass='pl-1.5 pr-1.5 truncate sm:pl-3 sm:pr-1.5'
            tooltipId='username'
            tooltip={username}
          >
            {username}
          </Paragraph>
          <span className='h-5 w-5 sm:h-6 sm:w-6'>
            {globalSvgSelector('person', darkMode)}
          </span>
        </div>
      ) : (
        <Paragraph
          fontSize='sm'
          fontWeight='medium'
          customClass='truncate px-1.5 sm:px-3'
          tooltipId='username'
          tooltip={username}
        >
          {username}
        </Paragraph>
      )}

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
