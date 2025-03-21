import React, { useEffect, useState } from 'react'
import '../css/account_statement.css'
import BaseUrl from '../Confi'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
export default function AccountStatement() {
  let [data,setdata]=useState([])
  const Loading=async()=>{
    let api=`${BaseUrl}/accountStatement`;
    try {
      let response=await axios.post(api,{userid:localStorage.getItem("UserId")});
      console.log(response.data)
      setdata(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg)
    }
  }
  let answer=0;


  useEffect(()=>{
    Loading()
  },[])
    return (
      <>
    <div className='account_statement'>
      <div className="account_statement_section">
        <div className="account_statement_detail">
          <table id="customers">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transactions</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {
            

                data.map((e,index)=>{
                  if (e.status === "Deposite") {
                    answer += e.amount; // Add deposit
                    // console.log(answer)
                } else if (e.status === "Withdraw") {
                  answer -= e.amount; // Add deposit
                  // console.log(answer)
                }return(
                  
                  <tr key={index}>
                    <td>{e.date}</td>
                    <td>UPI</td>
                    {
                      (e.status=="Deposite")?<td style={{color:"green",fontWeight:"600"}}>{e.amount}</td>:<td>----</td>
                    }
                    {
                      (e.status=="Withdraw")?<td style={{color:"red", fontWeight:"600"}}>{e.amount}</td>:<td>----</td>
                    }
                    <td>{ answer}</td>
                  </tr>
                )})
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Toaster/>
    </>
  )
}
