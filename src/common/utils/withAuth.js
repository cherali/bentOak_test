import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const authPath = ['/', '/login', '/register']

export const withAuth = Cmp => () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // using token as identifying the user login, may want to send token in cookie
  const token = useSelector(s => s.user?.token)

  // if token not exist and try to access private route
  if (!token && !authPath.includes(pathname)) {
    setTimeout(() => {
      navigate('/login')
    })
    return null;
  }

  // if user logedin redirect user 
  if (!!token && authPath.includes(pathname)) {
    setTimeout(() => {
      navigate('/messages')
    })
    return null;
  }


  return (!!token || (!token && authPath.includes(pathname))) && <Cmp />
}
