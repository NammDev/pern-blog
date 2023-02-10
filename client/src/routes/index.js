import { createBrowserRouter } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(
  routes.map((route) => {
    const Protected = route.protected
    const Layout = route.layout
    const Page = route.page
    return {
      path: route.path,
      element: (
        <Protected>
          <Layout>
            <Page />
          </Layout>
        </Protected>
      ),
    }
  })
)

export default router
