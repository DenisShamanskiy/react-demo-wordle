import { SortKey } from 'pages/Rating'
import { FC } from 'react'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { useAppSelector } from 'utils/hook'

interface IRatingHeaderProps {
  id: SortKey
  sortBy: SortKey | null
  sortAsc: boolean
  sortUsersByStatistics: (key: SortKey) => void
  customClass?: string
  children: string | React.ReactNode
}

const RatingHeader: FC<IRatingHeaderProps> = ({
  id,
  sortBy,
  sortAsc,
  sortUsersByStatistics,
  customClass,
  children,
}) => {
  const darkMode = useAppSelector((state) => state.settings.darkMode)
  const btnClassName = `shadow-popped active:shadow-pushed dark:shadow-poppedDark dark:active:shadow-pushedDark hover:shadow-hover dark:hover:shadow-hoverDark h-full relative flex items-center justify-center rounded-full ${customClass}`
  return (
    <button
      id={id}
      className={`${btnClassName}`}
      onClick={() => sortUsersByStatistics(id)}
    >
      {children}
      {sortBy === id && (
        <span className='absolute -bottom-[18px] right-1/2 w-3 translate-x-1/2 md:-bottom-5'>
          {globalSvgSelector(sortAsc ? 'arrow-down' : 'arrow-up', darkMode)}
        </span>
      )}
    </button>
  )
}

export default RatingHeader
