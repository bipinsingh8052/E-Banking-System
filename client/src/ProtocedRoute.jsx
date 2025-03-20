import axios from 'axios';
import React, { useEffect } from 'react'
import BaseUrl from './Confi';
import { useNavigate } from 'react-router-dom';
export default function ProtocedRoute(props) {
    let{Component} =props
    let nav=useNavigate();
    
    const loading=async()=>{
        let api=`${BaseUrl}/authoration`;
        try {
            const token =localStorage.getItem("token");
            // console.log(token)
           if(!token){
            nav("/home")
            }
            let response =await axios.post(api,null,{headers: { "tokensid": token }})
             console.log(response);
             localStorage.setItem("name",response.data.name)
             localStorage.setItem("UserId",response.data._id)
             if(!response.data){
                localStorage.clear()
                nav("/home")
            }
        } catch (error) {
            console.log(error);
            nav("/home")
        }
    }
    useEffect(()=>{loading()},[])
  return (
    <div>
      <Component/>
    </div>
  )
}
