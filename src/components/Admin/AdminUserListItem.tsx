import { FC, HTMLAttributes } from 'react'
import { User } from 'redux/api/types'
import { Paragraph } from 'components/common'

interface IAdminUserListItemProps extends HTMLAttributes<HTMLLIElement> {
  email: User['email']
  roles: User['roles']
  username: User['username']
}

const AdminUserListItem: FC<IAdminUserListItemProps> = ({
  email,
  roles,
  username,
}) => {
  return (
    <li className='grid h-10 w-full grid-cols-[minmax(200px,_1fr)_minmax(120px,_180px)] items-center justify-center gap-1 transition-all duration-300 hover:translate-x-1 sm:h-12 sm:grid-cols-[1fr_140px_1fr] sm:gap-2'>
      <Paragraph
        fontSize='sm'
        fontWeight='semibold'
        textAlign='center'
        customClass='truncate pl-1 sm:pl-2'
      >
        {email}
      </Paragraph>
      <Paragraph
        fontSize='sm'
        fontWeight='semibold'
        textAlign='center'
        customClass='border-l-2 border-w-grey-tone-2 dark:border-w-grey-tone-3 sm:border-x-2'
      >
        {roles.join(', ')}
      </Paragraph>
      <Paragraph
        fontSize='sm'
        fontWeight='semibold'
        textAlign='center'
        customClass='hidden sm:block'
      >
        {username}
      </Paragraph>
    </li>
  )
}

export default AdminUserListItem
