import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useSignIn = ( ) => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [isPending, setIspending] = useState(false)
    const { dispatch } = useAuthContext()


    const signup = async (auth, email, pass, username) => {
        setIspending(true)
        try {
            const res = await createUserWithEmailAndPassword(auth, email, pass, username)
            // console.log(res.user)
            
            if(!res) {
                throw new Error("Could mot create user")
            }
            
            navigate("/")
            
            //Display name for user
            
            await updateProfile( res.user , {
                displayName: username
            })
                .then(()=>{console.log(res.user.displayName)})
                .catch((err)=>{console.error(err)})
            setIspending(false)
            setError(false)

            dispatch({type: "LOGIN", payload: res.user})
        }
        catch(err) {
             console.error(err)
             setError(err.message)
             setIspending(false)
        }
    }

    return { signup, error, isPending }
}