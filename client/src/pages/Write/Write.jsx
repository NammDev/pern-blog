import classNames from 'classnames/bind'
import styles from './Write.module.scss'

const cx = classNames.bind(styles)

function Write() {
  return <div className={cx('write')}>Write</div>
}

export default Write
