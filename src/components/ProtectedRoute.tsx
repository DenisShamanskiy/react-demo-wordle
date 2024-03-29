import { useAppSelector } from '../hook'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'

interface IProtectedRouteProps {
  role: string
  redirectPath?: string
  children: JSX.Element
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({
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
