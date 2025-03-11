import React from 'react'
import Header from './component/Header'
import Causlor from './component/Causlor'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      
    </div>
  )
}
