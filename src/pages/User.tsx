import { useNavigate, useParams } from 'react-router-dom'
import { NotificationColor } from 'types/store'
import { useDeleteUserMutation, useGetUserQuery } from 'redux/api/userApi'
import useNotification from 'hook/useAppNotification'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { Heading, Paragraph, Section } from 'components/common'
import Button from 'components/Button'
import Loader from 'components/Loaders/Loader'
import { AdminUserDetails } from 'components/Admin'

const User = () => {
  const { showNotify } = useNotification()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const { id } = useParams()

  const { data, isLoading } = useGetUserQuery(id!)
  const [deleteUser, { isLoading: isLoadDeleteUser }] = useDeleteUserMutation()

  const handleDeleteUser = async (id: string) => {
    try {
      const response = await deleteUser(id).unwrap()
      if (response.errors) {
        showNotify(NotificationColor.failure, `${response.errors[0]}`)
        return
      }
      showNotify(NotificationColor.success, 'Данные пользователя удалены')
      goBack()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Section width='s'>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <Heading>id: {data.id}</Heading>
          <div className='mt-4 mb-5 flex w-full flex-col gap-3 border-y-2 border-w-grey-tone-2 py-4 dark:border-w-grey-tone-3 sm:mb-6 sm:mt-5 sm:py-5'>
            <AdminUserDetails title='ИМЯ' details={data.username} />
            <AdminUserDetails title='EMAIL' details={data.email}>
              <span className='absolute left-[17%] w-4 sm:left-[16%] sm:w-5'>
                {globalSvgSelector(
                  data.isActivated ? 'activated' : 'not-activated',
                  true,
                )}
              </span>
            </AdminUserDetails>
            <AdminUserDetails title='РОЛЬ' details={data.roles.join(', ')} />
          </div>
          <Button
            type='button'
            text='Удалить'
            size='s'
            onClick={() => handleDeleteUser(data.id)}
            disabled={isLoadDeleteUser}
            isLoading={isLoadDeleteUser}
            isRounded
          />
        </>
      ) : (
        <Paragraph fontSize='base'>Здесь никого нет</Paragraph>
      )}
    </Section>
  )
}

export default User
