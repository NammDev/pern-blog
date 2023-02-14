import { Link, useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Auth.module.scss'
import { useContext, useState } from 'react'
import Button from '~/components/Button/Button'
import { AuthContext } from '~/context/authContext'

const cx = classNames.bind(styles)

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(null)

  const { login } = useContext(AuthContext)

  const postApi = async () => {
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setErr(err.response.data)
    }
  }

  const validate = (email, password) => {
    const isValidateEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const isValidatePassword = password
    if (!isValidateEmail) setErr('Failed Email')
    if (!isValidatePassword) setErr('Please input your Password')
    return isValidateEmail && isValidatePassword
  }

  const handleLogin = (e) => {
    e.preventDefault()
    validate(email, password) && postApi()
  }

  return (
    <div className={cx('auth')}>
      <h1>Login</h1>
      <form>
        <input
          required
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input
          required
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          autoComplete='off'
        />
        <Button onClick={handleLogin} text='Login' />
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
