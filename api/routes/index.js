import authRouter from './authRouter.js'
import postRouter from './postRouter.js'

const initRoutes = (app) => {
  app.use('/api/auth', authRouter)
  app.use('/api/posts', postRouter)
  return app.use('/', (req, res) => {
    res.send('server on ...')
  })
}

export default initRoutes
