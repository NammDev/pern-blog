import classNames from 'classnames/bind'
import styles from './Single.module.scss'

const cx = classNames.bind(styles)

function Single() {
  return <div className={cx('single')}>Single</div>
}

export default Single
