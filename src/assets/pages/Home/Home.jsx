//styles
import styles from './Home.module.css'
import { auth } from '../../firebase/config'
import TransactionForm from '../../components/TransactionForm'
import TransactionList from '../../components/TransactionList'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import { useEffect, useState } from 'react'

export default function Home() {

  const { user } = useAuthContext()
  const { doc, error } = useCollection("Transaction")
    if(auth.currentUser) {
        console.log(auth.currentUser.email)
        console.log(doc)
    }
    const [document, setDocument] = useState()

    useEffect(()=>{
      if(doc) {
        setDocument(doc)
        console.log("I've gotten the doc")
      }
    }, [doc])
  return (
    <div className={styles.home}>
      {/* <p>Home</p> */}
      <div>
        <h1>Transactions</h1>
        {error && <p>{error}</p>}
        {doc && <TransactionList transaction={doc} />}
        {/* {document && document.map((trn) => {
          <div>
            <p>Hello</p>
          </div>
        })} */}
      </div>
      <div><TransactionForm uid={user.uid} /></div>

    </div>
  )
}
