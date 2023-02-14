import classNames from 'classnames/bind'
import styles from './Write.module.scss'

const cx = classNames.bind(styles)

function RadioCategory({ cat, setCat, value }) {
  return (
    <div className={cx('cat')}>
      <input
        type='radio'
        checked={cat === value}
        name='cat'
        value={value}
        id={value}
        onChange={(e) => setCat(e.target.value)}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  )
}

export default RadioCategory
