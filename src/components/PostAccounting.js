import axios from 'axios'
//import './PostAccounting.css';
import React from 'react'
import { useState} from 'react'

export default function PostAccounting() {
    const[accId,setaccId]=useState('')
const[custName,setcustName]=useState('')
const[accNum,setaccNum]=useState('')
const[bankName,setbankName]=useState(0)
const[transactionType,settransactionType]=useState('')
const[phnNum ,setphnNum]=useState(0)
const[email,setemail]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            accId:accId,
         custName:custName,
          accNum:accNum,
          bankName:bankName,
          transactionType:transactionType,
          phnNum:phnNum,
          email:email   
        }
        console.log(data)
        axios.post(`http://127.0.0.1:8083/saveAccount`,data)
          .then(response => { console.log(response.data) })
          .catch(err => { console.log(err) })
         
        alert("Submitted")
      }    
  return (
    <div>
    <h1>CUSTOMER INFORMATION</h1>
    <form onSubmit={handleSubmit}>
    <label>ACCID      :            <input type='text' placeholder='enter your accid'  onChange={(e)=>setaccId(e.target.value)}>
    </input>
    </label>
    <br></br>
    <label>CUSTOMERNAME :   <input type='text'  placeholder='enter your customername'    onChange={(e)=>setcustName(e.target.value)}>
    </input>
    </label>
    <br></br>
    <label>ACCOUNTNUMBER  :  <input type='text'  placeholder='enter your accountnumber' onChange={(e)=>setaccNum(e.target.value)}>
    </input></label>
    <br></br>
    <label>BANKNAME:   <input type='text'  placeholder='enter your bankname' onChange={(e)=>setbankName(e.target.value)}>
    </input></label>
    <br></br>
    <label>TRANSACTIONTYPE:       <input type='text'  placeholder='enter your transationtype' onChange={(e)=>settransactionType(e.target.value)}></input></label>
    <br></br>
    <label>PHONE-NO:      <input type='text' placeholder='enter your phonenumber'  onChange={(e)=>setphnNum(e.target.value) }></input></label>
    <br></br>
    <label>E-MAIL ID :       <input type='email'  placeholder='enter your email' onChange={(e)=>setemail(e.target.value)}></input></label>
<br></br>
    <input type='submit'></input>
    </form>
    </div>
  )
}