import { routes } from '../routes'
import { useSelector } from 'react-redux'

export function useAppRoute() {
  const token = useSelector(s => s.user?.token)
  const isLogedIn = !!token;


  return routes.filter(r => isLogedIn ? r : !r.private);
}
