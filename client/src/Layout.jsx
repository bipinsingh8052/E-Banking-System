import React from 'react'
import Header from './component/Header'
import Causlor from './component/Causlor'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

export default function Layout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      
    </div>
  )
}
