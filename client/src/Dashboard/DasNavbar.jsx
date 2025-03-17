import React, { useEffect } from 'react'
import '../css/dasNavbar.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
        <div className="das_real_navbar">

        </div>
        <Navbar expand="lg"  className='dasnavbar_mainsection'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-5">
            <Nav.Link as={Link} to="/dashboard/profile" className='nav_option' >Profile</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/accountStatement" className='nav_option' >Account Statement</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/submitcash" className='nav_option' >Submit Cash</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/withdrawcash"  className='nav_option'>Withdraw Cash</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/ministatement"  className='nav_option'>Mini Statement</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/balance" className='nav_option'>Check Balance</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/password" className='nav_option'>Reset Password</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      
    </div>
  )
}
