import React from 'react'
import Header from './component/Header'
import Layout from './Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Regestration from './pages/Regestration'
import Home from './pages/Home'
import DashLayout from './Dashboard/DashLayout'
import ProtocedRoute from './ProtocedRoute'
export default function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='regstration' element={<Regestration/>}/>
        </Route>
       </Routes>
       <Routes>
        <Route path='login' element={<Login/>}>
        </Route>
       </Routes>
       <Routes>
        <Route path="dashboard" element={<ProtocedRoute Component={DashLayout}/> }>
        
        </Route>
       </Routes>
     </BrowserRouter>
  )
}
