import React, { useEffect, useRef, useState } from 'react'
import './TransactionForm.css'
import { useFireStore } from '../hooks/useFireStore'

export default function TransactionForm({ uid }) {
    const [amount, setAmount] = useState('')
    const [name, setName] = useState('')
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    const { addDocument, response} = useFireStore("Transaction")

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue('')
        addDocument({uid, name, amount})
        setName("")
        setAmount("")
        inputRef.current.focus()
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
            value={name}
                onChange={(e)=>{setName(e.target.value)}}
                ref={inputRef}
             />
        </label>
        <label>
            <span>Amount</span>
            <input type="number"
            value={amount}
                onChange={(e)=>{setAmount(e.target.value)}}
             />
        </label>
        <button>Add Transaction</button>
      </form>
    </div>
  )
}
