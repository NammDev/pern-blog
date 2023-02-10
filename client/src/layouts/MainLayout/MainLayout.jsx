import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import classNames from 'classnames/bind'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
  return (
    <div className={cx('main')}>
      <div className={cx('container')}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
