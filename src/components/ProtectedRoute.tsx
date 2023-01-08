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

  if (!!isLoggedIn && !roles.includes(role)) {
    return <Navigate to={redirectPath} replace={true} />
  }
  return children
}

export default ProtectedRoute
