import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'utils/hook'

type ProtectedRouteProps = {
  role: string
  redirectPath?: string
  children: JSX.Element
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  role,
  redirectPath = '/',
  children,
}) => {
  const { isLoggedIn, roles } = useAppSelector((state) => state.user)

  return (
    <>
      {isLoggedIn && roles.includes(role) ? (
        children
      ) : (
        <Navigate to={redirectPath} replace={true} />
      )}
    </>
  )
}

export default ProtectedRoute
