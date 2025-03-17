import React from 'react'
import Header from './component/Header'
import Layout from './Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Regestration from './pages/Regestration'
import Home from './pages/Home'
import DashLayout from './Dashboard/DashLayout'
import ProtocedRoute from './ProtocedRoute'
import About from './pages/About'
import Contact from './pages/Contact'
import Protoced from './component/Protoced'
import YourProfile from './Dashboard/YourProfile'
import AccountStatement from './Dashboard/AccountStatement'
import SubmitCash from './Dashboard/SubmitCash'
import WithDrawCash from './Dashboard/WithDrawCash'
import MiniStatment from './Dashboard/MiniStatment'
import ResetPassword from './Dashboard/ResetPassword'
import BalanceInQuiry from './Dashboard/BalanceInQuiry'
export default function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Protoced Component={Layout}/>}>
        <Route index element={<Protoced Component={Home}/>}/>
        <Route path='home' element={<Protoced Component={Home}/>}/>
        <Route path='about' element={<Protoced Component={About}/>}/>
        <Route path='contact' element={<Protoced Component={Contact}/>}/>
        <Route path='regstration' element={<Protoced Component={Regestration}/>}/>
        </Route>
       </Routes>
       <Routes>
        <Route path='login' element={<Protoced Component={Login}/>}>
        </Route>
       </Routes>
       <Routes>
        <Route path="dashboard" element={<ProtocedRoute Component={DashLayout}/> }>
        <Route index element={<ProtocedRoute Component={YourProfile}/>}/>
        <Route path='/dashboard/profile' element={<ProtocedRoute Component={YourProfile}/>}/>
        <Route path='/dashboard/accountStatement' element={<ProtocedRoute Component={AccountStatement}/>}/>
        <Route path='/dashboard/submitcash' element={<ProtocedRoute Component={SubmitCash}/>}/>
        <Route path='withdrawcash' element={<ProtocedRoute Component={WithDrawCash}/>}/>
        <Route path='ministatement' element={<ProtocedRoute Component={MiniStatment}/>}/>
        <Route path='password' element={<ProtocedRoute Component={ResetPassword}/>}/>
        <Route path='balance' element={<ProtocedRoute Component={BalanceInQuiry}/>}/>
        </Route>
       </Routes>
     </BrowserRouter>
  )
}
