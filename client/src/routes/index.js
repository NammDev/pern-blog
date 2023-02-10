import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '~/layouts/MainLayout/MainLayout'
import FragmentLayout from '~/layouts/FragmentLayout/FragmentLayout'
import Home from '~/pages/Home/Home'
import Single from '~/pages/Single/Single'
import Write from '~/pages/Write/Write'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <Single />,
      },
      {
        path: '/write',
        element: <Write />,
      },
    ],
  },
  {
    element: <FragmentLayout />,
    children: [
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])

export default router
