import './NavBar.css'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/config'
import { useEffect, useState } from 'react'
import { useLogOut } from '../hooks/useLogOut'
import { useAuthContext } from '../hooks/useAuthContext'

export default function NavBar() {
  const [userSignedIn, setUserSignedIn] = useState(false)
  const { user, userLogged } = useAuthContext()
  const { logOut } = useLogOut()

  useEffect(()=>{
    if(userLogged) {
      setUserSignedIn(true)
    }
    else {
      setUserSignedIn(false)
    }
  }, [])
  return (
    <div className='nav-bar'>
        <nav>
            <li className='home-link'><Link to='/'>myMoney</Link></li>
            <ul className='other-links'>
                {userLogged ||<li><Link to='/Login'>Login</Link></li>}
                {userLogged || <li><Link to='/SignIn'>Sign Up</Link></li>}
                {userLogged && <li>Hello, {user?.displayName}</li>}
                {userLogged && <li><button onClick={logOut}>LogOut</button></li>}
            </ul>
        </nav>
    </div>
  )
}
