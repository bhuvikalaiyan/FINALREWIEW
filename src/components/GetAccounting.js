
import React, { useState } from 'react'
import axios from 'axios';
import './GetAccounting.css';
export default function Getdetails() {
  const[info,setInfo]=useState([])
  const [emailid,setemailid]=useState('')
    const handleget = (e) => {
        e.preventDefault();
       // console.log(data)
        axios.get(`http://127.0.0.1:8083/showquerydetails/${emailid}`)
        .then(res => setInfo(res.data))
         
    }
    const handlegetdetails = (e) => {
      e.preventDefault();
     // console.log(data)
      axios.get(`http://127.0.0.1:8083/getAccount`)
      .then(res => setInfo(res.data))
       
  }
  return (
    <div>
    <form onSubmit={handleget}>
    <input type='email' onChange={(e)=>setemailid(e.target.value)}></input>
    <input type='submit' />
    <button onClick={handlegetdetails}>GET</button>
    </form>
    <table className='table-data'>
    <thead>
      <tr>
        <th>  accId </th>
        <th>  custName </th>
        <th> accNum</th>
        <th> bankName </th>
        <th> transactionType </th>
        <th> phnNum</th>
        <th> email </th>
      </tr>
    </thead>
    <tbody>
      {info.map((data) => (
        <tr key={data.accId}>
          <td> {data.accId}</td>
          <td> {data.custName}</td>
          <td> {data.accNum}</td>
          <td> {data.bankName}</td>
          <td> {data.transactionType}</td>
          <td> {data.phnNum}</td>
          <td> {data.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  )
}