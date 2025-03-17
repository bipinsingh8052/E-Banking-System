import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import DasNavbar from './DasNavbar';
import Footer from '../component/Footer';

export default function DashLayout() {
   
  return (
    <>
      <DasNavbar/>
      <Outlet/>
     
      <Footer/>
    </>
  )
}
