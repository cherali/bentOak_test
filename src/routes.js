import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Messages = lazy(() => import('./pages/Messages'))

const NotFound = lazy(() => import('./pages/NotFound'))


export const routes = [
  { path: '/', compoennt: Home, private: false, },
  { path: '/login', compoennt: Login, private: false, },
  { path: '/messages', compoennt: Messages, private: false, },

  { path: '/not-found', compoennt: NotFound, private: false, },
]