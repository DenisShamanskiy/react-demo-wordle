import { Paragraph } from '../../components/common'

const AdminUserListHeader = () => {
  return (
    <div className='grid h-10 w-full grid-cols-[minmax(200px,_1fr)_minmax(120px,_180px)] items-center justify-center gap-1 rounded-full border-2 border-w-grey-tone-2 dark:border-w-grey-tone-3 sm:h-12 sm:grid-cols-[1fr_140px_1fr] sm:gap-2'>
      <Paragraph
        fontSize='sm'
        fontWeight='semibold'
        textAlign='center'
        textTransform='uppercase'
      >
        Почта
      </Paragraph>
      <Paragraph
        fontSize='sm'
        fontWeight='semibold'
        textAlign='center'
        textTransform='uppercase'
        customClass='border-l-2 border-w-grey-tone-2 dark:border-w-grey-tone-3 sm:border-x-2'
      >
        Роль
      </Paragraph>
      <Paragraph
        fontSize='sm'
        fontWeight='semibold'
        textAlign='center'
        textTransform='uppercase'
        customClass='hidden sm:block'
      >
        Имя
      </Paragraph>
    </div>
  )
}

export default AdminUserListHeader
