import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { collection, onSnapshot } from "firebase/firestore"



export const useCollection = (coll) => {
    const [doc, setDoc] = useState()
    const [error, setError] = useState(null)

    let database = []

    useEffect(()=>{
        const unsubscribe = onSnapshot(collection(db, coll), (querySnapshot)=>{
            // console.log(querySnapshot.data())
            try {
                querySnapshot.forEach((element) => {
                    // console.log(element.data())
                    database.push({...element.data(), id: element.id})
                });
            } catch(err) {
                setError("Couldn't fetch data")
            }
    
            setDoc(database)
        })

        return ()=> unsubscribe()
    }, [coll])
    
    return { doc, error }
}