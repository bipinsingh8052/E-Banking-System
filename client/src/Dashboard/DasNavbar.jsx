import React, { useEffect } from 'react'
import '../css/dasNavbar.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import BaseUrl from '../Confi';
export default function DasNavbar() {
    let nav=useNavigate();
    let name =localStorage.getItem("name");
    console.log(name)
    const loading=()=>{
         
        if(!name){
            nav("/home")
        }
    }
    // console.log(name,"name")
    
    const Logout=()=>{
        localStorage.clear();
        nav("/home")
    }
    useEffect(()=>{loading()},[])
    
    
  return (
    <div className='das_Navbar'>
        <div className="das_header">
            Welcome To Aman Bank
        </div>
        <div className="das_subheader">
            <h6>welcome : <span>{name}</span></h6>
            <button  onClick={Logout}>logout</button>
        </div>
        
      
    </div>
  )
}
