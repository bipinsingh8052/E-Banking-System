import React, { useState } from 'react'
import '../css/password.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import BaseUrl from '../Confi'
import { useNavigate } from "react-router-dom";
export default function ResetPassword() {
  let [input,setinput]=useState({})
  
  let [btnstatus,setbtnStatus]=useState(false);
  let nav =useNavigate();
  const Handleinput=(e)=>{
    let{name,value}=e.target;
    setinput(values=>({...values,[name]:value}))
  }
  const buttonClick =()=>{
    console.log(input);
  }


  const SendOTP =async(e)=>{
    e.preventDefault()
    let api =`${BaseUrl}/SendOTP`;
    try {
      let response =await axios.post(api,{id:localStorage.getItem("UserId")});
      console.log(response)
      toast.success(response.data.msg)
      setbtnStatus(true)
    } catch (error) {
      toast.error(error.response.data.msg)

    }
  }

  const Handleform=async(e)=>{
    e.preventDefault();
    console.log("form");
    if(input.newpassword != input.confomepass){
      toast.error("please write it same passord in new pasword and confirm password field")
    }
    if(input.newpassword === input.confomepass){
      let api =`${BaseUrl}/resetpassword`;
      console.log("equal")
        try {
          
          let response =await axios.post(api,{userid:localStorage.getItem("UserId"),...input})
          console.log(response);
          toast.success(response.data.msg)
          nav("/dashboard/profile");
        } catch (error) {
          toast.error(error.response.data.msg)
        }
    }
    
  }
  return (
    <>
    <div className='resetPassword_section'>
      <div className="reset_password_main">
        <div className="heading">
          <h1>
            You can reset your password
          </h1>
          <div className="body">
            <form  method="post" onSubmit={Handleform}>
              <div className="oldpassword">
                <label >Enter the current Password</label>
                <input type="text" name='oldpassword' onChange={Handleinput} />
              </div>
              <div className='Newpassword'>
                <label >Enter the New Password</label>
                <input type="password" name='newpassword' onChange={Handleinput} />
              </div>
              <div className="confomepassword">
                <label >Write Confime Password</label>
                <input type="text" name='confomepass' onChange={Handleinput}  />
              </div>
              {
                (btnstatus)?
                <> <input type='number' placeholder='Enter the Otp'  id='otpfiled'  name='otp' onChange={Handleinput}/>
                <button type="submit" onClick={buttonClick}>Submit</button></>:
                <>
               
                <button  onClick={SendOTP}>Send OTP</button></>
              }
            </form>
          </div>
        </div>
      
      </div>
    </div>
    < Toaster/>
    </>
  )
}
