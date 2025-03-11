import { useState } from "react"
import '../css/login.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export default function Login() {
  let [model,setmodel]=useState(false)
  let [sign,setsign]=useState({
    email:"",
    password:""
  });

  let nav =useNavigate();
  function inputvalue(e){
   
    const {name,value}=e.target;
    setsign({
      ...sign,
      [name]:value
    });
  }
  const goWithReg=()=>{
    nav("/regstration")
  }



  const FromCheck=async(e)=>{
    e.preventDefault();
    let api=""
    try {
      let resp=await axios.post(api,sign);
      console.log(resp)
    } catch (error) {
      console.log("error")
    }
  }


  const forgetpassword=async()=>{
    setmodel(true);
    let api=""
    try {
      let response =await axios.post(api,sign)
      console.log(response)
    } catch (error) {
      console.log("error")
      
    }
  }
  return (
    <>
     <div className="conatiner_login">
        <div className="form">
            <h1>Login</h1>
            <form onSubmit={FromCheck} >
                <div className="email">
                    <label htmlFor="">Enter Account No</label>
                    <input type="email" name='account' value={sign.email} placeholder="enter account no " onChange={inputvalue} />
                </div>
               
                <div className="password">
                    <label htmlFor="">Enter Password</label>
                    <input type="password" name='password' value={sign.password} placeholder="enter password" onChange={inputvalue} />
                </div>

                <div className="login_option">
                  <div className="login_checkbox">
                   <div className="checkbox">
                   <input type="checkbox"  required/>
                   </div>
                    <p>Remember it</p>
                  </div>
                  <div className="forget" onClick={forgetpassword}>
                    <p>Forget your password? </p>
                  </div>
                </div>
               
                <div className="button">
                <button type="submit"> Sign in</button>
                <p>Don't have an account? <span onClick={goWithReg}>Regstration</span></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}