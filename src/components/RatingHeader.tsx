import { SortKey } from 'pages/Rating'
import { FC } from 'react'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'
import Button from './Button'
import ButtonIcon from './ButtonIcon'

interface IRatingHeaderProps {
  id: SortKey
  sortBy: SortKey | null
  sortAsc: boolean
  sortUsersByStatistics: (key: SortKey) => void
  customClass?: string
  text?: string
  tooltip?: string
}

const RatingHeader: FC<IRatingHeaderProps> = ({
  id,
  sortBy,
  sortAsc,
  sortUsersByStatistics,
  text,
  tooltip,
}) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  return text ? (
    <Button
      type={'button'}
      text={text}
      size='full'
      onClick={() => sortUsersByStatistics(id)}
      isRounded
      customClass='relative'
    >
      {sortBy === id && (
        <span className='absolute -bottom-[18px] right-1/2 w-3 translate-x-1/2 md:-bottom-5'>
          {globalSvgSelector(sortAsc ? 'arrow-down' : 'arrow-up', darkMode)}
        </span>
      )}
    </Button>
  ) : (
    <ButtonIcon
      icon={id}
      size='full'
      onClick={() => sortUsersByStatistics(id)}
      tooltip={tooltip}
      customClass='m-auto p-2 md:p-2.5 relative'
      place='top'
      isShadow
    >
      {sortBy === id && (
        <span className='absolute -bottom-[18px] right-1/2 w-3 translate-x-1/2 md:-bottom-5'>
          {globalSvgSelector(sortAsc ? 'arrow-down' : 'arrow-up', darkMode)}
        </span>
      )}
    </ButtonIcon>
  )
}

export default RatingHeader
