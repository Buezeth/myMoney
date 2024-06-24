import React, { useEffect, useState } from 'react'
import './TransactionForm.css'
import { useFireStore } from '../hooks/useFireStore'

export default function TransactionForm({ uid }) {
    const [amount, setAmount] = useState()
    const [name, setName] = useState()
    const { addDocument, response } = useFireStore("Transaction")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            uid,    
            name,
            amount
        })
        addDocument({uid, name, amount})
    }

    useEffect(()=>{
        if(response.success) {
            setName('')
            setAmount('')
        }
    }, [response.success])
  return (
    <div>
        <h1>Transaction Form</h1>
      <form className='form' onSubmit={(e)=>{handleSubmit(e)}}>
        <label>
            <span>Name</span>
            <input type="text"
                onChange={(e)=>{setName(e.target.value)}}
             />
        </label>
        <label>
            <span>Amount</span>
            <input type="number"
                onChange={(e)=>{setAmount(e.target.value)}}
             />
        </label>
        <button>Add Transaction</button>
      </form>
    </div>
  )
}
