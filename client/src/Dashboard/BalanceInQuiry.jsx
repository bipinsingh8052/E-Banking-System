import React, { useEffect, useState } from 'react'
import '../css/checkbalance.css'
import BaseUrl from '../Confi'
import axios from 'axios'
export default function BalanceInQuiry() {
  let [amount,setamount]=useState("")


  const loading=async()=>{
    let api=`${BaseUrl}/checkbalance`;
    try {
      let response =await axios.post(api,{id:localStorage.getItem("UserId")})
      // console.log(response)
      setamount(response.data.amount)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    loading()
  },[])
  return (
    <div className='checkbalance'>
     
        <div className="checkbalance_header">
          <h1> Your Balance : <span>{amount}</span></h1>
      </div>
      
    </div>
  )
}
