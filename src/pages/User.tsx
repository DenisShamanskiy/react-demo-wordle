import Button from 'components/Button'
import Loader from 'components/Loaders/Loader'
import useNotification from 'hook/useAppNotification'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteUserMutation, useGetUserQuery } from 'redux/api/userApi'
import { NotificationColor } from 'types/store'
import { globalSvgSelector } from 'utils/globalSvgSelector'

const User: FC = () => {
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
    <section className='mx-auto flex h-5/6 w-11/12 max-w-[380px] flex-col items-center md:max-w-[448px]'>
      {isLoading ? (
        <Loader />
      ) : !data ? (
        <h2 className='text-center text-base font-bold text-w-quartz dark:text-w-white-dark md:text-xl'>
          Здесь никого нет
        </h2>
      ) : (
        <>
          <h2 className='text-center text-base font-bold text-w-quartz dark:text-w-white-dark md:text-xl'>
            id: {data?.id}
          </h2>
          <div className='my-8 flex w-full flex-col gap-3 md:my-10'>
            <div className='flex h-10 rounded-2xl border-2 border-w-grey-tone-2 text-w-quartz dark:border-w-grey-tone-3 dark:text-w-white-dark md:h-12'>
              <p className='flex w-32 items-center pl-4 font-semibold'>Имя</p>
              <p className='m-auto flex items-center font-semibold'>
                {data?.username}
              </p>
            </div>
            <div className='flex h-10 rounded-2xl border-2 border-w-grey-tone-2 font-semibold text-w-quartz dark:border-w-grey-tone-3 dark:text-w-white-dark md:h-12'>
              <p className='flex w-32 items-center pl-4 font-semibold'>
                Email
                <span className='ml-1 w-4'>
                  {globalSvgSelector(
                    data?.isActivated ? 'checkmark-circle' : 'close-circle',
                    true,
                  )}
                </span>
              </p>
              <p className='m-auto flex items-center'>{data?.email}</p>
            </div>
            <div className='flex h-10 rounded-2xl border-2 border-w-grey-tone-2 text-w-quartz dark:border-w-grey-tone-3 dark:text-w-white-dark md:h-12'>
              <p className='flex w-32 items-center pl-4 font-semibold'>Роли</p>
              <p className='m-auto flex items-center font-semibold'>
                {data?.roles.join(', ')}
              </p>
            </div>
          </div>
          <Button
            type={'button'}
            text={'Удалить'}
            size={'s'}
            onClick={() => handleDeleteUser(id!)}
            disabled={isLoadDeleteUser}
            isLoading={isLoadDeleteUser}
            isRounded
          />
        </>
      )}
    </section>
  )
}

export default User
