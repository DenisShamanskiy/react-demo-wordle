import { BarRow } from 'redux/api/types'
import { useUpdateStatisticsMutation } from 'redux/api/userApi'
import { useAppSelector } from 'utils/hook'

interface Props {
  result: 'WIN' | 'FAIL' | 'LEAVE'
  currentRowIndex?: number
}

const useUpdateStatistics = () => {
  const { id, statistics } = useAppSelector((state) => state.user)
  const [setStatistics] = useUpdateStatisticsMutation()

  const updateStatistics = async (props: Props) => {
    const currentStatistics = { ...statistics }

    switch (props.result) {
      case 'WIN':
        currentStatistics.win = currentStatistics.win + 1
        currentStatistics.bar = currentStatistics.bar.map(
          (barRow: BarRow, index: number) => {
            return {
              count:
                index === props.currentRowIndex
                  ? barRow.count + 1
                  : barRow.count,
              percent:
                index === props.currentRowIndex
                  ? `${Math.round(
                      (100 / currentStatistics.win) * (barRow.count + 1),
                    )}%`
                  : `${Math.round(
                      (100 / currentStatistics.win) * barRow.count,
                    )}%`,
            }
          },
        )
        break
      case 'FAIL':
        currentStatistics.fail = currentStatistics.fail + 1
        break
      case 'LEAVE':
        currentStatistics.leave = currentStatistics.leave + 1
        break
      default:
        throw new Error(`Invalid result value: ${props.result}`)
    }
    setStatistics({ id: id!, statistics: currentStatistics })
  }

  return {
    updateStatistics,
  }
}

export default useUpdateStatistics
