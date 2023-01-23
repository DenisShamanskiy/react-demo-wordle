import { FC } from 'react'
import { User } from 'redux/api/types'

type UserProps = {
  user: User
}

const UserListItem: FC<UserProps> = ({ user }) => {
  return (
    <li className='grid h-10 w-full grid-cols-[1fr_150px] items-center justify-center gap-4 text-center text-w-quartz transition-all duration-300 hover:translate-x-4 dark:text-w-white-dark sm:grid-cols-[1fr_150px_1fr] md:h-12'>
      <p className='inline-block w-full  px-4 text-center text-sm  font-semibold md:text-base'>
        {user.email}
      </p>

      <p className='w-full border-l-2 border-w-grey-tone-2 px-4 text-center text-sm font-semibold dark:border-w-grey-tone-3 sm:border-x-2  md:text-base'>
        {user.roles.join(', ')}
      </p>
      <p className='hidden w-full px-4 text-center text-sm font-semibold  sm:block md:text-base'>
        {user.username}
      </p>
    </li>
  )
}

export default UserListItem
