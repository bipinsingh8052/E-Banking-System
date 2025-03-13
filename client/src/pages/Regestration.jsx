import React, { useEffect, useState } from 'react'
import { BsBank } from "react-icons/bs";
import '../css/registration.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import BaseUrl from '../Confi';
import { useNavigate } from 'react-router-dom';
export default function Regestration() {
  let[imgStatus,setimgStatus]=useState(false)
  let[imgset,setimgset]=useState("")
  let[input,setinput]=useState({})
  let[addharimg,setAddharimg]=useState("")
  let[signimg,setSignimg]=useState("");
  let[passport,setpassport]=useState("");
  let nav =useNavigate();
  const HandlePassport=async(e)=>{
    let files =e.target.files[0];
    console.log(files)
    setpassport(files)
    
   
  }
  const HandleInput=(e)=>{
    let{name,value}=e.target;
    setinput(values=>({...values,[name]:value}))
  }
  const uploadpassport=async()=>{
    const formData=new FormData();
    formData.append("file",passport);
    formData.append("upload_preset","bankImages")
    formData.append("cloud_name","dxhzzyccc")
    let api="https://api.cloudinary.com/v1_1/dxhzzyccc/image/upload";
    let response =await axios.post(api,formData)
    console.log(response.data.url)
    setimgset(response.data.url)
    setimgStatus(true)
  }
  const HandleSignImg=(e)=>{
    let files =e.target.files[0];
    setSignimg(files);
  }

  const HandleAddhar=async(e)=>{
    let files=e.target.files[0];
    setAddharimg(files);
    
  }


  const Submit =async(e)=>{
    console.log(input)
    const formData=new FormData();
    formData.append("file",signimg);
    formData.append("upload_preset","bankImages")
    formData.append("cloud_name","dxhzzyccc")
    let api="https://api.cloudinary.com/v1_1/dxhzzyccc/image/upload";
    let response =await axios.post(api,formData)
    const signimgin =response.data.url
    
    formData.append("file",addharimg);
    formData.append("upload_preset","bankImages")
    formData.append("cloud_name","dxhzzyccc")
    
   response =await axios.post(api,formData)
    const addharcard_img=response.data.url


    let backendurl =`${BaseUrl}/Registration`;
    try {
      let res =await axios.post(backendurl,{addharimg:addharcard_img,signimg:signimgin,passport:imgset,...input })
    console.log(res);
    toast.success('successfully  Registration ')
    nav("/login")
    } catch (error) {
      toast.error(error.response.data.msg)
    }

    
  }
  useEffect(()=>{
    uploadpassport()
  },[passport])
  return (
    <>
    <div className='Regestration'>
      <div className="main_Regestration">
        <div className="regestration_header">
          <h5>Bank Account Registration</h5>
          <p><BsBank /> AMAN BANK</p>
        </div>
        <div className="regestration_body">
          <div className="personal_info">
            <p>Personal Information</p>


            <div className="input_section">
              <div className="image">
                <div className="image_main">
                  {
                    (imgStatus)?<>
                    <img src={imgset} alt="" /></>:
                    <span>Upload the photo</span>
                  }
                </div>
                <div className="uploadimg">
                  <div className="main_upload_img">
                    <label htmlFor="">Upload passport size photo</label>
                    <input type="file"  name='passport' onChange={HandlePassport} />
                  </div>
                  <div className="fullname">
                    <label htmlFor="">Full Name</label>
                    <input type="text" name='name' onChange={HandleInput} />
                  </div>
                  <div className="mothername">
                    <label htmlFor="">Mother's Name</label>
                    <input type="text"  name='mothername' onChange={HandleInput} />
                  </div>
                </div>
              
              </div>
              <div className="number">
                <div className="main_number">
                  <label htmlFor="">Phone Number</label>
                  <input type="number" name='number' onChange={HandleInput} />
                </div>
                <div className="email">
                  <label htmlFor="">Email Address</label>
                  <input type="email" name='email' onChange={HandleInput} />
                </div>

              </div>
              <div className="fathername">
                <div className="father_n">
                  <label htmlFor="">Father's Name</label>
                  <input type="text" name='fathername' onChange={HandleInput}  />
                </div>
                <div className="dob">
                  <label htmlFor="">Date of Birth</label>
                  <input type='date' onChange={HandleInput} name='DOB' id="date" />
                </div>
              </div>
              <div className="address">
                <label htmlFor="">Address</label>

                <input type="text" name='address' onChange={HandleInput} />
              </div>
                </div>
          </div>

          <div className="Account_Info">
            <p>Account Information</p>
            <div className="account_input">
              <div className="select_One">
                <p>Account Type</p>
              
               <div className="select">
                <div>
                <input type="radio" id="Saving" name="accountstatus" value="Saving" onChange={HandleInput}/>
                <label for="Saving">Saving</label>
                </div>
                <div>
                <input type="radio" id="Current" name="accountstatus" value="Current" onChange={HandleInput}/>
                <label for="Current">Current</label>
                </div>
               </div>
              </div>
              <div className="branch_name">
                <label htmlFor="">Branch Name</label>
                <input type="text" name='branchname' onChange={HandleInput} />
              </div>
            </div>
            <div className="uploadsign">
              <div className="sign">
                <label htmlFor="">Upload Sign</label>
                <input type="file" name='signimg' onChange={HandleSignImg} />
              </div>
              <div className="addhar">
                <label htmlFor="">Addhar Card Img</label>
                <input type="file" name='addharimg' onChange={HandleAddhar} />
                </div>
            </div>
          </div>

          <div className="notes">
            <input type="checkbox" required />
            <p>I herely confirm that the information provided in account  accurate to the best of my knowledge. I also agree to abide by the bank's terms and conditions.
            </p>
          </div>

          <div className="button">
            <button onClick={Submit}> Registration
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <Toaster /></>
  )
}
