import React, { useEffect, useState } from 'react'
import '../css/mini_statement.css'
import BaseUrl from '../Confi'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
export default function MiniStatment() {
  let[data,setdata]=useState([])
  let[show,setshow]=useState(false)
  let [startdate,setstartdate]=useState("")
  let[endDate,setEndDate]=useState("");




const Searchbar=async()=>{
  // console.log(date)
  let api =`${BaseUrl}/searchStatement`;
  if(startdate==""  || endDate==""){
    console.log("not fill");
    toast.error("Please Fill the Date file ....!!")
  }
  else{
    try {
      let response =await axios.post(api,{userid:localStorage.getItem("UserId"),startdate:startdate,enddate:endDate})
      console.log(response.data)
      setdata(response.data)
      
    } catch (error) {
      console.log(error.response.data);
      setshow(true)
    }
  }
}


  const Loading=async()=>{
    let api=`${BaseUrl}/miniStatement`
    try {
      let response =await axios.post(api,{userid:localStorage.getItem("UserId")})
      // console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.log("error");
    }
  }



  useEffect(()=>{
    Loading()
  },[])
  return (<>
    <div className='mini_statement'>
      <div className="mini_sort">
        <div className="mini_first_sort">
          <p>Enter the start Date </p>
          <input type="date" name='startdate' value={startdate} onChange={(e)=>{setstartdate(e.target.value)}} />
        </div>
        <div className="mini_Second_sort">
          <p>Enter the last Date</p>
          <input type="date"  name='enddate' value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}/>
        </div>
        <button onClick={Searchbar}>Search it</button>
      </div>
      <div className="account_statement_detail">
       {
        (show)?(<p id='notAdata'>not a Data...!!!</p>):( <table id="customers">
        <thead>
          <tr>
            <th>Date</th>
            <th>Transactions</th>
            <th>Credit</th>
            <th>Dedit</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,index)=>{
              const dateString = e.date;
                const date = new Date(dateString);

                const formattedDate = date.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short", // "Mar"
                  year: "numeric",
                });
              return(
              <tr key={index}>
                <td>{formattedDate}</td>
                <td>UPI</td>
                {
                  (e.status=="Deposite")?<td style={{color:"green", fontWeight:"490"}}>{e.amount}</td>:<td>___</td>
                }
                {
                  (e.status=="Withdraw")?<td style={{color:"red", fontWeight:"490"}}>{e.amount}</td>:<td>___</td>
                }
              </tr>
            )})
          }

        </tbody>
      </table>)
       }
      </div>
    </div>
<Toaster/>
</>

  )
}
