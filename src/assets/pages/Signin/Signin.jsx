//Styles
import styles from './Signin.module.css'
//React - Firebase
import { useEffect, useState } from 'react'
import { auth } from '../../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from "../../hooks/useSignIn"


export default function Signin() {
  const [email, setEmail] =useState(null)
  const [pass, setPass] = useState(null)
  const [username, setUserName] = useState(null)
  const [canSignUp, setCanSignUp] = useState(false)
  const { signup, error, isPending } = useSignIn()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!error && canSignUp) {
      console.log("email: " + email + " pass: " + pass)
      signup(auth, email, pass, username)
    }
  }

  useEffect(()=>{
    if(email && username && pass) {
      setCanSignUp(true)
    }
    else {
      setCanSignUp(false)
    }
  }, [email, pass, username])
  // console.log(auth?.currentUser?.email)

  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}} className={styles.signIn}>
      <h1>Sign Up</h1>
      <label>
          <span>Email</span>
          <input type="eamil" placeholder='Type your email' onChange={(e)=>{setEmail(e.target.value)}} />
        </label>
        <label>
          <span>UserName</span>
          <input type="text" placeholder='Type your username' onChange={(e)=>{setUserName(e.target.value)}} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" placeholder='Type your password' onChange={(e)=>{setPass(e.target.value)}} />
        </label>
        <button type='submit' className={canSignUp ? styles.active: styles.inactive}>Sign Up</button>
      </form>
    </div>
  )
}
