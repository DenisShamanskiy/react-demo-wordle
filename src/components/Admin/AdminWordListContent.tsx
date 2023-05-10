import { FC } from 'react'
import { FixedSizeList } from 'react-window'
import useCurrentHeight from '../../hook/useCurrentHeight'
import useCurrentWidth from '../../hook/useCurrentWidth'
import { IFormValues } from '../../models/IFormValues'
import { UseFormReset } from 'react-hook-form/dist/types/form'
import AdminWordListItem from '../../components/Admin/AdminWordListItem'

interface IAdminWordListContentProps {
  words: string[]
  reset: UseFormReset<IFormValues>
}

const AdminWordListContent: FC<IAdminWordListContentProps> = ({
  words,
  reset,
}) => {
  const height = useCurrentHeight()
  const width = useCurrentWidth()

  return (
    <FixedSizeList
      className='scrollbar-hide box-border flex flex-col items-center  rounded-md'
      itemData={words}
      innerElementType='ul'
      itemCount={words.length}
      itemSize={41}
      height={height * 0.7}
      width={width < 640 ? 288 : 320}
    >
      {({ data, style, index }) => {
        return (
          <AdminWordListItem
            style={style}
            index={index}
            word={data[index]!}
            reset={reset}
          />
        )
      }}
    </FixedSizeList>
  )
}

export default AdminWordListContent
