import React from 'react'
import Header from './component/Header'
import Layout from './Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        </Route>
       </Routes>
     </BrowserRouter>
  )
}
