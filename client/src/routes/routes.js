import { MainLayout, FragmentLayout } from '~/layouts'
import { Home, Login, Register, Single, Write } from '~/pages'
import { PublicRoute, PrivateRoute } from './proteced'

const routes = [
  { path: '/', page: Home, layout: MainLayout, protected: PublicRoute },
  { path: '/post/:id', page: Single, layout: MainLayout, protected: PrivateRoute },
  { path: '/write', page: Write, layout: MainLayout, protected: PrivateRoute },
  { path: '/login', page: Login, layout: FragmentLayout, protected: PublicRoute },
  { path: '/register', page: Register, layout: FragmentLayout, protected: PublicRoute },
]

export default routes
