import { useLocation } from 'react-router-dom'


const authPath = ['/', '/login', '/register']

export const withAuth = Cmp => () => {
  const { pathname } = useLocation()

  // using token as identifying the user login, may want to send token in cookie
  const token = null


  if (!token && !authPath.includes(pathname)) {
    return null;
  }


  return (!!token || (!token && authPath.includes(pathname))) && <Cmp />
}
