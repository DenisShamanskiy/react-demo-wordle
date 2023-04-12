import { useParams } from 'react-router-dom'
import { useDeleteUserMutation, useGetUserQuery } from 'redux/api/userApi'
import { globalSvgSelector } from 'utils/globalSvgSelector'
import { Heading, Paragraph, Section } from 'components/common'
import Button from 'components/Button'
import Loader from 'components/Loaders/Loader'
import { AdminUserDetails } from 'components/Admin'
import { useAppDispatch } from 'hook'
import { openModal } from 'redux/features/modalSlice'

const User = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetUserQuery(id!)
  const [, { isLoading: isLoadDeleteUser }] = useDeleteUserMutation()

  return (
    <Section width='s'>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <Heading>id: {data.id}</Heading>
          <div className='mt-4 mb-5 flex w-full flex-col gap-3 border-t-2 border-w-grey-tone-2 py-4 dark:border-w-grey-tone-3 sm:mb-6 sm:mt-5 sm:py-5'>
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
            onClick={() =>
              dispatch(
                openModal({
                  component: 'Confirm',
                  props: {
                    heading: 'Удалить аккаунт?',
                    id: id,
                  },
                }),
              )
            }
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
