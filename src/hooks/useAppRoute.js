import { routes } from '../routes'

export function useAppRoute() {
  const token = null;
  const isLogedIn = !!token;


  return routes.filter(r => isLogedIn ? r : !r.private);
}
