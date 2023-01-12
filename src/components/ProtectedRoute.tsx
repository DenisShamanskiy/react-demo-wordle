import { FC, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'utils/hook'

type ProtectedRouteProps = {
  role: string
  redirectPath?: string
  children: JSX.Element
  load: boolean
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  role,
  redirectPath = '/',
  children,
  load,
}) => {
  const { isLoggedIn, roles } = useAppSelector((state) => state.user)
  const loading = useAppSelector((state) => state.loading.value)

  useEffect(() => {
    console.log(loading)
    console.log(load)
  }, [load])

  return (
    <>
      {load ? (
        <p className='text-white'>загрузка</p>
      ) : isLoggedIn && roles.includes(role) ? (
        children
      ) : (
        <Navigate to={redirectPath} replace={true} />
      )}
    </>
  )

  // if (!loading) {
  //   if (isLoggedIn && roles.includes(role)) {
  //     return children
  //   }
  //   return <Navigate to={redirectPath} replace={true} />
  // } else return <p>загрузка</p>
}

export default ProtectedRoute
