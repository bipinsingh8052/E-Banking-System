import React, { useEffect, useState } from 'react'
import '../css/profile.css'
import BaseUrl from '../Confi'
import axios from 'axios'
export default function YourProfile() {
  let[data,setdata]=useState({})
  const Loading=async()=>{
    let api =`${BaseUrl}/profile`
    try {
      let response =await axios.post(api,{userid:localStorage.getItem("UserId")});
      console.log(response.data);
      setdata(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    Loading()
  },[])
  return (
    <div className='profile'>
      <div className="profile_section">
        <div className="img">
          <img src={data.passportimg} alt="" />
        </div>
        <div className="profile_para">
          <div className="left_side_para">
            <div className="name">
              <p>Account Holder name :</p>
              <span>{data.name}</span>
            </div>
            <div className="dob">
              <p>Date of birth :</p>
              <span> {data.BirthDate}</span>
            </div>
          </div>


          <div className="left_side_para">
            <div className="name">
              <p>Father name :</p>
              <span>{data.fatherName              }</span>
            </div>
            <div className="dob">
              <p>Mother name :</p>
              <span> {data.mothername}</span>
            </div>
          </div>

          <div className="left_side_para">
            <div className="name">
              <p>Email Address :</p>
              <span>{data.email}</span>
            </div>
            <div className="dob">
              <p>Phone number :</p>
              <span> {data.mobile}</span>
            </div>
          </div>

          <div className="left_side_para">
            <div className="name">
              <p>Account Type :</p>
              <span>{data.accountStatus}</span>
            </div>
            <div className="dob">
              <p>Branch name :</p>
              <span> {data.branchname}</span>
            </div>
          </div>


          <div className="left_side_para">
            <div className="name">
              <p>Account number :</p>
              <span>{data.acountNumber}</span>
            </div>
            <div className="dob">
              <p>IFSC code :</p>
              <span>ABIO0003203</span>
            </div>
          </div>

          <div className="right_side_para">
            <p>Address :</p>
            <span>{data.address}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
