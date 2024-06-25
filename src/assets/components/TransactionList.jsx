// import React from 'react'
import "./TransactionList.css"
import { useFireStore } from "../hooks/useFireStore"

export default function TransactionList({ transaction }) {
    // console.log(transaction)
    const { deleteDocuments, response } = useFireStore("Transaction")

    const handleClick = (id) => {
      console.log('clicked on ' + id)
      deleteDocuments(id)
    }
  return (
    <div>
      {transaction.map( (trn) => (

        <div className="transactionList" key={trn.id} >
            <h2>{trn.name}</h2>
            <h2 className="amount">${trn.amount}</h2>
            <button onClick={()=>{handleClick(trn.id)}}>x</button>
        </div>
      )
      )}
      {/* {transaction.map((trn)=> (
        <div key={trn.id}>
            <p>{trn.name}</p>
        </div>
      ))} */}
    </div>
  )
}
