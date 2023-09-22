import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import {useNavigate} from "react-router-dom"
//import Createaccount from './Signup'
export default function DeleteAccounting() {
  const[email,setemail]=useState('')
  const del =(e)=>{
    e.preventDefault();
    axios.delete(`http://127.0.0.1:8083/dellogin/${email}`)
    console.log("delete");
    navigate('/signup')
  }
    const navigate = useNavigate();
    return (
        <div>
        <form>
        <label><b>EMAIL ID     :</b></label>
        <input type='email' name="Email" id="email" placeholder="Email" size={40} onChange={(e)=>setemail(e.target.value)}></input>
        <br></br><br></br><br></br>
        <button onClick={del}>Signup</button>  
        </form>
        </div>
    )
};