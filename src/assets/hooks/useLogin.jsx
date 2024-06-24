import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [isPending, setIspending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()
    
    const navigate = useNavigate()

    const login = async (auth, email, pass) => {
        try {
            setIspending(true)
            const res = await signInWithEmailAndPassword(auth, email, pass)
            navigate("/")
            setIspending(false)
            setError(null)
            dispatch({type: "LOGIN", payload: res.user})
        }
        catch(err) {
          console.error(err)
          setError(err)
          setIspending(false)
        }
      }

      return {login, isPending, error}
}