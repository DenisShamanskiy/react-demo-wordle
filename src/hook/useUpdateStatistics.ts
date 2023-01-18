import { useState } from 'react'
import { BarRow } from 'redux/api/types'
import { useUpdateStatisticsMutation } from 'redux/api/userApi'
import { useAppSelector } from 'utils/hook'

type Props = {
  result: string
  currentRowIndex?: number
}

const useUpdateStatistics = () => {
  const { id, statistics } = useAppSelector((state) => state.user)
  const [newStatistics, setNewStatistics] = useState(statistics)
  const [setStatistics] = useUpdateStatisticsMutation()

  const updateStatistics = async (props: Props) => {
    const updatedStats = { ...statistics }

    switch (props.result) {
      case 'WIN':
        updatedStats.win = updatedStats.win + 1
        updatedStats.bar = updatedStats.bar.map(
          (barRow: BarRow, index: number) => {
            return {
              count:
                index === props.currentRowIndex
                  ? barRow.count + 1
                  : barRow.count,
              percent:
                index === props.currentRowIndex
                  ? `${Math.round(
                      (100 / updatedStats.win) * (barRow.count + 1),
                    )}%`
                  : `${Math.round((100 / updatedStats.win) * barRow.count)}%`,
            }
          },
        )
        setNewStatistics(updatedStats)
        break
      case 'FAIL':
        updatedStats.fail = updatedStats.fail + 1
        setNewStatistics(updatedStats)
        break
      case 'LEAVE':
        updatedStats.leave = updatedStats.leave + 1
        setNewStatistics(updatedStats)
        break
      default:
        return
    }
    setStatistics({ id: id!, statistics: updatedStats })
    return updatedStats
  }

  return {
    newStatistics,
    updateStatistics,
  }
}

export default useUpdateStatistics
