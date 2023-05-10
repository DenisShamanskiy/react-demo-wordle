import { FC, HTMLAttributes } from 'react'
import { Paragraph } from '../../components/common'

interface IAdminUserDetailsProps extends HTMLAttributes<HTMLLIElement> {
  title: 'ИМЯ' | 'EMAIL' | 'РОЛЬ'
  details: string
}

const AdminUserDetails: FC<IAdminUserDetailsProps> = ({
  children,
  title,
  details,
}) => {
  return (
    <li className='relative grid h-10 w-full grid-cols-[100px_1fr] items-center justify-between sm:h-12'>
      {children}
      <Paragraph
        fontSize='sm'
        fontWeight='semibold'
        customClass='border-r-2 border-w-grey-tone-2 dark:border-w-grey-tone-3 px-2'
      >
        {title}
      </Paragraph>
      <Paragraph
        fontSize='sm'
        fontWeight='semibold'
        textAlign='center'
        customClass='truncate pl-2'
      >
        {details}
      </Paragraph>
    </li>
  )
}

export default AdminUserDetails
