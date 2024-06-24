//Styles
import styles from './Login.module.css'

import { Link } from 'react-router-dom'
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'

export default function Login() {
  const [pass, setPass] = useState(null)
  const [email, setEmail] = useState(null)
  const [canLogin, setCanLogin] = useState(false)
  // const navigate = useNavigate()
  const { login } = useLogin()


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(canLogin) {
      login(auth, email, pass)
    }
  }

  useEffect(()=>{
    if(pass && email) {
      setCanLogin(true)
    }
    else {
      setCanLogin(false)
    }
  }, [pass, email])
  return (
    <div>

      <form className={styles.form} onSubmit={(e)=>{handleSubmit(e)}}>
      <h1 className={styles.login}>Login</h1>
        <label>
          <span>Email</span>
          <input type="text" placeholder='Type your email' onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" placeholder='Type your password' onChange={(e)=>{setPass(e.target.value)}}/>
        </label>
        <button type='submit' className={canLogin ? styles.active : styles.inactive}>Login</button>
        <p>or <Link to='/SignIn'>SignIn</Link> </p>
      </form>
    </div>
  )
}
