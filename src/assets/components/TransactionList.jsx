// import React from 'react'
import "./TransactionList.css"

export default function TransactionList({ transaction }) {
    console.log(transaction)
  return (
    <div>
      {/* {transaction.map( (trn) => {

        <div className="transactionList" key={trn.id} >
            <h2>{trn.name}</h2>
            <p>{trn.amount} $</p>
        </div>
      }
      )} */}
      {transaction.map((trn)=> {
        <div key={trn.id}>
            <p>{trn.name}</p>
        </div>
      })}
    </div>
  )
}
