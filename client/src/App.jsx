import { RouterProvider } from 'react-router-dom'
import router from './routes'
import classNames from 'classnames/bind'
import styles from './App.module.scss'

const cx = classNames.bind(styles)
function App() {
  return (
    <div className={cx('app')}>
      <div className={cx('container')}>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
