import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashLayout() {
    let nav=useNavigate();
    const Logout=()=>{
        localStorage.clear();
        nav("/home")
    }
  return (
    <div>
      <h1>This is dashboard in this</h1>
      <button onClick={Logout}>logout</button>
    </div>
  )
}
