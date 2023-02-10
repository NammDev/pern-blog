import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({
  to,
  href,
  disabled,
  primary = true,
  secondary,
  className,
  left,
  right,
  text,
  ...passProp
}) {
  const attributes = { ...passProp }

  // if to -> Link / if href -> a
  let Comp = 'button'
  if (to) {
    attributes.to = to
    Comp = Link
  } else if (href) {
    attributes.href = href
    Comp = 'a'
  }

  // if disabled
  if (disabled) {
    Object.keys(attributes).forEach((key) => {
      if (key.startsWith('on') && typeof attributes[key] === 'function') {
        delete attributes[key]
      }
    })
  }

  // another options
  if (secondary || className) {
    primary = false
  }

  const classes = cx('wrapper', {
    primary,
    secondary,
    disabled,
    [className]: className,
  })

  return (
    <Comp className={classes} {...attributes}>
      {left && left}
      <span className={cx('title')}>{text}</span>
      {right && right}
    </Comp>
  )
}

export default Button
