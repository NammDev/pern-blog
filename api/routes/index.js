import authRouter from './authRouter.js'
import postRouter from './postRouter.js'
import uploadRouter from './uploadRouter.js'

const initRoutes = (app) => {
  app.use('/api/auth', authRouter)
  app.use('/api/posts', postRouter)
  app.use('/api/upload', uploadRouter)
  return app.use('/', (req, res) => {
    res.send('server on ...')
  })
}

export default initRoutes
