import {Navigate, Outlet, useLocation} from 'react-router-dom'

export const RequireAuth = () => {
  const location = useLocation()
  const isAuth = localStorage.getItem('token')
  return (
    isAuth.length > 2
      ? <Outlet />
      : <Navigate to='/login' state={{from: location}} replace/>
  )
}

export default RequireAuth