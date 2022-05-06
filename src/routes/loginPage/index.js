import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import styles from './LoginPage.module.scss'

function LoginPage() {
  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordView, setIsPasswordView] = useState(false)

  const passwordViewIcon = isPasswordView ? <FaRegEye size={15} /> : <FaRegEyeSlash size={15} />

  const history = useHistory()

  const onChangeID = (e) => {
    setID(e.target.value)
  }

  const onChangePW = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // TODO: 로그인을 위한 코드

    history.push('/')
    window.location.reload()
  }

  const handlePasswordIcon = () => {
    setIsPasswordView((prev) => !prev)
  }

  return (
    <div className={styles.loginContainer}>
      <header>TODO LIST</header>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <input placeholder='ID를 입력하시오' value={ID} onChange={onChangeID} />
        </div>
        <div className={styles.inputBox}>
          <input
            placeholder='비밀번호를 입력하시오'
            type={!isPasswordView && 'password'}
            value={password}
            onChange={onChangePW}
          />
          <button type='button' className={styles.passwordIcon} onClick={handlePasswordIcon}>
            {passwordViewIcon}
          </button>
        </div>
        <button type='submit' className={styles.loginBtn}>
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default LoginPage
