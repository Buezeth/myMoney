import { useState, useReducer, useEffect } from "react"
import { db } from "../firebase/config"
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore"

const initialState = {
    document: null,
    isPending: null,
    error: null,
    success: null,
}

export const firestoreReducer = (state, action) => {
    action
    switch(action.type) {
        case "IS_PENDING":
            console.log("isPending")
            return {isPending: true, document: null, success: null, error: null}
        case "ADD_DOC":
            console.log("add doc")
            return {...state, isPending: false, document: action.payload, success:true}
        case "ERROR":
            console.log("Error")
            return {...state, isPending: false, error: action.payload, success:false, document: null}
        default:
            return state
    }
}

export const useFireStore = (collect) => {
     const [response, dispatch] = useReducer(firestoreReducer, initialState)
     const [isCancelled, setIsCancelled] = useState(false)

     const docRef = doc(collection(db, collect))

     //Dispatche if not cancelled
     const dispatchIfNotCanceled = (action) => {
        if(!isCancelled) {
            dispatch(action)
        }
     }

     //add doc
     const addDocument = async (doc) => {
        dispatch({type: "IS_PENDING"})
        try {
            const createdAt = Timestamp.fromDate(new Date())
            const addedDoc = await setDoc(docRef, {...doc, createdAt})
            dispatchIfNotCanceled({type: "ADD_DOC", payload: addedDoc})
        }
        catch(err) {
            console.error(err)
            dispatchIfNotCanceled({type: "ERROR", payload: err.message})
        }
     }

     //delete doc
     const deleteDocuments = async (id) => {

     }

     useEffect(()=>{
        return () => setIsCancelled(true)
     }, [])


     return { addDocument, response, deleteDocuments }
}