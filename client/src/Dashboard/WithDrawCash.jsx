import React, { useState } from 'react'
import axios from 'axios';
import BaseUrl from '../Confi';
import toast, { Toaster } from 'react-hot-toast';
export default function WithDrawCash() {
   const [show, setShow] = useState(false);
   const [withdraw,setWithdraw]=useState()
   let[depo,setdepo]=useState("Cash");
   
     const handleoption=(e)=>{
       // console.log(e.target.value);
       // const{name,value}=e.target;
         setdepo(e.target.value)
     }
   const HandleAmount=async()=>{
       setShow(true)
       let api =`${BaseUrl}/withdraw`;
       try {
         
         let response =await axios.post(api,{amount:withdraw,userid:localStorage.getItem("UserId"),status:"Withdraw",option:depo})
         console.log(response);
        //  toast.success(response.data.msg)
         setTimeout(()=>{
           setShow(false)
         },5000)
      
       } catch (error) {
         console.log(error);
         toast.error(error.response.data.msg)
         setShow(false)
   
   
       }
   
     }
  return (
    <>
    <div className='submit_cash_section'>
    <div className="submit_cash_main">
      <div className="submit_cash_heading">
      {
      (show)?<><div className='model'>
        <div className="img">
          <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW5wdjRpaTJ0cjNnazdpMTlrczhsNndtMmtmdjJpbXRqZ2dnY3A1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ADgfsbHcS62Jy/giphy.gif" alt="Gif" />
        </div>
        <h1>Don't Refers the page please wait....</h1>
        </div></>:" "
     }
        <h1>WithDraw Money in Your Account</h1>
        <div className="submit_Cash_input">
          <label > Enter the Amount :</label>
          <input type="number" value={withdraw} onChange={(e)=>{setWithdraw(e.target.value)}} />
        </div>
        <div className="submit_Cash_input">
          <label for="cars">Choose option deposite </label>
         
              <select name="option" id="cars" value={depo}  onChange={handleoption}>
                <option value="Cash" selected>Cash</option>
                <option value="UPI">UPI</option>
                <option value="By Bank">By Bank</option>
                <option value="By Cheque">By Cheque</option>
              </select>
          </div>
        <button onClick={HandleAmount}>
          WithDraw Cash
        </button>
      </div>
    </div>
  </div>
  
  <Toaster/></>
  )
}
