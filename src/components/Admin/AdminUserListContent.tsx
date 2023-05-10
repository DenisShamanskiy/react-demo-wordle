import { Link } from 'react-router-dom'
import { useGetUsersQuery } from '../../redux/api/userApi'
import AdminUserListItem from '../../components/Admin/AdminUserListItem'
import { Paragraph } from '../../components/common'

const AdminUserListContent = () => {
  const { data } = useGetUsersQuery()
  return data ? (
    <ul className='scrollbar-hide mt-1 box-border flex w-full flex-col gap-1 overflow-y-auto sm:mt-2 sm:gap-2'>
      {data.map((user) => {
        return (
          <Link key={user.id} to={`${user.id}`}>
            <AdminUserListItem
              email={user.email}
              roles={user.roles}
              username={user.username}
              key={user.id}
            />
          </Link>
        )
      })}
    </ul>
  ) : (
    <Paragraph fontSize='base'>
      Список игроков пуст или что-то не загрузилось...
    </Paragraph>
  )
}

export default AdminUserListContent
