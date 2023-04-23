import { FC, HTMLAttributes } from 'react'
import { IFormValues } from 'models/IFormValues'
import { UseFormReset } from 'react-hook-form/dist/types/form'
import { NotificationColor } from 'types/store'
import { useDeleteWordMutation } from 'redux/api/wordsApi'
import ButtonIcon from 'components/ButtonIcon'
import { Paragraph } from 'components/common'
import { useAppDispatch, useGameLogic } from 'hook'
import { openModal } from 'redux/features/modalSlice'

interface IAdminWordListItemProps extends HTMLAttributes<HTMLLIElement> {
  index: number
  word: string
  reset: UseFormReset<IFormValues>
}

const AdminWordListItem: FC<IAdminWordListItemProps> = ({
  index,
  word,
  reset,
  style,
}) => {
  const dispatch = useAppDispatch()
  const { showNotify } = useGameLogic()
  const [deleteWord, { isLoading }] = useDeleteWordMutation()

  const handleDeleteWord = async (word: string) => {
    try {
      const response = await deleteWord(word).unwrap()
      showNotify(NotificationColor.success, `${response.message}`)
      reset()
    } catch (error) {
      dispatch(
        openModal({
          component: 'Error',
          error: {
            status: error.status,
            message: error.data.message,
          },
        }),
      )
    }
  }

  return (
    <li
      style={style}
      className='flex h-10 w-full items-center border-b border-w-grey-tone-2 p-1 last-of-type:border-none dark:border-w-grey-tone-3 sm:h-12 sm:p-2'
    >
      <Paragraph
        fontSize='sm'
        fontWeight='medium'
        textAlign='center'
        customClass='w-4 sm:w-6'
      >
        {index + 1}
      </Paragraph>
      <Paragraph
        fontSize='sm'
        fontWeight='medium'
        textAlign='center'
        textTransform='uppercase'
        customClass='w-full'
      >
        {word}
      </Paragraph>
      <ButtonIcon
        icon='close'
        size='s'
        onClick={() => handleDeleteWord(word)}
        disabled={isLoading}
        isShadow
      />
    </li>
  )
}

export default AdminWordListItem
