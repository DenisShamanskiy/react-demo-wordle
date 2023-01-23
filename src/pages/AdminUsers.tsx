import Loader from 'components/Loaders/Loader'
import UserListItem from 'components/UserListItem'
import { Link } from 'react-router-dom'
import { useGetUsersQuery } from 'redux/api/userApi'

const AdminUsers = () => {
  const { data, isLoading } = useGetUsersQuery()

  return (
    <section className='mx-auto flex h-[90%] select-none flex-col gap-2'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='grid min-h-[40px] grid-cols-[1fr_150px] items-center justify-center rounded-full border-2 border-w-grey-tone-2 text-w-quartz dark:border-w-grey-tone-3 dark:text-w-white-dark sm:grid-cols-[1fr_150px_1fr] md:min-h-[48px]'>
            <p className='text-center text-sm font-semibold uppercase  md:text-base'>
              Почта
            </p>
            <p className='border-l-2 border-w-grey-tone-2 text-center text-sm font-semibold uppercase dark:border-w-grey-tone-3 sm:border-x-2 md:text-base'>
              Роль
            </p>
            <p className='hidden text-center text-sm font-semibold uppercase sm:block md:text-base'>
              Имя
            </p>
          </div>
          <ul className='scrollbar-hide box-border flex w-full flex-col gap-2 overflow-y-auto'>
            {data!.map((user) => {
              return (
                <Link key={user.id} to={`${user.id}`}>
                  <UserListItem user={user} key={user.id} />
                </Link>
              )
            })}
          </ul>
        </>
      )}
    </section>
  )
}

export default AdminUsers
