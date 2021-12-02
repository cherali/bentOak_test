import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))


export const routes = [
  { path: '/', compoennt: Home, private: false, },
  { path: '/not-found', compoennt: NotFound, private: false, },
]