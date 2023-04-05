import { AdminUserListContent, AdminUserListHeader } from 'components/Admin'
import Loader from 'components/Loaders/Loader'
import { Section } from 'components/common'
import { useGetUsersQuery } from 'redux/api/userApi'

const AdminUserList = () => {
  const { isLoading } = useGetUsersQuery()

  return (
    <Section width='2xl'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AdminUserListHeader />
          <AdminUserListContent />
        </>
      )}
    </Section>
  )
}

export default AdminUserList
